if (!com) {
    var com = {};
    //项目协议
    com.webappProtocal = window.location.protocol;
    //项目ip+端口
    com.webappHost = window.location.host;
    var pathName = window.location.pathname.substring(1);
    //项目名称
    com.webappName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
    //项目根路径
    com.webappRootPath = com.webappName == "" ? com.webappProtocal + "//" + com.host : com.webappProtocal + "//" + com.webappHost + "/" + com.webappName;
    //管理后台名称
    com.portalName = "";
    //管理后台根路径
    com.portalRootPath = com.webappProtocal + "//" + com.webappHost + "/" + com.portalName;

    com.productURL10000001 = "https://sandbox.yizhifubj.com//customer/gb/pay_bank_utf8.jsp";
}

/**
 * 点击左侧菜单事件
 * */
function toMenu(url,methord,callback,params) {
    if(!methord){
        methord = "GET";
    }

    if(!params){
        params="";
    }

    $("#main").html("");
    $.ajax({
        cache: false,
        type: methord,
        url: url+"?"+encodeURI(encodeURI(params)),
        timeout: 10000,
        async: true,
        beforeSend:loading,
        error: function (request) {
            loading_none();
            alert("连接超时!");
        },
        success: function (data) {
            $("#main").html(data);
            if(callback && callback != ''){
                var  func=eval(callback);
                new func();
            }
           loading_none();
        }
    });

}

/**
 * 触发菜单点击事件
 * */
function clickMenu(menuId) {
    $("#"+menuId).click();
}

/**
 * 判断原始密码，新密码，确认密码
 * */
function pwCheck(){
    var originalPassword = $("#originalPassword").val();        //原始密码
    var newPassword = $("#newPassword").val();                  //新密码
    var newPassword2 = $("#newPassword2").val();                //确认密码
    var reg =/^[\w]{6,20}$/;                                    //新密码由6-20位数字，字母或者下划线组成
    var flagnewPwd = reg.test(newPassword);

    if (originalPassword == null||originalPassword=="")
    {
        message1("当前密码不能为空！");
        return;
    }
    if (newPassword == null||newPassword=="")
    {
        message1("新密码不能为空！");
        return;
    }
    if (newPassword2 == null||newPassword2=="")
    {
        message1("重复新密码不能为空！");
        return;
    }
    if(flagnewPwd == false){
        message1("新密码必须由6-20位数字、字母或者下划线组成!");
        return;
    }
    if (newPassword!=newPassword2)
    {
        message1("两次输入的密码不一致！");
        return;
    }
    formSubmit('changePwForm','change-pw-save',null,true);
}
function message1(text){
    $.toast({
        text: text,
        showHideTransition: 'slide',
        icon: 'error',
        hideAfter: 2000,
        stack: 1,
        afterHidden: function () {
            // $("#toastId").hide();
        }
    })
}
/**
 * 判断商品用户的信息
 * */
function merchantUser(){

    var contacterName = $("#contacterName").val();      //联系人姓名
    var contacterPhone = $("#contacterPhone").val();    //联系人电话
    var md5Key = $("#md5Key").val();                    //md5Key
    var notifyURL = $("#notifyURL").val();              //通知URL
  /*  var reg=/^[a-zA-Z\u4e00-\u9fa5\s]+$/;
    var flagName = reg.test(contacterName);*/

    if (contacterName.length >10)
    {
        message1("联系人姓名长度不能超过10位");
        return;
    }
   /* if (!flagName&&contacterName!="")
    {
        message1("联系人姓名只能是字母或汉字");
        return;
    }*/
    if (contacterPhone.length > 15)
    {
        message1("联系人电话长度不能超过15位");
        return;
    }
    if (md5Key==null||md5Key=="")
    {
        message1("md5Key不能为空");
        return;
    }
    if (notifyURL.length >50)
    {
        message1("通知URL长度不能大于50");
        return;
    }
    formSubmit('merchantForm','merchant-front-save',null,true)
}
/**
 * form表单提交方法
 * */
function formSubmit(formId, url,callback,ifload) {
    if(ifload && ifload == true){
        if($("#queryButton").hasClass('search-button')){//button
           $("#queryButton").addClass("search-button2").removeClass("search-button");
           $("#queryButton").text("查询中...");
        }else if($("#saveButton").hasClass("save")) {                 //a 标签
            $("#saveButton").removeClass("save").addClass("saveButton").text("加载中...");
        }
        else {
            $(".button").removeClass("save").addClass("saveButton").val("加载中...");
        }

    }
    $.ajax({
        cache: false,
        type: "POST",
        url: url + "?",
        data: $("#" + formId).serialize(),
        async: true,
        beforeSend:loading,
        error: function (request) {
            alert("连接超时!");
        },
        success: function (data) {
            $("#main").html(data);

            loading_none();
            if(callback){
                var  func=eval(callback);
                new func();
            }
            if ($("#status")) {
                message($("#status").val());
            }
            if(ifload && ifload == true){
                if($("#queryButton").hasClass("search-button2")){//button
                    $("#queryButton").removeClass("search-button2").addClass("search-button").text("搜索");
                }else if($("#saveButton").hasClass("saveButton")) {                         //a标签
                    $("#saveButton").remove("saveButton").addClass("save").text("保存");
                }
            }
        }
    });
}

