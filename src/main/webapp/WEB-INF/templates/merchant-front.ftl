<div class="right-content">
    <div class="middle-">
        <div class="content-top">
            <div class="top-big">商户管理</div>
        </div>
        <div class="setsbox">
        </div>
        <form name="merchantForm" id="merchantForm" method="POST"  action="merchant-front-save">
            <input name="status" id="status" type="hidden" value="${status!}">
            <div class="box- box-qiwu">
                <div class="setinfo">
                    <div class="inputs nogai fleft sisan">
                        <span class="labelbox redcolor labelbox1">商户号：</span>
                        <span class="labelbox-word">${merchant.merchantId}</span>
                        <!--<input type="text" value="1001" disabled>-->
                        <!--<span class="red-hua">*</span>-->
                    </div>
                    <div class="inputs nogai fleft">
                        <span class="labelbox redcolor labelbox1">商户名称：</span>
                        <span class="labelbox-word">${merchant.merchantName!}</span>
                        <!--<input type="text" value="PayEasy" disabled>-->
                        <!--<span class="red-hua">*</span>-->
                    </div>
                    <div class="inputs fleft sisan">
                        <span class="labelbox labelbox2">联系人姓名：</span>
                        <input class="name-" id="contacterName" name="contacterName" type="text" value="${merchant.contacterName!}" maxlength="10">
                        <!--<span class="red-hua">*</span>-->
                    </div>
                    <div class="inputs fleft lxrdh">
                        <span class="labelbox labelbox2">联系人电话：</span>
                        <input type="text" id="contacterPhone" name="contacterPhone" value="${merchant.contacterPhone!}" maxlength="15">
                        <!--<span class="red-hua">*</span>-->
                    </div>
                    <div class="clear"></div>
                    <div class="inputs key-">
                        <span class="labelbox labelbox3">md5Key：</span>
                        <input type="text"  id="md5Key" name="md5Key" value="${merchant.md5Key!}" maxlength="200">
                        <!--<span class="red-hua">*</span>-->
                    </div>
                    <div class="inputs key-">
                        <span class="labelbox labelbox3">通知URL：</span>
                        <input type="text"  id="notifyURL" name="notifyURL" value="${merchant.notifyURL!}" maxlength="50">
                        <!--<span class="red-hua">*</span>-->
                    </div>
                    <div id="toastId"  class="toast" style="margin-top: 10px;height: 52px;"></div>
                    <div class="clear"></div>
                    <div class="infobtn fright infobtn-save">
                        <a href="javascript:" id="saveButton" class="save" type="button" onclick="merchantUser()">保存</a>
                    </div>
                    <div class="clear"></div>
                </div>

            </div>
        </form>
    </div>
</div>