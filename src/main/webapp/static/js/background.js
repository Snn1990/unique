
var peizhiheight = $(".pop-peizhi").css("height");
var peizhiwidth = $(".pop-peizhi").css("width");
$(".pop-peizhi").css("margin-left",- parseInt(peizhiwidth)/2+"px" );
$(".pop-peizhi").css("margin-top",- parseInt(peizhiheight)/2+"px" );
var winchuheight = $(".window-shanchu").css("height");
var winchuwidth = $(".window-shanchu").css("width");
$(".window-shanchu").css("margin-left",- parseInt(winchuwidth)/2+"px" );
$(".window-shanchu").css("margin-top",- parseInt(winchuheight)/2+"px" );
var wheight=window.innerHeight;
$(".right-").css("min-height",wheight+"px");

$(".visa-text").addClass("visa-text-move2");
$(".visa-text").click(function(){
    if($(this).siblings("input").val()){
        return;
    }
    else {
        if($(this).css("width")==162+"px"){
            $(this).removeClass("visa-textcvv")
        }
        if($(this).css("width")==250+"px"){
            $(this).removeClass("visa-textex")
        }
        if($(this).hasClass("visa-text-move2")){
            $(this).siblings("input").focus();
            $(this).removeClass("visa-text-move2").addClass("visa-text-move1");
        }
        else {
            $(this).siblings("input").blur();
            $(this).removeClass("visa-text-move1").addClass("visa-text-move2");
        }
    }
});
// 获取上传图片的路径值
$(".new-button").click(function(){
  $(".window-xz,.mask_").css({"display":"block"});
        var windowheight = $(".window-xinzeng").css("height");
        var windowwidth = $(".window-xinzeng").css("width");
        $(".window-xinzeng").css("margin-left",- parseInt(windowwidth)/2+"px" );
        $(".window-xinzeng").css("margin-top",- parseInt(windowheight)/2+"px" );
    $("body").css("overflow-y","hidden");
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var popheight=document.getElementById("window-xz").offsetHeight;
    document.getElementById("window-xz").style.marginTop=-popheight/2+scrollTop+"px";

});
$(".close2").click(function(){
    $(".window-xinzeng,.mask_,.window-xg,.window-shanchu").css({
        "display":"none"
    })
    $("body").css("overflow-y","auto");
});
$(".span-shanchu").click(function () {
    $(".hadchu").removeClass("hadchu");
    $(this).addClass("hadchu");
    // $(this).parents("tr").remove();
    $(".window-shanchu,.mask_").css({
        "display":"block"
    })
});
$(".quxiao").click(function(){
    $(".window-shanchu,.mask_").css({
        "display":"none"
    })
});
$(".queding").click(function(){
    $(".hadchu").parents("tr").remove();
    $(".window-shanchu,.mask_").css({
        "display":"none"
    })
});

$(".span-xiugai").click(function () {
    $(".window-xg,.mask_").css({
        "display":"block"
    });
    var windowheight = $(".window-xinzeng").css("height");
    var windowwidth = $(".window-xinzeng").css("width");
    $(".window-xinzeng").css("margin-left",- parseInt(windowwidth)/2+"px" );
    $(".window-xinzeng").css("margin-top",- parseInt(windowheight)/2+"px" );
    var td1=$(this).parents("tr").find("td").eq(0);
    var td2=$(this).parents("tr").find("td").eq(1);
    var td3=$(this).parents("tr").find("td").eq(2);
    $(".window-xg #result").empty();
    $(".window-xg #result").append(td1.html());
    $(".window-xg .name-input").find("input").val(td2.text());
    $(".window-xg .url-input").find("input").val(td3.text());
    $(".hadgai").removeClass("hadgai");
    $(this).addClass("hadgai");
    $("body").css("overflow-y","hidden");
});
$(".baocun-btnxz").click(function(){
    $(".window-xinzeng,.mask_").css({
        "display":"none"
    })
    // $("#tbody").prepend("#imagePreview img");
    var img=$("#imagePreview").html();
    var name=$(".name-input input").val();
    var url=$(".url-input input").val();
    var myDate = new Date();
//获取当前年
    var year=myDate.getFullYear();
//获取当前月
    var month=myDate.getMonth()+1;
//获取当前日
    var date=myDate.getDate();
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();
    function time(el){
        if(el<10){
            return "0"+el;
        }
        else {
            return el;
        }
    }
    var now= year+'-'+time(month)+"-"+time(date)+" "+"   "+time(h)+':'+time(m)+":"+time(s);
    var tabletr="";
    tabletr+='<tr>';
    tabletr+='<td>'+img+'</td>';
    tabletr+='<td>'+name+'</td>';
    tabletr+='<td>'+url+'</td>';
    tabletr+='<td>'+now+'</td>';
    tabletr+='<td><span class="span-shanchu" onclick="shanchuhan.call(this)">删除</span>';
    tabletr+='  ';
    tabletr+='<span class="span-xiugai" onclick="xiugaihan.call(this)">修改</span>';
    tabletr+='</tr>';
    $("#tbody").prepend(tabletr);
    $("#tbody img").each(function(){
        $(this).css({
            "width":"50px",
            "height":"auto"
        })

    })
// 修改的保存
    $("body").css("overflow-y","auto");
});