function toPay() {
    $("#toPayButton").addClass("back2").removeClass("back");
    $("#toPayButton").text("正在支付...");
    console.info($("#v_md5info").val());
    $.ajax({
        cache: false,
        type: "POST",
        url: "sign",
        data: $("#payFromId").serialize(),
        async: true,
       // contentType:"application/x-www-form-urlencoded",
        //dataType:"application/x-www-form-urlencoded",
        error: function (request) {
            alert("连接错误!");
        },
        success: function (data) {
            $("#toPayButton").addClass("back").removeClass("back2");
            $("#toPayButton").text("支付");

           $("#v_md5info").val(data.v_md5info);
            console.info($("#v_md5info").val());

            $("#payFromId").submit();

        }
    });
}

function toPay2() {
    $("#toPayButton").addClass("back2").removeClass("back");
    $("#toPayButton").text("正在支付...");
    console.info($("#v_md5info").val());
    $.ajax({
        cache: false,
        type: "POST",
        url: "sign",
        data: $("#payFromId").serialize(),
        async: true,
        // contentType:"application/x-www-form-urlencoded",
        //dataType:"application/x-www-form-urlencoded",
        error: function (request) {
            alert("连接错误!");
        },
        success: function (data) {
            $("#toPayButton").addClass("back").removeClass("back2");
            $("#toPayButton").text("支付");

            $("#v_md5info").val(data.v_md5info);
            console.info($("#v_md5info").val());

            $.ajax({
                cache: false,
                type: "POST",
                url: "wild-card-pay",
                data: $("#payFromId").serialize(),
                async: true,
                // contentType:"application/x-www-form-urlencoded",
                //dataType:"application/x-www-form-urlencoded",
                error: function (request) {
                    alert("连接错误!");
                },
                success: function (data) {
                    console.info(data);

                        $("#result_v_oid").text($("#v_oid").val());
                       if(data.json.v_status==0) {
                           $("#result_v_statusdesc").text(data.json.v_pstring);
                           $("#result_v_amount").text(data.json.v_amount);
                       }else{
                           $("#result_v_statusdesc").text(data.json.v_statusdesc);
                       }
                        $("#paybackFlag").val("Y");
                        tabInit(data.json.v_status);
                    $(".qingqiu1").find("span").css({
                        "cursor":"pointer"
                    });
                }
            });

        }
    });
}

/** 返回门户 */
function toPortal() {
    window.location.href = com.portalRootPath;
}

/** 注销按钮触发事件 */
function logout() {
    $.ajax({
        type: 'get',
        url: com.webappRootPath + '/logout',
        success: function (data) {//返回json结果
            toPortal();
        }
    });
}

/** 表单提交后提示信息插件 */
function message(flag) {
    $("#toastId").show();
    if (flag != 1) {
        $.toast({
            text: "修改失败",
            showHideTransition: 'slide',
            icon: 'error',
            hideAfter: 2000,
            stack: 1,
            afterHidden: function () {
               // $("#toastId").hide();
            }
        })
    } else {
        $.toast({
            text: "修改成功",
            showHideTransition: 'slide',
            icon: 'success',
            hideAfter: 1000,
            stack: 1,
            afterHidden: function () {
               // $("#toastId").hide();
            }
        })
    }
}


function tabInit(status) {
    // tab页
    $(".qingqiu1 span").click(function(){
        var suoyin= $(this).index();
        $(".tab-contain").css({
            "display":"none"
        });
        $(".tab"+suoyin).css({
            "display":"block"
        })
        $(".qingqiu1 span").css({
            "background-color" :"#f5f4f4",
            "color":"#555"
        })
        $(this).css({
            "background-color" :"white",
            "color":"#900403"
        });
    });

    $("#bax3").click();
    if(status==0){
        $("#toPayButton").attr("onclick", "");
        $("#toPayButton").addClass("pay-disable");
    }


    $("#toPayButton").text("支付");
}

function trialProductInit() {
    $(function(){
        // 交易测试
        $(".ul-channel li").hover(function(){
            $(this).find(".mask").css({
                "display":"block"
            });
            $(this).find(".a-out").addClass("a-out2");
            $(this).find(".tit").addClass("tit2");
        },function(){
            $(this).find(".mask").css({
                "display":"none"
            });
            $(this).find(".a-out").removeClass("a-out2");
            $(this).find(".tit").removeClass("tit2");
        });
        $(".more-btn a").click(function(){
            if($(".more-contain").is(":visible")){
                $(this).parent(".more-btn").siblings(".more-contain").slideUp();
            }
            else {
                $(this).parent(".more-btn").siblings(".more-contain").slideDown();
            }
        });

        console.info("----------:"+$("#paybackFlag").val());
        if($("#paybackFlag") && $("#paybackFlag").val()=='Y'){
            tabInit(0);

            $(".qingqiu1").find("span").css({
                "cursor":"pointer"
            });
        }

    })
}

function loading() {
    $(".load,.mask-main").css({
        "display":"block"
    });
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var loadwidth = document.getElementById("load").offsetWidth;
    var loadheight =document.getElementById("load").offsetHeight;
    if(top==0){
        $(".load").css({
            "display":"block",
            "margin-left":-loadwidth/2+"px",
            "margin-top":-loadheight/2+"px"
        });
    }
    window.onscroll = function () {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        var maskheight =window.innerHeight;

        $(".mask-main").css({
            "height":top+maskheight+"px"
        });
        $(".load").css({

            "margin-left":-loadwidth/2+"px",
            "margin-top":-loadheight/2+top+"px"
        });
    }
}
function loading_none() {

    $(".load").css({
        "display":"none"
    });
    $(".mask-main").css({ "display":"none"});
     $("body").css({"overflow":" visible"});

}

