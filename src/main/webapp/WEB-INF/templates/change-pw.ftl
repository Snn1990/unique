<div class="right-content">
    <div class="middle-">
        <div class="content-top">
            <div class="top-big">修改密码</div>
        </div>
        <div class="setsbox">
        </div>
        <form name="changePwForm" id="changePwForm" method="POST"  action="change-pw-save">
            <input name="status" id="status" type="hidden" value="${status!}">
            <div class="box- box-qiwu">
                <div class="setinfo setinfo2">
                    <ul class="setcontain setcontain2">
                        <li>
                            <div class="inputs nogai pw-1">
                                <span class="labelbox redcolor pw-word">登录账号：</span>
                                <span class="labelbox-word">${accountNo}</span>
                            </div>
                        </li>
                        <li>
                            <div class="inputs pw-1">
                                <span class="labelbox pw-word">当前密码：</span>
                                <input id="originalPassword" name="originalPassword" type="password" maxlength="20">
                                <span class="red-hua">*</span>
                            </div>
                        </li>
                        <li>
                            <div class="inputs pw-1">
                                <span class="labelbox pw-word">新密码：</span>
                                <input id="newPassword" name="newPassword" type="password" maxlength="20">
                                <span class="red-hua">*</span>
                            </div>
                        </li>
                        <li>
                            <div class="inputs pw-1">
                                <span class="labelbox pw-word">重复新密码：</span>
                                <input id="newPassword2" name="newPassword2"  type="password" maxlength="20">
                                <span class="red-hua">*</span>
                            </div>
                        </li>
                        <div class="clear"></div>
                        <div id="toastId"  class="toast" style="margin-top: 10px;height: 52px;"></div>
                    </ul>
                    <div class="infobtn fright infobtn-save">
                        <a href="javascript:" id="saveButton" class="save" type="button" onclick="pwCheck()">保存</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>