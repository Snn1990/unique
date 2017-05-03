// $.simplyToast('This is a success message!', 'success');
// $.simplyToast('This is a danger message!', 'danger');
// $.simplyToast('This is a info message!', 'info');
// $.simplyToast('This is also an info message!'); //'info' is the default type
// $.simplyToast('This is a warning message!', 'warning');
/**
 * 回车键时间监听
 */
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        var accountNo = $("#name").val();
        var password = $("#passwd").val();
        var imgCode = $("#code").val();
        $.simplyToast('按下了回车键', 'success');
        var falg = 1;
        if (accountNo == "" || accountNo == null) {
            //$.simplyToast("accountNo不能为空", 'danger');
            falg = 0;
        }
        if (password == "" || password == null) {
            //$.simplyToast("password不能为空", 'danger');
            falg = 0;
        }
        if (imgCode == "" || imgCode == null) {
            //$.simplyToast("imgCode不能为空", 'danger');
            falg = 0;
        }
        if(falg){
            dosomething();
        }
    }
});
/**
 * 登录
 */
function dosomething() {
    var accountNo = $("#name").val();
    var password = $("#passwd").val();
    var imgCode = $("#code").val();
    var falg = 1;
    if (accountNo == "" || accountNo == null) {
        $.simplyToast("accountNo不能为空", 'danger');
        falg = 0;
    }
    if (password == "" || password == null) {
        $.simplyToast("password不能为空", 'danger');
        falg = 0;
    }
    if (imgCode == "" || imgCode == null) {
        $.simplyToast("imgCode不能为空", 'danger');
        falg = 0;
    }
    console.log(accountNo, password, imgCode);
    var jsonData = {
        "accountNo": accountNo,
        "password": password,
        "imgCode": imgCode
    };
    if (falg == 1) {
        $.ajax({
            type: "post",
            url: "services/login",
            contentType: 'application/x-www-form-urlencoded;charset=utf-8',
            async: true,
            data: jsonData,
            success: function (data) {
                console.log(data.status);
                if (data.status == 'success') {
                    $.simplyToast('success', 'success');
                    window.location.href = "/unique/NoStatic/html/main.html";
                } else {
                    $.simplyToast(data.msg, 'danger');
                }

            }
        });
    }

};
/**
 * 点击刷新验证码
 */
function refreshImg() {
    var num = Math.round(Math.random() * (10000) + 1);
    // alert(porCom.backgroundRootPath + '/img?'+num);
    document.getElementById("loginimgCode").src = 'services/img?' + num;
}

function openview() {
//	openword
    $.ajax({
        type: "post",
        url: "services/query/openword",
        async: true,
        data: JSON.stringify({
            "name": "1"
        }),
        success: function (data) {
            $('.word').eq(0).text(data.status);
            document.getElementById("word").value = data.status;
        }
    });

}