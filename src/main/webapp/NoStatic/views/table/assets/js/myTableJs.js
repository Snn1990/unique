
var tdStr = "<tr>"+
    "<td>1</td>"+
    "<td>Dakota Rice</td>"+
    "<td>$36,738</td>"+
    "<td>Niger</td>"+
    "<td>Oud-Turnhout</td>"+
    "<td></td>"+
    "</tr>";


var dataFormat = [
    '<a rel="tooltip" title="Like" class="table-action like" href="javascript:void(0)" title="Like">',
    '<i class="fa fa-heart"></i>',
    '</a>',
    '<a rel="tooltip" title="Edit" class="table-action edit" href="javascript:void(0)" title="Edit">',
    '<i class="fa fa-edit"></i>',
    '</a>',
    '<a rel="tooltip" title="Remove" class="table-action remove" href="javascript:void(0)" title="Remove">',
    '<i class="fa fa-remove"></i>',
    '</a>'
].join('');

$(function(){
    console.log("页面初始化加载begin");

    $("#fresh-table tbody").prepend(tdStr+tdStr);

    getTableInfo();
    // $("#a").click(function(){
    //     //adding your code here
    // });
    console.log("页面初始化加载end");
});



function getTableInfo() {
//	openword
    $.ajax({
        type: "post",
        url: "/unique/services/table/getTableInfo",
        async: true,
        success: function (data) {
            console.log("请求table数据begin");
            var json = JSON.parse(data.data);
            console.log(json);
            // var jsonStr = json.data;
            // console.log(jsonStr);
            var tdStrTemp = "";
            console.log(json);
            for(var i = 0 ; i< json.length;i++){
                tdStrTemp += "<tr>"+
                    "<td>"+i+"</td>"+
                    "<td>"+json[i].nameinfo+"</td>"+
                    "<td>"+json[i].amount+"</td>"+
                    "<td>"+json[i].descinfo+"</td>"+
                    "<td>"+json[i].place+"</td>"+
                    "<td>"+dataFormat+"</td>"+
                    "</tr>";
            }
            console.log(tdStrTemp);
            console.log("请求table数据end");
            $("#fresh-table tbody").prepend(tdStrTemp);
            BootstrapTable.prototype.initBody;
        }
    });

}