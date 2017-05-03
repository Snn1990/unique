// JavaScript Document
/*****************数据改变  ul 不变*************/
//总页数   当前页   表单id  跳转url
clipInit=function (countPage,currentPage,formId,toUrl,callback){
    console.info("countPage:"+countPage);
    console.info("currentPage:"+currentPage);
    tCallBack = callback;
    tFormId = formId;
    tToUrl = toUrl;
    pageCon = countPage;
    pageDq = currentPage;//当前页
    //alert(typeof tCallBack);
    //alert(typeof tFormId);
    //alert(typeof tToUrl);
    //alert(typeof pageCon);
    //alert(typeof pageDq);


    if(parseInt(pageCon)>7){
        liTab =7;
    }else{
        liTab = pageCon;
    }
    medCur=Math.ceil(liTab/2);

    var str="";
    str+="<ul>";
    str+="<li class='disbled' id='firstPage' onclick='FirstPage()'><span class='icon-home-page'></span></li>";
    str+="<li class='disbled' id='lastPage' onclick='LastPage()'><span class='icon-page-up'></span></li>";
    str+="<div id='pageU' class='fleft'>";
    if(liTab<parseInt(pageCon)){
        if(parseInt(pageDq)<medCur){
            for(var i=1;i<=liTab;i++){
                str+="<li id='clip"+i+"' onclick='pageInt(&#039;"+i+"&#039;,&#039;"+liTab+"&#039;,&#039;"+medCur+"&#039;)'>"+i+"</li>";
            }
        }else if(parseInt(pageDq)>parseInt(pageCon)-3){
            for(var i=parseInt(pageCon)-6;i<=parseInt(pageCon);i++){
                str+="<li id='clip"+i+"' onclick='pageInt(&#039;"+i+"&#039;,&#039;"+liTab+"&#039;,&#039;"+medCur+"&#039;)'>"+i+"</li>";
            }
        }
        else{
            for(var i=parseInt(pageDq)-3;i<=parseInt(pageDq)+3;i++){
                str+="<li id='clip"+i+"' onclick='pageInt(&#039;"+i+"&#039;,&#039;"+liTab+"&#039;,&#039;"+medCur+"&#039;)'>"+i+"</li>";
            }
        }
    }else{
        for(var i=1;i<=parseInt(pageCon);i++){
            str+="<li id='clip"+i+"' onclick='pageInt(&#039;"+i+"&#039;,&#039;"+parseInt(pageCon)+"&#039;,&#039;"+medCur+"&#039;)'>"+i+"</li>";
        }
    }
    str+="<li class='clear'></li>";
    str+="</div>";
    str+="<li class='BORDER' id='nextPage' onclick='NextPage()'><span class='icon-page-down'></span></li>";
    str+="<li class='BORDER' id='endPage' onclick='EndPage()' style='border-right:1px solid #ccc'><span class='icon-back'></span></li>";

    str+="<li class='clear'></li>";
    str+="</ul>";
    $("#clipDIV").html(str);
    pageInit('clip1',liTab,medCur,parseInt(pageDq));
}
//设置当点击的值小于预设固定值
//单击事件  选择页数
clipPage=function (cur,page){
    var str="";
    if(cur<=4){
        for(var i=1;i<=page;i++){
            var liId="clip"+i;
            if(cur==i){
                $("#"+liId).attr("class","curPage");
            }else{
                $("#"+liId).attr("class","BORDER");
            }
            $("#"+liId).text(i);
        }
    }else{
        for(var i=parseInt(pageCon)-6;i<=parseInt(pageCon);i++){
            var liId="clip"+i;
            if(cur==i){
                $("#"+liId).attr("class","curPage");
            }else{
                $("#"+liId).attr("class","BORDER");
            }
            $("#"+liId).text(i);
        }
    }

    pageControl(cur);
}
//设置的中转站，根据获取的值更改操作
pageInt=function (obj,page,medCur){
    var value=obj;
    if(value < medCur||value >= pageCon-3){
        clipPage(value,page);
    }else if(value >= medCur){
        clipPageMax(value,page,medCur);
    }
    $("#currentPage").val(value);
    formSubmit(tFormId, tToUrl,tCallBack);
}
//页面初始化的时候触发
pageInit=function (obj,page,medCur,curPage){
    var value=curPage;
    if(value < medCur||value >= pageCon-3){
        clipPage(value,page);
    }else if(value >= medCur){
        clipPageMax(value,page,medCur);
    }
}
//设置当获取的值大于预设固定值
clipPageMax=function (cur,page,medCur){
    var str="";
    var startNum=parseInt(cur)-parseInt(medCur)+1;
    var maxPage=startNum+parseInt(page)-1;
    if(maxPage<parseInt(pageCon)){
        for(var i=startNum;i<=maxPage;i++){
            var liId="clip"+i;
            if(parseInt(cur)==i){
                $("#"+liId).attr("class","curPage");
            }else{
                $("#"+liId).attr("class","BORDER");
            }
            $("#clip"+i).text(startNum);
            startNum++;
        }
    }else{
        var end = new RegExp(/\d+$/);
        var page=parseInt(end.exec(page));
        var curT=parseInt(cur)-parseInt(pageCon)+parseInt(page);
        var maxP=parseInt(pageCon);
        for(var i=page;i>=1;i--){
            var liId="clip"+i;
            if(curT==i){
                $("#"+liId).attr("class","curPage");
            }else{
                $("#"+liId).attr("class","BORDER");
            }
            $("#"+liId).text(maxP);
            maxP--;
        }

    }
    pageControl(cur);
}
//首页，尾页，上一页，下一页 的样式
pageControl=function (cur){
    if(cur==1 && parseInt(pageCon)!=1){
        $("#firstPage").attr("class","disbled");
        $("#lastPage").attr("class","disbled");
        $("#nextPage").attr("class","BORDER");
        $("#endPage").attr("class","BORDER");
        $('#lastPage').attr("onclick","")
        $('#firstPage').attr("onclick","")
        $('#nextPage').attr("onclick","NextPage()")
        $('#endPage').attr("onclick","EndPage()")
    }else if(cur==parseInt(pageCon)){
        $("#firstPage").attr("class","BORDER");
        $("#lastPage").attr("class","BORDER");
        $("#nextPage").attr("class","disbled");
        $("#endPage").attr("class","disbled");

        $('#lastPage').attr("onclick","LastPage()")
        $('#firstPage').attr("onclick","FirstPage()")
        $('#nextPage').attr("onclick","")
        $('#endPage').attr("onclick","")
    }else{
        $("#firstPage").attr("class","BORDER");
        $("#lastPage").attr("class","BORDER");
        $("#nextPage").attr("class","BORDER");
        $("#endPage").attr("class","BORDER");

        $('#lastPage').attr("onclick","LastPage()")
        $('#firstPage').attr("onclick","FirstPage()")
        $('#nextPage').attr("onclick","NextPage()")
        $('#endPage').attr("onclick","EndPage()")
    }
    if(parseInt(pageCon)==1){
        $("#firstPage").attr("class","disbled");
        $("#lastPage").attr("class","disbled");
        $("#nextPage").attr("class","disbled");
        $("#endPage").attr("class","disbled");

        $('#lastPage').attr("onclick","")
        $('#firstPage').attr("onclick","")
        $('#nextPage').attr("onclick","")
        $('#endPage').attr("onclick","")
    }

}
//第一页 显示
FirstPage=function (){
    var forNum=parseInt(liTab);
    clipPage(1,forNum);
    $("#currentPage").val(1);
    formSubmit(tFormId, tToUrl,tCallBack);
}
//尾页 显示
EndPage=function (){
    var maxV=parseInt(pageCon);
    clipPageMax(maxV,liTab,medCur);
    $("#currentPage").val(pageCon);
    formSubmit(tFormId, tToUrl,tCallBack);
}
//上一页 显示
LastPage=function (){
    var choice = parseInt($(".curPage").text())-1;
    pageInt(choice,liTab,medCur);
}
//下一页 显示
NextPage=function (){
    var choice = parseInt($(".curPage").text())+1;
    pageInt(choice,liTab,medCur);
}