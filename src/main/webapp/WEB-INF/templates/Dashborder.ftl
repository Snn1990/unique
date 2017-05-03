

<div class="right-content">
    <div class="middle-">
        <div class="content-top">
            <div class="top-big">控制面板</div>
        </div>
        <div class="box- box-padding">
            <div class="box-top box-no-padding">产品列表</div>
            <ul class="box-ul">
            <#list productList as product>
                <li class="fleft">
                            <span class="box-img">
                                <img src="${base}/static/img/${product.productId}.png"/>
                            </span>
                    <span class="payclass">${product.productName}</span>

                    <#if product.activity = 0>
                        <span class="box-button fright">激活</span>
                    <#else>
                        <span class="box-button-none fright">未激活</span>
                    </#if>
                </li>
                <#--<div class="clear"></div>-->
            </#list>
                <div class="clear"></div>
            </ul>
        </div>

        <div class="box- box-padding">
            <div class="box-top box-top-100 box-no-padding">
                <span>历史记录</span>
                <div class="full-box fright">
                    <div class="left-tip ">
                         <span class="left-tip-word">历史记录</span>
                        <div class="img-tip"><img src="${base}/static/img/top-tip-sj.png"/></div>
                    </div>
                    <a href="javascript:" onclick="clickMenu('nav-trial-histroy');" class="full-screen"><img src="${base}/static/img/full-screen.png"/></a>
                </div>
            </div>
            <table class="table-">
                <thead>
                <tr>
                    <th class="ding-width">订单号</th>
                    <th>支付产品</th>
                    <th>交易时间</th>
                    <th>状态</th>
                </tr>
                </thead>
                <tbody>
                <#list transRecordList! as transRecord>
                <tr>
                    <td>${transRecord.orderId}</td>
                    <td>${transRecord.productName}</td>
                    <td>${transRecord.transTime}</td>
                    <#if transRecord.status = 1>
                        <td class="finish-">完成</td>
                    <#else>
                        <td class="not-finish">未完成</td>
                    </#if>
                </tr>
                </#list>
                </tbody>
            </table>
        </div>
    </div>
</div>
<script language="javascript">
    $(function(){
        $(".full-screen img").hover(function(){
            $(".left-tip").css({"display":" inline-block"});
        },function(){$(".left-tip").css({"display":" none"});});
    })
 <#if status??>
    message(${status});
    </#if>

 var isSearchDown = "${serarchIsDown!}";
 if(isSearchDown=="Y"){
     $(".box-input").slideToggle();
     $("#serarchIsDown").val("Y");
     $("#productId").val("${productId!}");
     $(".xiala-btn").text("${productName!}");
 }
</script>