function shanchuhan(chu){
    $(this).parents("tr").remove();
}

function xiugaihan(gai){
    $(".window-xg,.mask_").css({
        "display":"block"
    })
    var td1=$(this).parents("tr").find("td").eq(0);
    var td2=$(this).parents("tr").find("td").eq(1);
    var td3=$(this).parents("tr").find("td").eq(2);
    $(".window-xg #result").empty();
    $(".window-xg #result").append(td1.html());
    $(".window-xg .name-input").find("input").val(td2.text());
    $(".window-xg .url-input").find("input").val(td3.text());
    $(".hadgai").removeClass("hadgai");
    $(this).addClass("hadgai");
    $(".window-xg").find("#result img").css({
        "width":"30px",
        "height":"auto"
    })
}

$(".baocun-btngai").click(function(){
    var myDate = new Date();
//获取当前年
    var year=myDate.getFullYear();
//获取当前月
    var month=myDate.getMonth()+1;
//获取当前日
    var date=myDate.getDate();
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();
    function time(el){
        if(el<10){
            return "0"+el;
        }
        else {
            return el;
        }
    }
    var now= year+'-'+time(month)+"-"+time(date)+" "+"   "+time(h)+':'+time(m)+":"+time(s);
    $(".span-xiugai").each(function(){
        if($(this).hasClass("hadgai")){
            var td1=$(this).parents("tr").find("td").eq(0);
            var td2=$(this).parents("tr").find("td").eq(1);
            var td3=$(this).parents("tr").find("td").eq(2);
            var td4=$(this).parents("tr").find("td").eq(3);
            td2.text($(".window-xg .name-input").find("input").val());
            td1.find("img").attr("src",$(".window-xg #result").find("img").attr("src"));
            td3.text($(".window-xg .url-input").find("input").val());
            td4.text(now);
        }
        $(".window-xg,.mask_").css({
            "display":"none"
        });
    });
    $("body").css("overflow-y","hidden");
});

    function change(el){
    $(".fileval").val(el);
}

$(".checkbox-a").click(function(){
    if($(this).find("img").is(":hidden")){
        if($(this).hasClass("tong")){
            $(".tong").find("img").css({
                "display":"none"
            });
            $(this).find("img").css({
                "display":"block"
            })
        }
        $(this).find("img").css({
            "display":"block"
        })
    }
    else{
        $(this).find("img").css({
            "display":"none"
        })
    }
});


    // 切换设置按钮
$(".grey-set").hover(function(){
    $(this).css({"display":"none"});
    $(".red-set").css({"display":"inline-block"});
});
$(".red-set").mouseout(function(){
    $(this).css({"display":"none"});
    $(".grey-set").css({"display":"inline-block"});
});
// $(".setsbox .merchant-info").click(function(){
//     $(".white-menu").removeClass("white-menu");
//     $(this).addClass("white-menu");
//     $(".setcontain").css({
//         "display":"none"
//     });
// $(".setinfo .setcontain").eq($(this).index()).css({
//     "display":"block"
// });
// });


