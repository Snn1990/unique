    var windowheight=document.documentElement.clientHeight;
    document.getElementById("left-menu").style.height=windowheight+20+"px";
    $(window).scroll(function(){
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(document.getElementById("mask_")){
            document.getElementById("mask_").style.height=windowheight+scrollTop+"px";
        }
    });
    // 左侧菜单

    $(".menu-").hover(function(){
        $(this).find(".menu-word").addClass("translate-");
        $(".menu-red").find(".menu-word").addClass("translate-");
    },function(){
        $(this).find(".menu-word").removeClass("translate-");
    });
    $(".menu-2").hover(function(){
        $(this).find(".menu-word").addClass("translate-");
        $(".menu-red").find(".menu-word").addClass("translate-");
    },function(){
        $(this).find(".menu-word").removeClass("translate-");
    });
    $(".menu-red").hover(function(){
        $(this).find(".menu-word-click").removeClass("menu-word");
    });

    $(".menu-").click(function(){
        $(".menu-word-click").addClass("menu-word");
        $(this).find(".menu-word").removeClass("menu-word");

        if(!($(this).siblings(".ul-2").html())){
            $(".menu-img img").addClass("jt-");
            $(".menu-2").removeClass("menu-red");
            $(".menu-word").removeClass("translate-");
            $(this).find(".menu-word").addClass("translate-");
            $(".menu-").removeClass("menu-red");
            $(".ul-2").slideUp();
            $(this).addClass("menu-red");
            $(".menu-1").removeClass("menu-1");
        }
        else if($(this).siblings(".ul-2").is(":hidden")){
            $(this).addClass("menu-1");
            $(this).siblings(".ul-2").slideDown();
            $(this).find(".menu-img img").removeClass("jt-");
        }
        else{
            $(this).siblings(".ul-2").slideUp();
            $(this).find(".menu-img img").addClass("jt-");
        }
    });
    $(".menu-2").click(function(){
        $(".menu-").removeClass("menu-red");
        $(this).parents(".ul-2").parents("li").siblings().find(".menu-word-click").addClass("menu-word");
        $(this).find(".menu-word").removeClass("menu-word");
        $(this).parent().siblings("li").find(".menu-word-click").addClass("menu-word");
        $(".menu-img img").addClass("jt-");
        $(".menu-word").removeClass("translate-");
        $(this).find(".menu-word").addClass("translate-");
        $(".menu-2").removeClass("menu-red");
        $(this).addClass("menu-red");
        $(this).parents(".ul-2").slideDown();
        $(this).parents(".ul-2").siblings(".menu-").addClass("menu-1");
        $(this).parents(".ul-2").siblings(".menu-1").find(".menu-word").removeClass("menu-word").addClass("translate-");
        $(this).parents(".ul-2").siblings(".menu-1").find(".menu-img img").removeClass("jt-");
    });
    // 隐藏菜单栏
    var leftwidth=$(".left-menu").css("width");
    $(".shrink-").click(function(){
        if($(".right-").css("left")=="0px"){
            $(".right-").animate({
                "left":leftwidth
            },500)
        }else{
            $(".right-").animate({
                "left":"0"
            },500)
        }
    });


    // 上线与下线的勾选
    $(".a-state").click(function(){
        $(".a-span").css({
            "display":"none"
        })
        $(this).find(".a-span").css({
            "display":"inline-block"
        })
    });

    // 支付产品的勾选
    $(".tong-canpin li").click(function(){
        $(this).find(".li-mask,.yes-red").toggle();
    });
// 支付产品的勾选
    // 弹出框
    $(".new-add").click(function(){
        $(".mask_").css("display","block");
        $(".popnew").css("display","block");
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        var popheight=document.getElementById("pop-up").offsetHeight;
        document.getElementById("pop-up").style.marginTop=-popheight/2+scrollTop+"px";
        $("body").css({overflow:"hidden"});
    });
    $(".close_").click(function(){
        $(".popnew,.pop-xiu,.mask_").css("display","none");
        $("body").css({overflow:"auto"});
    });
    // 按钮的保存

    $(".yes-white").click(function(){
        $(this).find("img").toggle();
        if($(this).find("img").is(":hidden")){
            $(this).parents(".green-").find("input").attr("disabled",true);
        }else{
            $(this).parents(".green-").find("input").attr("disabled",false);
        }
    });
    $(".yes-black").click(function(){
        $(this).find("img").toggle();
    });
    $(".xiala-").click(function(){
        $(this).toggleClass("xiala-a");
        $(this).parents(".green-content").find(".hidden-").slideToggle();
    });
    $(".login-btn").click(function(){
        alert("123");
        if($(".admin").find("input").val()=="admin"){
            $(this).attr("href","../admin/merchant.html")
        }else{
            $(this).attr("href","personal-information.html")
        }
    });





