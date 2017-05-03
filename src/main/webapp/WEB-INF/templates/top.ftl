<div class="right-top">
    <a href="javascript:"  class="shrink-">
        <img src="${base}/static/img/shrink.png"/>
    </a>
    <span class="head-portrait">
                    <img src="${base}/static/img/head-portrait.png"/>
                    <span class="head-word">欢迎，<span class="word-bold">${Session.userStatus.accountNo!}</span></span>
                </span>
    <a href="javascript:" class="set- grey-set">
        <img src="${base}/static/img/grey-set.png"/>
    </a>
    <a onclick="clickMenu('nav-merchant-front')"  class="set- red-set" style="cursor: pointer">
        <img src="${base}/static/img/red-set.png"/>
    </a>
    <a class="close- fright" style="cursor: pointer;">
        <img src="${base}/static/img/close.png" onclick="logout()"/>
    </a>
</div>