$(".test-button").click(function(){
    $(".test-success").css("display","inline");
});
$(".enter-").click(function(){
    if($(".test-success").is(":visible")){
        $(".gray span").css("width","40%");
        $(".font-reg").text("40%");
        $(".state-yes").eq(1).addClass("yes-red");
        $(this).css("display","none");
        $(".enter-test").css("display","inline-block");
    }
});

  // 商户管理中修改按钮
$(".table- a").click(function(){
    $(".xiuclick").removeClass("xiuclick");
    $(this).addClass("xiuclick");
    $("body").css({overflow:"hidden"});
    $(".mask_,.pop-xiu").css("display","block");
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var popheight;
    if(document.getElementById("pop-xiu")){
    popheight=document.getElementById("pop-xiu").offsetHeight;
    document.getElementById("pop-xiu").style.marginTop=-popheight/2+scrollTop+"px";
    }
    // 获取表格中的数据到修改框中
    var shanghao= $(this).parents("tr").find("td").eq(0).text();
    $(".pop-xiu .shanghao").find("input").val(shanghao);
    var shangname=$(this).parents("tr").find("td").eq(1).text();
    $(".pop-xiu .shangname").find("input").val(shangname);
    var lianxi=$(this).parents("tr").find("td").eq(2).text();
    $(".pop-xiu .lianxi").find("input").val(lianxi);
    var dianhau=$(this).parents("tr").find("td").eq(3).text();
    $(".pop-xiu .dianhau").find("input").val(dianhau);
    var loginhao=$(this).parents("tr").find("td").eq(4).text();
    $(".pop-xiu .loginhao").find("input").val(loginhao);
    var state=$(this).parents("tr").find("td").eq(5).text();
    if(state=="上线"){
        $(".xiaxian .a-span").css({"display":"none"});
        $(".shangxian .a-span").css({"display":"inline-block"})
    }
    else {
        $(".shangxian .a-span").css({"display":"none"});
        $(".xiaxian .a-span").css({"display":"inline-block"})
    }
    var statetext=$(this).parent("td").siblings(".state").text();
    // $(".checkbox-a").find("img").css({
    //     "display":"none"
    // })
    var name1= $(this).parents("tr").find("td").eq(0).text();
    var gongsi= $(this).parents("tr").find("td").eq(2).text();
    var zhiwu= $(this).parents("tr").find("td").eq(3).text();
    var email= $(this).parents("tr").find("td").eq(4).text();
    $(".label1").find(".getteext").text(name1);
    $(".label2").find(".getteext").text(gongsi);
    $(".label3").find(".getteext").text(zhiwu);
    $(".label4").find(".getteext").text(email);
    if(statetext=="待审核"||statetext=="未通过"){
        $(".tong-box").css({
            "display":"block"
        })
        $(".shang-box,.xia-box").css({
            "display":"none"
        })

    }
    if(statetext=="下线"){
        $(".shang-box").css({
            "display":"block"
        })
        $(".tong-box,.xia-box").css({
            "display":"none"
        })
    }
    if(statetext=="上线"){
        $(".xia-box").css({
            "display":"block"
        })
        $(".tong-box,.shang-box").css({
            "display":"none"
        })
    }
});
$(".save- ,.quxiaodd").click(function(){
    // 新增按钮的保存
    if($(this).hasClass("merchant-baocun")){
        var shanghao=$(".popnew .shanghao").find("input").val();
        var shangname=$(".popnew .shangname").find("input").val();
        var lianxi=$(".popnew .lianxi").find("input").val();
        var dianhau=$(".popnew .dianhau").find("input").val();
        var loginhao=$(".popnew .loginhao").find("input").val();
        var state;
        var stateclass;
        $(".a-state").each(function(){
            if($(this).find(".a-span").is(":visible")){
                state= $(this).siblings(".state-text").text();
                if(state=="上线"){stateclass="state-up";}
                else if (state=="下线"){stateclass="state-";}
            }
        });
        var merchantstr="";
        merchantstr+='<tr>';
        merchantstr+='<td>'+shanghao+'</td>';
        merchantstr+='<td>'+shangname+'</td>';
        merchantstr+='<td>'+lianxi+'</td>';
        merchantstr+='<td>'+dianhau+'</td>';
        merchantstr+='<td>'+loginhao+'</td>';
        merchantstr+='<td class='+stateclass+'>'+state+'</td>';
        merchantstr+='<td><a href="javascript:" class="change-merchant" onclick="newxiu.call(this)">修改</a></td>';
        merchantstr+='</tr>';
        $(".tbody-merchant").prepend(merchantstr);
    }

    // 修改按钮的保存
    if($(this).hasClass("xiu-baocun")){
        var shanghao2 = $(".pop-xiu .shanghao").find("input").val();
        var shangname2 = $(".pop-xiu .shangname").find("input").val();
        var lianxi2 = $(".pop-xiu .lianxi").find("input").val();
        var dianhau2 = $(".pop-xiu .dianhua").find("input").val();
        var loginhao2 = $(".pop-xiu .loginhao").find("input").val();
        var state2;
        $(".pop-xiu .danxuan").each(function(){
            if($(this).find(".a-span").is(":visible")){
                state2= $(this).find(".state-text").text();
                if(state2=="上线"){
                    $(".xiuclick").parents("tr").find("td").eq(5).removeClass("state-").addClass("state-up");
                }
                if(state2=="下线"){
                    $(".xiuclick").parents("tr").find("td").eq(5).removeClass("state-up").addClass("state-");
                }
            }
        });
        $(".table- a").each(function(){
            if($(this).hasClass("xiuclick")){
                $(this).parents("tr").find("td").eq(0).text(shanghao2);
                $(this).parents("tr").find("td").eq(1).text(shangname2);
                $(this).parents("tr").find("td").eq(2).text(lianxi2);
                $(this).parents("tr").find("td").eq(3).text(dianhau2);
                $(this).parents("tr").find("td").eq(4).text(loginhao2);
                $(this).parents("tr").find("td").eq(5).text(state2);
            }
        });
    }
    $(".mask_,.pop-up").css("display","none");
    $("body").css({overflow:"auto"});
});
function newxiu(el){
    $(".xiuclick").removeClass("xiuclick");
    $(this).addClass("xiuclick");
    $("body").css({overflow:"hidden"});
    $(".mask_,.pop-xiu").css("display","block");
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var popheight=document.getElementById("pop-xiu").offsetHeight;
    document.getElementById("pop-xiu").style.marginTop=-popheight/2+scrollTop+"px";

    var shanghao= $(this).parents("tr").find("td").eq(0).text();
    $(".pop-xiu .shanghao").find("input").val(shanghao);
    var shangname=$(this).parents("tr").find("td").eq(1).text();
    $(".pop-xiu .shangname").find("input").val(shangname);
    var lianxi=$(this).parents("tr").find("td").eq(2).text();
    $(".pop-xiu .lianxi").find("input").val(lianxi);
    var dianhua=$(this).parents("tr").find("td").eq(3).text();
    $(".pop-xiu .dianhua").find("input").val(dianhua);
    var loginhao=$(this).parents("tr").find("td").eq(4).text();
    $(".pop-xiu .loginhao").find("input").val(loginhao);
    var state=$(this).parents("tr").find("td").eq(5).text();
    if(state=="上线"){
        $(".xiaxian .a-span").css({"display":"none"});
        $(".shangxian .a-span").css({"display":"inline-block"})
    }
    else {
        $(".shangxian .a-span").css({"display":"none"});
        $(".xiaxian .a-span").css({"display":"inline-block"})
    }
    var statetext=$(this).parent("td").siblings(".state").text()
}

$(".test-button").click(function(){
    $(".test-success").css("display","block");
});
$(".enter-").click(function(){
    if($(".test-success").is(":visible")){
        $(".gray span").css("width","40%");
        $(".font-reg").text("40%");
        $(".state-yes").eq(1).addClass("yes-red");
        $(this).css("display","none");
        $(".enter-test").css("display","inline-block");
        $(".state-yes").eq(0).find(".jt-grey img").attr("src","../admin/img/jt-red.png");
    }
});
$(".cancel").click(function(){
    $("input").val("");
});








