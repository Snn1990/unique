<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>支付页面</title>
    <link rel="stylesheet" href="${base}/static/css/common.css">
    <link rel="stylesheet" href="${base}/static/css/pay.css">
    <script src="${base}/static/js/jquery-2.2.3.js"></script>
    <script src="${base}/static/js/background.js"></script>
</head>
<body>
<div class="boxup">
    <div class="boxleft fleft">
        <div class="logo">
            <img src="${base}/static/img/logoaiblack.png" alt="">
        </div>
        <div class="allpay">
            <div class="lable-pay">总付款</div>
            <div class="money">RMB 75000.00</div>
        </div>
        <div class="fapiao">
            <span class="fapiao1">发票ID:</span>
            <span class="fapiao2"> sndbox_rndUpHPFzg</span>
        </div>
        <div class="ertiao">
            <span class="twotiao-lable">2  条</span>
            <a href="javascript:" class="view">查看</a>
        </div>
        <div class="card">
            <span class="card-pic"><img src="${base}/static/img/credit-hei.png" alt=""></span>
            <span class="card-text">Credit Card</span>
        </div>
        <div class="shanghu">
            <a onclick="toMenu('params')" class="shanghu-btn">返回商户</a>
        </div>
    </div>
    <div class="boxright fright">
        <div class="visa">
            <img src="${base}/static/img/visa.png" alt="">
        </div>
        <div class="boxright-top">
            <div class="credit">
                <span class="span-img"><img src="${base}/static/img/credit-hei.png" alt=""></span>
                <input type="text">
                <span class="visa-text xinyong">信用卡号</span>
            </div>
            <div class="ex-cvv">
                <span class="date">
                    <span class="span-img"><img src="${base}/static/img/icon-date.png" alt=""></span>
                    <input type="text">
                     <span class="visa-text youxiao visa-textex">有效期</span>
                </span>
                <span class="cvv fright">
                    <span class="span-img"><img src="${base}/static/img/icon-cvv2.png" alt=""></span>
                    <input type="text">
                     <span class="visa-text twozi visa-textcvv">Cvv</span>
                </span>
                <div class="clear"></div>
            </div>
            <div class="name">
                <span class="span-img">  <img src="${base}/static/img/icon-user.png" alt=""></span>
                <input type="text">
                <span class="visa-text twozi">姓名</span>
            </div>
            <div class="email">
                <span class="span-img"> <img src="${base}/static/img/icon-email.png" alt=""></span>
                <input type="text">
                <span class="visa-text twozi">邮箱</span>
            </div>
            <div class="phone">
                <span class="span-img"> <img src="${base}/static/img/dl_0002_手机.png" alt=""></span>
                <input type="text" >
                <span class="visa-text youxiao jihao">手机号</span>
            </div>
        </div>
        <div class="pay-btn"><a href="javascript:">支付</a></div>
        <div class="visa-img"><img src="${base}/static/img/btn-xia.png" alt=""></div>

    </div>
    <div class="clear"></div>
</div>

<div class="boxdown">Copyright © PayEase 2017</div>
<script src="${base}/static/js/jquery-2.2.3.js"></script>
<script src="${base}/static/js/background.js"></script>
<script type="text/javascript" src="${base}/static/js/common.js"></script>

</body>
</html>