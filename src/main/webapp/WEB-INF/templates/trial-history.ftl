<div class="right-content">
    <div class="middle-">
        <div class="content-top">
            <div class="top-big" id="top-big">交易记录</div>
            <!--<div class="top-small">你能看到所有实验交易记录</div>-->
        </div>


        <div class="box- box-history" id="trialDIV">
            <div class="box-top box-top-history">
                <a href="javascript:" class="search-" id="searchDown">
                    <img src="${base}/static/img/search.png"/>
                </a>
                <!--<div id="clipDIV" class="fright"></div>-->
                <form name="trialForm" id="trialForm" method="get" action="trial-history">
                    <input type="hidden" id="productId" name="productId" value="${productId!}"/>
                    <input type="hidden" id="productName" name="productName" value="${productName!}"/>
                    <input type="hidden" id="currentPage" name="currentPage" value="${currentPage!}"/>
                    <input type="hidden" id="countPage" name="countPage" value="${countPage!}"/>
                    <input type="hidden" id="serarchIsDown" name="serarchIsDown" value="${serarchIsDown!}"/>
                    <div class="box-input" id="box-input">
                        <div class="input-">
                            <div class="merge0 fleft">
                                    <span class="bottom-span">支付产品：</span>
                                    <span class="starttime">交易时间：</span>
                            </div>
                            <div class="merge1 fleft">
                                <div class="xialabox bottom-div">
                                    <button type="button" class="xiala-btn"></button>
                                    <ul class="pay-chanpin">
                                        <li>
                                            <a href="javascript:" class="option-a" value="">全部</a>
                                        </li>
                                    <#list productList as product>
                                        <li>
                                            <a href="javascript:" class="option-a"
                                               value="${product.productId}">${product.productName}</a>
                                        </li>
                                    </#list>
                                    </ul>

                                </div>
                                <div><input class="inline laydate-icon" name="beginTime" value="${beginTime!}" id="start"></input></div>
                            </div>
                            <div class="merge0 fleft marge-left">
                                <span class="bottom-span">订单号：</span>
                                <span class="input-date">至</span>
                            </div>
                            <div class="merge1 fleft maggin-box">
                                <div class="bottom-div"><input type="text" id="orderId" name="orderId" value="${orderId!}" placeholder=""/></div>
                                <div><input class="inline laydate-icon" name="endTime" value="${endTime!}" id="end"></input></div>
                            </div>
                            <span class="input-button">
                                <button type="button" id="queryButton"onclick="formSubmit('trialForm','trial-history','trialHistoryInit',true)"
                                        class="search-button">搜&nbsp;&nbsp;索</button>
                            </span>
                            <div class="clear"></div>

                        </div>
                        <div class="clear"></div>
                    </div>
                </form>
            </div>
            <div class="box-table box-table-history" id="productTable">
                <table class="table-">
                    <thead>
                    <tr>
                        <th>商户</th>
                        <th>支付产品</th>
                        <th>订单号</th>
                        <th>总计</th>
                        <th>交易时间</th>
                        <th>状态</th>
                        <th>选择</th>
                    </tr>
                    </thead>
                    <tbody>
                    <#list transRecordList! as transRecord>
                    <tr id="transTrId_${transRecord_index}">
                        <td id="merchantId_${transRecord_index}">${merchantId!}</td>
                        <td id="productName_${transRecord_index}">${transRecord.productName!}</td>
                        <td id="orderId_${transRecord_index}"><a class="num-a" title="${transRecord.orderId!}"> ${transRecord.orderId!}</a></td>
                        <td id="amount_${transRecord_index}">${transRecord.amount!}</td>
                        <td id="transTime_${transRecord_index}">${transRecord.transTime!}</td>
                        <#if transRecord.status = 1>
                            <td id="status_${transRecord_index}" class="finish-">完成</td>
                        <#else>
                            <td id="status_${transRecord_index}" class="not-finish">未完成</td>
                        </#if>
                        <td id="currencyId_${transRecord_index}" class="display-none">${transRecord.currencyId!}</td>
                        <td id="orderIp_${transRecord_index}" class="display-none">${transRecord.orderIp!}</td>
                        <td id="version_${transRecord_index}" class="display-none">${transRecord.version!}</td>
                        <td id="ordName_${transRecord_index}" class="display-none">${transRecord.ordName!}</td>
                        <td id="gotoUrl_${transRecord_index}" class="display-none">${transRecord.gotoUrl!}</td>
                        <td id="merSign_${transRecord_index}" class="display-none">${transRecord.merSign!}</td>
                        <td id="rcvName_${transRecord_index}" class="display-none">${transRecord.rcvName!}</td>
                        <td id="ordAddr_${transRecord_index}" class="display-none">${transRecord.ordAddr!}</td>
                        <td id="ordTel_${transRecord_index}" class="display-none">${transRecord.ordTel!}</td>
                        <td id="ordPost_${transRecord_index}" class="display-none">${transRecord.ordPost!}</td>
                        <td id="merDate_${transRecord_index}" class="display-none">${transRecord.merDate!}</td>

                        <#--<td><a onclick="showDetail('${transRecord.orderId!""}','${transRecord.currencyId!""}','${transRecord.orderId!""}','${transRecord.version!""}',-->
                        <#--'${transRecord.ordName!""}','${transRecord.gotoUrl!""}','${transRecord.merSign!""}','${transRecord.merDate!""}',-->
                        <#--'${transRecord.rcvName!""}','${transRecord.ordAddr!""}','${transRecord.ordTel!""}','${transRecord.ordPost!""}'-->
                                <#--,'${transRecord.productName!""}','${transRecord.amount!}','${transRecord.transTime!""}','${transRecord.status!}'-->
                                <#--,'${transRecord.merchantId!""}')"-->
                               <#--class="detail-"> 详情</a></td>-->
                        <td><a onclick="showDetail('${transRecord_index}')"
                               class="detail-"> 详情</a></td>
                    </tr>
                    </#list>
                    </tbody>
                </table>
            </div>
            <div id="clipDIV" class="fright"></div>
            <div class="clear"></div>
        </div>

        <div class="box-" id="detailDIV" style="display: none">
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
                        <td>商户</td>
                        <td id="merchantId"></td>
                    </tr>
                    <tr>
                        <td>支付产品</td>
                        <td id="productNameDetail"></td>
                    </tr>
                    <tr>
                        <td>订单号</td>
                        <td id="orderIdDetail"></td>
                    </tr>
                    <tr>
                        <td>支付金额</td>
                        <td id="amount"></td>
                    </tr>
                    <tr>
                        <td>交易时间</td>
                        <td id="transTime"></td>
                    </tr>
                    <tr>
                        <td>状态</td>
                        <td id="status"></td>
                    </tr>
                    <tr>
                        <td>订货人姓名</td>
                        <td id="ordName"></td>
                    </tr>
                    <tr>
                        <td>订单产生日期</td>
                        <td id="merDate"></td>
                    </tr>
                    <tr>
                        <td>订单数字指纹</td>
                        <td id="merSign"></td>
                    </tr>
                    <tr>
                        <td>币种</td>
                        <td id="currencyId"></td>
                    </tr>
                    <tr>
                        <td>请求ip</td>
                        <td id="orderIp"></td>
                    </tr>
                    <tr>
                        <td>版本号</td>
                        <td id="version"></td>
                    </tr>
                    <tr>
                        <td>回调URL</td>
                        <td id="gotoUrl"></td>
                    </tr>
                    <tr>
                        <td>收货人姓名</td>
                        <td id="rcvName"></td>
                    </tr>
                    <tr>
                        <td>收货人地址</td>
                        <td id="ordAddr"></td>
                    </tr>
                    <tr>
                        <td>收货人电话</td>
                        <td id="ordTel"></td>
                    </tr>
                    <tr>
                        <td>收货人邮编</td>
                        <td id="ordPost"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <a href="javascript:" onclick="showTrial()" class="back-">返&nbsp;&nbsp;回</a>
            <div class="clear"></div>
        </div>
    </div>
</div>
</div>
<div class="clear"></div>

