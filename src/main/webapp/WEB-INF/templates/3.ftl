<div class="right-content">
    <div class="middle-">

        <div class="content-top">
            <div class="top-big">${payParamBeanStandard.productName!}</div>
            <#--<div class="top-small">查看您所做的所有试验交易</div>-->
        </div>
        <div class="params">
            <div class="tab">
                <div class="qingqiu1">
                    <span class="box1">1.请求参数</span><span class="box2">
                        2.付款流程</span><span class="box3" id="bax3">3.结果</span>
                </div>
                <div class="tab-contain tab0">
                    <div class="test-xuni">
                        <#--<div class="xuni-title">测试的虚拟账户</div>-->
                        <#--<div class="kahao">-->
                            <#--<span class="lable">银行卡号 = </span>-->
                            <#--<span class="lable-hao">6225768708745822</span>-->
                        <#--</div>-->
                        <#--<div class="cvv2">-->
                            <#--<span class="lable">CVV2 = </span>-->
                            <#--<span class="lable-hao">5869</span>-->
                        <#--</div>-->
                        <#--<div class="exp">-->
                            <#--<span class="lable">Exp Date = </span>-->
                            <#--<span class="lable-hao">2016年4月</span>-->
                        <#--</div>-->
                    </div>
                    <div class="post">
                        <form name="form" id="payFromId" method="post" action="https://sandbox.yizhifubj.com//customer/gb/pay_bank_utf8.jsp">
                            <input name="v_pmode" type="hidden" value="3"/>
                            <input name="paybackFlag" type="hidden" id="paybackFlag"  value="${paybackFlag!}"/>

                        <div class="xuni-title">上传的参数</div>
                            <div class="margin-top">
                                <div class="left-post fleft">
                                    <div class="mall">
                                        商户ID<span class="hua">*</span>
                                    </div>
                                    <div class="inputbox"> <input type="text" name="v_mid" readonly="true" value="${payParamBeanStandard.v_mid!}"></div>
                                </div>
                                <div class="right-post fleft">
                                    <div class="mall">
                                        数字指纹 <span class="shuoming">(这里只是为了测试，不包括你真实的表单数据)</span>
                                        <!--<span class="hua">*</span>-->
                                    </div>
                                    <div class="inputbox"> <input type="text" id="v_md5info" name="v_md5info"  readonly="true"  value="${payParamBeanStandard.v_md5info!}"></div>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="margin-top">
                                <div class="left-post fleft">
                                    <div class="mall">
                                        订单号<span class="hua">*</span>
                                    </div>
                                    <div class="inputbox"> <input type="text" name="v_oid" readonly="true" value="${payParamBeanStandard.v_oid!}"></div>
                                </div>
                                <div class="right-post fleft">
                                    <div class="mall">
                                        返回商户页面地址<span class="hua">*</span>
                                    </div>
                                    <div class="inputbox"> <input type="text" id="v_url" name="v_url" readonly="true"  value="${payParamBeanStandard.v_url!}"></div>
                                </div>
                                <div class="clear"></div>
                            </div>

                        <div class="clear"></div>
                        <div class="more-para">
                            <div class="more-btn"><a href="javascript:">更多参数</a></div>
                            <div class="more-contain" style="display: none">
                                <#--<div class="inputdiv">-->
                                    <#--<span class="lainsuo">订单号</span><span class="hua">*</span>-->
                                    <#--<input type="text" name="v_oid" value="${payParamBeanStandard.v_oid!}">-->
                                <#--</div>-->
                                <div class="inputdiv">
                                    <span class="lainsuo">收货人姓名</span><span class="hua">*</span>
                                    <input type="text" name="v_rcvname" value="${payParamBeanStandard.v_rcvname!}" maxlength="20">
                                </div>
                                <div class="inputdiv">
                                    <span class="lainsuo">收货人地址</span><span class="hua">*</span>
                                    <input type="text" name="v_rcvaddr" value="${payParamBeanStandard.v_rcvaddr!}" maxlength="100">
                                </div>
                                <div class="inputdiv">
                                    <span class="lainsuo">收货人电话</span><span class="hua">*</span>
                                    <input type="text" name="v_rcvtel" value="${payParamBeanStandard.v_rcvtel!}" maxlength="20">
                                </div>
                                <div class="inputdiv">
                                    <span class="lainsuo">收货人邮政编码</span><span class="hua">*</span>
                                    <input type="text" name="v_rcvpost" value="${payParamBeanStandard.v_rcvpost!}" maxlength="10">
                                </div>
                                <div class="inputdiv">
                                    <span class="lainsuo">订单总金额</span><span class="hua">*</span>
                                    <input type="text" name="v_amount" value="${payParamBeanStandard.v_amount!}" maxlength="20">
                                </div>
                                <div class="inputdiv">
                                    <span class="lainsuo">订单产生日期</span><span class="hua">*</span>
                                    <input type="text" name="v_ymd" value="${payParamBeanStandard.v_ymd!}" maxlength="15">
                                </div>
                                <div class="inputdiv">
                                    <span class="lainsuo">商户配货状态</span><span class="hua">*</span>
                                    <input type="text" name="v_orderstatus" value="${payParamBeanStandard.v_orderstatus!}" maxlength="5">
                                </div>
                                <div class="inputdiv">
                                    <span class="lainsuo">订货人姓名</span><span class="hua">*</span>
                                    <input type="text" name="v_ordername" value="${payParamBeanStandard.v_ordername!}" maxlength="20">
                                </div>
                                <div class="inputdiv">
                                    <span class="lainsuo">支付币种</span><span class="hua">*</span>
                                    <input type="text" name="v_moneytype" value="${payParamBeanStandard.v_moneytype!}" maxlength="10">
                                </div>
                                <#--<div class="inputdiv">-->
                                    <#--<span class="lainsuo">返回商户页面地址</span><span class="hua">*</span>-->
                                    <#--<input type="text" name="v_url" value="${payParamBeanStandard.v_url!}">-->
                                <#--</div>-->
                            </div>

                        </div>
                        <div class="back-pay">
                            <div id="toastId"  class="toast" style="margin-top: 10px;height: 52px;position: relative;left:-35.4%; margin-bottom: 10px"></div>
                            <a class="back" onclick="clickMenu('nav-trial-transaction')">返  回</a>
                            <a class="back" id="toPayButton" onclick="toPay()">支  付</a>
                        </div>
                        </form>
                    </div>
                </div>
                <div class="tab-contain tab1">
                    <div class="test-xuni">
                        <div class="xuni-title">第一步:</div>
                    </div>
                    <div class="post">
                        <div class="xuni-title">第二步:</div>

                        <div class="clear"></div>

                        <div class="back-pay">
                            <a onclick="clickMenu('nav-trial-transaction')"  class="back">返  回</a>
                        </div>

                    </div>
                </div>
                <div class="tab-contain tab2">
                    <#if payParamBeanStandardResult??>
                        <div class="test-xuni">
                            <div class="xuni-title">结果:</div>
                            <div class="kahao">
                                <span class="lable">订单号 = </span>
                                <span class="lable-hao">${payParamBeanStandardResult.v_oid!}</span>
                            </div>

                            <div class="kahao">
                                <span class="lable">支付结果信息 = </span>
                        <#if payParamBeanStandardResult.v_pstatus == '20'>
                                <span class="lable-hao">支付成功</span>
                        <#else >
                            <span class="lable-hao">支付失败</span>
                        </#if>

                            </div>
                            <div class="kahao">
                                <span class="lable">订单实际支付金额 = </span>
                                <span class="lable-hao">${payParamBeanStandardResult.v_amount!}</span>
                            </div>
                        </div>
                    </#if>

                    <div class="post">
                        <div class="back-pay">
                            <a onclick="clickMenu('nav-trial-transaction')"  class="back">返  回</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>