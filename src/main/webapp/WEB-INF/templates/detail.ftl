<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>detail</title>
    <link type="text/css" rel="stylesheet" href="${base}/static/css/common.css"/>
    <link type="text/css" rel="stylesheet" href="${base}/static/css/Dashborder.css"/>
    <link type="text/css" rel="stylesheet" href="${base}/static/css/page.css">
    <link type="text/css" rel="stylesheet" href="${base}/static/css/style.css">
    <link type="text/css" rel="stylesheet" href="${base}/static/css/trial-history.css">
    <link rel="stylesheet" href="${base}/static/css/default.css">
</head>
<body onload="clipInit()">
<#include "left-navigation.ftl">
    <div class="right- fleft">
    <#include "top.ftl">
        <div class="right-content">
            <div class="middle-">
                <div class="content-top">
                    <div class="top-big">交易处理细节</div>
                </div>
                <div class="box-">
                    <div class="box-table">
                        <table class="table- table-detail">
                        <thead>
                        <tr>
                            <th>参数名</th>
                            <th>值</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>订单号</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>确定参数</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>公布参数</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>重定向参数</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>调查参数</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <a href="trial-history.ftl--" class="back-">返&nbsp;&nbsp;回</a>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="clear"></div>
<script type="text/javascript" src="${base}/static/js/jquery-2.2.3.js"></script>
<script type="text/javascript" src="${base}/static/js/page.js"></script>
<script type="text/javascript" src="${base}/static/js/defind.js"></script>
<script type="text/javascript" src="${base}/static/js/background.js"></script>
<script type="text/javascript" src="${base}/static/js/common.js"></script>

</body>
</html>