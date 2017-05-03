/**
 * Created by nan on 2017/4/17.
 */
var str = "<div class=\"panel panel-default\">"+
    "	                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">"+
    "	                                <h4 class=\"panel-title\">"+
    "	                                    <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">"+
    "	                                        ###TITLE###"+
    "	                                    </a>"+
    "	                                </h4>"+
    "	                            </div>"+
    "	                            <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">"+
    "	                                <div class=\"panel-body\">"+
    "	                                    ###VALUES###"+
    "	                                </div>"+
    "	                            </div>"+
    "	                        </div>";

var pp ="<p>爸爸的生日：农历10月20日</p>";

var dataStr = "";

var num={
    "1":"One",
    "2":"Two",
    "3":"Three",
    "4":"Four",
    "5":"Five",
    "6":"Six",
    "7":"Seven",
    "8":"Eight"

};
$(document).ready(function(){

    $.ajax({
        type: "get",
        url: "/unique/services/userInfo",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: true,
        success: function(data) {
            if(data.status == 'success'){
                degnlu = 1;
                initData();
            }else{
                window.location.href="/unique/index.html";
            }

        }
    });

});

function initData() {
    $.ajax({
        type: "post",
        url: "/unique/services/bwlInfoList",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: true,
        success: function(data) {

            var json = JSON.parse(data.data);
            for(var i = 0;i<json.length;i++){
                var tempStr = str;
                var yw = num[i+1];
                var e=new RegExp("One","g");
                tempStr = tempStr.replace(e,yw);
                console.log(yw);
                tempStr = tempStr.replace("###TITLE###",json[i].titleText)
                var jsonInfo = json[i].bwlListInfo;
                if(jsonInfo.length > 0){
                    var strp = "";
                    for(var j = 0 ;j< jsonInfo.length;j++){
                        console.log(jsonInfo[j].bwlTxt );
                        strp += "<p>"+jsonInfo[j].bwlTxt+"</p>";
                    }
                    tempStr = tempStr.replace("###VALUES###",strp)
                }else{
                    tempStr = tempStr.replace("###VALUES###","")
                }
                dataStr+= tempStr;
            }
            console.log(dataStr);
            $("#accordion").append(dataStr);

        }
    });
}


