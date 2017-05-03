<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Expires" CONTENT="0">
    <meta http-equiv="Cache-Control" CONTENT="no-cache">
    <meta http-equiv="Pragma" CONTENT="no-cache">
    <title>开放平台</title>
    <link type="text/css" rel="stylesheet" href="${base}/static/css/common.css"/>
    <link type="text/css" rel="stylesheet" href="${base}/static/css/all.css""/>
    <link type="text/css" rel="stylesheet" href="${base}/static/css/all2.css"/>
    <link type="text/css" rel="stylesheet" href="${base}/static/css/loading.css"/>
    <link rel="stylesheet" href="${base}/static/plugins/jquery.toast.js/jquery.toast.min.css">
    <link rel="stylesheet" href="${base}/static/laydate/need/laydate.css">
    <link rel="stylesheet" href="${base}/static/laydate/skins/molv/laydate.css">
</head>
<body id="bodyid">
<#--<a href="javascript:"class="loading-a" id="loading-a">加载中</a>-->
<div class="mask-main" id="mask-main"></div>
<div class="load" id="load">
    <img src="${base}/static/img/loading.gif" alt="">
    <div class="jiazai">加载中...</div>
</div>
<#include "left-navigation.ftl">
    <div class="right- fleft">
        <#include "top.ftl">
        <div id="main"></div>
    </div>
    <div class="clear"></div>
<script type="text/javascript" src="${base}/static/js/jquery-2.2.3.js"></script>
<script type="text/javascript" src="${base}/static/js/defind.js"></script>
<script type="text/javascript" src="${base}/static/js/background.js"></script>
<script type="text/javascript" src="${base}/static/js/common.js"></script>
<script type="text/javascript" src="${base}/static/js/page.js"></script>
<script type="text/javascript" src="${base}/static/laydate/laydate.js"></script>
<script type="text/javascript" src="${base}/static/plugins/jquery.toast.js/jquery.toast.min.js"></script>

<script type="text/javascript" src="${base}/static/js/trial-history.js"></script>

<script language="javascript">
    //首先登陆到控制平台

    <#if paybackFlag??>
        $("#shaxiang-menu").click();
    $("#nav-dashborder").removeClass("menu-red");
    $("#nav-trial-transaction").addClass("menu-red");
      toMenu('trial-product','get','trialProductInit','productId=${payParamBeanStandard.productId!}&productName=${payParamBeanStandard.productName!}&paybackFlag=Y');
    <#else>
       toMenu("dashborder");
       // clickMenu('nav-dashborder');
    </#if>
</script>
<script>
//    $(function(){
//        $(".loading-a").click(function(){
//            $(".load").css({
//                "display":"block"
//            });
//            var loadwidth = document.getElementById("load").offsetWidth;
//            var loadheight =document.getElementById("load").offsetHeight;
//            $(".load").css({
//                "margin-left":-loadwidth/2+"px",
//                "margin-top":-loadheight/2+"px"
//            });
//            $(".mask-main").css({ "display":"block"});
//            $("body").css({"overflow":" hidden"});
//        });
//    })
</script>
</body>
</html>