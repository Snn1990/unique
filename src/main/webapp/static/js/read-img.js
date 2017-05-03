
var loadImageFile = (function () {
    if (window.FileReader) {
        var oPreviewImg = null, oFReader = new window.FileReader(),
            rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
        oFReader.onload = function (oFREvent) {
//                    document.getElementById("fileval").val(el);
            if (!oPreviewImg) {
                var newPreview = document.getElementById("imagePreview");
                oPreviewImg = new Image();
                // alert(newPreview.offsetWidth);
                // oPreviewImg.style.width = (newPreview.clientWidth-12).toString() + "px";
                // oPreviewImg.style.height = (newPreview.clientHeight-12).toString() + "px";
                newPreview.appendChild(oPreviewImg);
            }
            oPreviewImg.src = oFREvent.target.result;
        };

        return function () {
            var aFiles = document.getElementById("imageInput").files;
            // document.getElementById("fileval").innerText=document.getElementById("imageInput").value;
            if (aFiles.length === 0) { return; }
            if (!rFilter.test(aFiles[0].type)) { alert("You must select a valid image file!"); return; }
            oFReader.readAsDataURL(aFiles[0]);
        }
    }
    if (navigator.appName === "Microsoft Internet Explorer") {
        return function () {
            alert(document.getElementById("imageInput").value);
            document.getElementById("imagePreview").filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = document.getElementById("imageInput").value;
        }
    }
})();



var result=document.getElementById("result");
var file=document.getElementById("file");

//判断浏览器是否支持FileReader接口
if(typeof FileReader == 'undefined'){
    result.InnerHTML="<p>你的浏览器不支持FileReader接口！</p>";
    //使选择控件不可操作
    file.setAttribute("disabled","disabled");
}

function readAsDataURL(){
    //检验是否为图像文件
    var file = document.getElementById("file").files[0];
    if(!/image\/\w+/.test(file.type)){
        alert("看清楚，这个需要图片！");
        return false;
    }

    var reader = new FileReader();
    //将文件以Data URL形式读入页面
    reader.readAsDataURL(file);
    reader.onload=function(e){
        var result=document.getElementById("result");
        //显示文件
        var picurl="";
        picurl+='<img src="'+ this.result +'" alt="" />'+"  ";
        result.innerHTML=picurl;

    }
}

