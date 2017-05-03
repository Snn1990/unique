<div class="left-menu fleft" id="left-menu">
    <div class="logo">
        <img src="${base}/static/img/logo.png" style="cursor:pointer" onclick="toPortal()"/>
    </div>
    <ul class="ul-1" id="ul-1">
        <li><a onclick="toMenu('state')" class="menu-">
            <span class="menu-word menu-word-click">
                <div class="active-wp">
                    <div class="text-con">接入进度</div>
                    <div class="progress-bar-connect gray stripes">
                            <div class="font-reg textpercent">20%</div>
                            <span></span>
                    </div>
                </div>
            </span></a></li>
        <li><a id="nav-dashborder" onclick="toMenu('dashborder')" class="menu- menu-red"><span
                class="menu-word-click translate-">控制面板</span></a></li>
        <li>
            <a href="javascript:" class="menu-" id="shaxiang-menu">
                <span class="menu-word menu-word-click">沙箱测试</span>
                <span class="menu-img"><img src="${base}/static/img/jt.png" class="jt-"/></span>
            </a>
            <ul class="ul-2" id="nav-ul2" style="display:none">
                <li><a id="nav-trial-transaction" onclick="toMenu('trial-transaction')" class="menu-2"><span
                        class="menu-word menu-word-click menu-word2">模拟交易</span></a></li>
                <li><a id="nav-trial-histroy" onclick="toMenu('trial-history','POST','trialHistoryInit')" class="menu-2"><span
                        class="menu-word menu-word-click menu-word2">交易记录</span></a></li>
            </ul>
        </li>
        <li><a id="nav-merchant-front" onclick="toMenu('merchant-front')" class="menu-"><span
                class="menu-word menu-word-click">商户管理</span></a></li>
        <li><a id="nav-change-pw" onclick="toMenu('change-pw')" class="menu-"><span class="menu-word menu-word-click">修改密码</span></a>
        </li>
    </ul>
</div>