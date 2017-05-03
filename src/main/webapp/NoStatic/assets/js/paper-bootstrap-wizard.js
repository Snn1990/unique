
var dataStr = "<option disabled=\"\" selected=\"\">- 选择备忘录标签 -</option>";
var dataStrTemp = "<option>6+ Persons</option>";
searchVisible = 0;
transparent = true;

$(document).ready(function () {


    $.ajax({
        type: "get",
        url: "/unique/services/userInfo",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: true,
        success: function(data) {
            if(data.status == 'success'){
                degnlu = 1;
                read();
                initData();
            }else{
                window.location.href="/unique/index.html";
            }
        }
    });



});


//Function to show image before upload
var bwlTitleListData ={};
function initData() {
    $.ajax({
        type: "post",
        url: "/unique/services/bwlInfoList",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: true,
        success: function(data) {
            var json = JSON.parse(data.data);
            var tempStr = dataStr;
            for(var i = 0;i<json.length;i++){
                tempStr += "<option>"+json[i].titleText+"</option>";
                bwlTitleListData[json[i].titleText] = json[i].titleId;
            }
            console.log(bwlTitleListData);
            $("#selectBwlTitle").append(tempStr);
        }
    });
}

function read() {
    /*  Activate the tooltips      */
    $('[rel="tooltip"]').tooltip();

    // Code for the Validator
    var $validator = $('.wizard-card form').validate({
        rules: {
            firstname: {
                required: true,
                minlength: 3
            },
            lastname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true
            }
        },
    });

    // Wizard Initialization
    $('.wizard-card').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function (tab, navigation, index) {
            var $valid = $('.wizard-card form').valid();
            if (!$valid) {
                $validator.focusInvalid();
                return false;
            }
        },

        onInit: function (tab, navigation, index) {

            //check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            $width = 100 / $total;

            navigation.find('li').css('width', $width + '%');

        },

        onTabClick: function (tab, navigation, index) {

            var $valid = $('.wizard-card form').valid();

            if (!$valid) {
                return false;
            } else {
                return true;
            }

        },

        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var $wizard = navigation.closest('.wizard-card');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
            }

            //update progress
            var move_distance = 100 / $total;
            move_distance = move_distance * (index) + move_distance / 2;

            $wizard.find($('.progress-bar')).css({width: move_distance + '%'});
            //e.relatedTarget // previous tab

            $wizard.find($('.wizard-card .nav-pills li.active a .icon-circle')).addClass('checked');

        }
    });


    // Prepare the preview for profile picture
    $("#wizard-picture").change(function () {
        readURL(this);
    });

    $('[data-toggle="wizard-radio"]').click(function () {
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked', 'true');
        }
    });

    $('.set-full-height').css('height', 'auto');
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function savebwlinfo() {
    var info = $("#exampleInputEmail1").val();
    var selectInfo = $("#selectBwlTitle").val();
    var id = bwlTitleListData[selectInfo];
    // 获取当前时间戳(以s为单位)
    var timestamp = Date.parse(new Date())/1000;
    var dataJson = {"bwlTxt":info,"bwlTitleId":id,"createTime":timestamp};
    //var jsondata = JSON.stringify({"bwlTxt":info,"bwlTitleId":id,"createTime":timestamp});


    console.log(dataJson);
    $.ajax({
        type: "post",
        url: "/unique/services/saveBwlInfo",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data:dataJson,
        async: true,
        success: function(data) {
            if(data.data == "success"){
                window.location.href="bwl.html";
            }else{
                alert("保存失败");
            }

        }
    });

}

function savebwlinfo1() {
    var info = $("#exampleInputEmail1").val();
    if(info == null || info == ""){
        $.simplyToast("标签不能为空", 'danger');
    }else{
        var jsonData = {};
        $.simplyToast("保存"+info, 'success');
        jsonData.titleText = info;
        $.ajax({
            type: "post",
            url: "/unique/services/saveBwlTitle",
            contentType: 'application/x-www-form-urlencoded;charset=utf-8',
            data:jsonData,
            async: true,
            success: function(data) {
                if(data.data == "success"){
                    $.simplyToast("保存"+info+"成功，即将跳转到备忘录页面", 'success');
                    window.location.href="bwl.html";
                }else{
                    $.simplyToast("保存失败", 'danger');
                }

            }
        });
    }


}
$('#selectBwlTitle1').change(function(){
    var p1=$(this).children('option:selected').val();//这就是selected的值
    $("#exampleInputEmail1").val(p1);
    // window.location.href="xx.php?param1="+p1+"¶m2="+p2+"";//页面跳转并传参
});
