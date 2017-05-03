/*
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var degnlu = 0;
var userChName="";
(function($) {


    //定时器每秒调用一次fnDate()
    setInterval(function(){
        //alert("刷新时间");
        fnDate();
    },1000);
    var porCom = {};
    //项目协议
    porCom.webappProtocal = window.location.protocol;
    //项目ip+端口
    porCom.webappHost = window.location.host;
    var pathName = window.location.pathname.substring(1);
    //项目名称
    porCom.webappName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
    //项目根路径
    porCom.webappRootPath = porCom.webappName == "" ? porCom.webappProtocal + "//" + porCom.host : porCom.webappProtocal + "//" + porCom.webappHost + "/" + porCom.webappName;

	console.log(porCom);
    var myDate = new Date();
    $('#menu').text(myDate.toLocaleDateString());
    $.ajax({
        type: "get",
        url: "/unique/services/userInfo",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: true,
        success: function(data) {
            console.log(data.status);
            if(data.status == 'success'){
                degnlu = 1;
                userChName = data.data;
                $("#userName").text(data.data);
            }else{
                $.simplyToast(data.msg, 'danger');
                window.location.href="/unique/index.html";
            }

        }
    });
    $.simplyToast("您已经成功登录后端", 'success');
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$menu = $('#menu'),
			$sidebar = $('#sidebar'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// IE<=9: Reverse order of main and sidebar.
			if (skel.vars.IEVersion <= 9)
				$main.insertAfter($sidebar);

		// Menu.
			$menu
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Search (header).
			var $search = $('#search'),
				$search_input = $search.find('input');

			$body
				.on('click', '[href="#search"]', function(event) {

					event.preventDefault();

					// Not visible?
						if (!$search.hasClass('visible')) {

							// Reset form.
								$search[0].reset();

							// Show.
								$search.addClass('visible');

							// Focus input.
								$search_input.focus();

						}

				});

			$search_input
				.on('keydown', function(event) {

					if (event.keyCode == 27)
						$search_input.blur();

				})
				.on('blur', function() {
					window.setTimeout(function() {
						$search.removeClass('visible');
					}, 100);
				});

		// Intro.
			var $intro = $('#intro');

			// Move to main on <=large, back to sidebar on >large.
				skel
					.on('+large', function() {
						$intro.prependTo($main);
					})
					.on('-large', function() {
						$intro.prependTo($sidebar);
					});

	});

})(jQuery);


function fnDate(){
    var oDiv=document.getElementById("div1");
    var date=new Date();
    var year=date.getFullYear();//当前年份
    var month=date.getMonth();//当前月份
    var data=date.getDate();//天
    var hours=date.getHours();//小时
    var minute=date.getMinutes();//分
    var second=date.getSeconds();//秒
    var time=year+"-"+fnW((month+1))+"-"+fnW(data)+" "+fnW(hours)+":"+fnW(minute)+":"+fnW(second);
    //oDiv.innerHTML=time;
    $("#time").text(time);
    $(".published").text(time);
}
//补位 当某个字段不是两位数时补0
function fnW(str){
    var num;
    str>10?num=str:num="0"+str;
    return num;
}