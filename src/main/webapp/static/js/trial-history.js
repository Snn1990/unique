/**
 * Created by niufenjava on 2017/3/28.
 */

/**
 * 【交易记录】初始化方法
 * */
function trialHistoryInit() {
    $(function () {

        /** 分页控件初始化 */
        clipInit($("#countPage").val(), $("#currentPage").val(),"trialForm","trial-history",'trialHistoryInit');
        /** 初始化查询条件框 */
        var isSearchDown = $("#serarchIsDown");
        if (isSearchDown.val() == "Y") {
            $("#box-input").show();
            $("#serarchIsDown").val("Y");
            $(".xiala-btn").text($("#productName").val());
        }

        /** 初始化下拉事件 */
        $(".search-").click(function () {

            if ($("#box-input").is(":hidden")) {
                $("#box-input").show();
                $("#serarchIsDown").val("Y");
            } else {
                $("#box-input").hide();
                $("#serarchIsDown").val("N");
            }
        });

        /** 初始化下拉框事件 */
        $(".xiala-btn").click(function () {
            $(this).siblings(".pay-chanpin").slideDown();
            $(".option-a").click(function () {
                var btnval = $(this).text();
                var productId = $(this).attr("value");
                var productName = $(this).text();
                $("#productId").val(productId);
                $("#productName").val(productName);
                $(".xiala-btn").text(btnval);
                $(this).parents(".pay-chanpin").slideUp("fast");
            });
        });
        $(".xiala-btn").blur(function () {
            $(this).siblings(".pay-chanpin").slideUp("");
        });
    })

    /** 日期控件初始化 */
    !function () {
        laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
        laydate({elem: '#demo'});//绑定元素
    }();
    var start = {
        elem: '#start',
        format: 'YYYY-MM-DD',
        min: '1980-01-01', //设定最小日期为当前日期
        max: '2099-06-16', //最大日期
        istime: false,
        istoday: false,
        choose: function (datas) {
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: '#end',
        format: 'YYYY-MM-DD',
        min: '1980-01-01',
        max: '2099-06-16',
        istime: false,
        istoday: false,
        choose: function (datas) {
            start.max = datas; //结束日选好后，充值开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);
}

function showDetail(index) {
   // console.info(pThis.parentNode.parentNode.childNodes.item(1));
    $("#trialDIV").hide();
    $("#detailDIV").show();
    console.info($("#merchantId_"+index).text());

    $("#merchantId").text($("#merchantId_"+index).text());
    $("#productNameDetail").text($("#productName_"+index).text());
    $("#orderIdDetail").text($("#orderId_"+index).text());
    $("#amount").text($("#amount_"+index).text());
    $("#transTime").text($("#transTime_"+index).text());
    $("#status").text($("#status_"+index).text());
    $("#gotoUrl").text($("#gotoUrl_"+index).text());
    $("#transTime").text($("#transTime_"+index).text());
    $("#merSign").text($("#merSign_"+index).text());
    $("#merDate").text($("#merDate_"+index).text());
    $("#currencyId").text($("#currencyId_"+index).text());
    $("#orderIp").text($("#orderIp_"+index).text());
    $("#version").text($("#version_"+index).text());
    $("#gotoUrl").text($("#gotoUrl_"+index).text());
    $("#rcvName").text($("#rcvName_"+index).text());
    $("#ordAddr").text($("#ordAddr_"+index).text());
    $("#ordTel").text($("#ordTel_"+index).text());
    $("#ordPost").text($("#ordPost_"+index).text());
    $("#ordName").text($("#ordName_"+index).text());



    $("#top-big").text("交易处理细节");
}

/**
 * 点击详情页返回事件
 * */
function showTrial() {
    $("#trialDIV").show();
    $("#detailDIV").hide();

    $("#detailOrderId").text("");
    $("#detailComfirmParam").text("");

    $("#top-big").text("交易记录");
}