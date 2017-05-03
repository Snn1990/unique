<div class="right-content">
    <div class="middle-">
        <div class="content-top">
            <div class="top-big">模拟交易</div>
        </div>
        <div class="ul-channel">
            <ul>
            <#list productList as product>
                <#if product.activity = 0>
                    <li class="hoverli">
                        <a class="a-box a-boxyes" onclick="toMenu('trial-product','get','trialProductInit','productId=${product.productId}&productName=${product.productName}')">
                            <div class="mid-contain">
                                     <span class="tutu">
                                         <img class="visa-img" src="${base}/static/img/${product.productId}.png" alt="">
                                     </span>
                                <div class="tutext">${product.productName}</div>
                                <span  class="tubnt">测  试</span>
                            </div>
                        </a>
                    </li>
                <#else >
                    <li>
                        <a class="a-box a-boxno" href="javascript:">
                            <div class="mid-contain">
                                     <span class="tutu">
                                  <img src="${base}/static/img/${product.productId}.png" alt="">
                                </span>
                                <div class="tutext">${product.productName}</div>
                                <span  class="tubnt">测  试</span>
                            </div>
                        </a>
                    </li>
                </#if>
            </#list>
                <div class="clear"></div>
            </ul>
        </div>
    </div>
</div>