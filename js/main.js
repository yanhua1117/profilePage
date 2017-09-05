window.onload = function(){
	
	window.onscroll = function(){
		
		var scrollTop = document.documentElement.scrollTop 
			|| document.body.scrollTop;
//		var mainMenu = document.getElementsByClassName('menu-1')[0];
		if ( scrollTop > 0 ) {
			$('.menu-1').addClass('active');
		}else{
			$('.menu-1').removeClass('active');
		}
	}
	
	//当点击关闭按钮时，菜单列表显示或隐藏
	var menuIcon = document.getElementsByClassName('menu-2_icon')[0];
	var menuList = document.getElementsByClassName('menu-2_list')[0];
	var onOff=true;
	menuIcon.onclick = function(){
		if (onOff) {
			menuList.style.top = 55+'px';
			$('.menu-2_list').addClass('menu-active');
			$('.menu-icon1').addClass('menu-icon1-active');
			$('.menu-icon2').addClass('menu-icon2-active');
			$('.menu-icon3').addClass('menu-icon3-active');
			onOff = false;
		} else{
			$('.menu-2_list').removeClass('menu-active');
			$('.menu-icon1').removeClass('menu-icon1-active');
			$('.menu-icon2').removeClass('menu-icon2-active');
			$('.menu-icon3').removeClass('menu-icon3-active');
			onOff = true;
		}

	}
	
	//当点击菜单中的选项时，菜单隐藏
	var menuSm = document.getElementById('menu-item');
	var menuSm_list = menuSm.getElementsByTagName('a');
	
	for ( var i = 0; i < menuSm_list.length; i++ ) {
		
		menuSm_list[i].onclick = function(){
			
			if (!onOff) {
				onOff = true;
			}
			$('.menu-2_list').removeClass('menu-active');
		}
		
	}
	
	//点击联系方式按钮切换二维码
	var contactIcon = document.getElementsByClassName('personal-icon');
	var closeIcon = document.getElementById('close-icon');
	var contactImg = document.getElementById('contact-img');
//	var contact = document.getElementsByClassName('contact')[0];
	contactIcon[1].onclick = function(){
		
		$('.contact').addClass('active-contact');
		contactImg.src = 'img/wechat.jpg';
		
	}
	contactIcon[2].onclick = function(){
		
		$('.contact').addClass('active-contact');
		contactImg.src = 'img/weibo.jpg';
		
	}
	closeIcon.onclick = function(){
		
		$('.contact').removeClass('active-contact');
		
	}
	
	//右上角锚点
	$(".link_item").on("click",function(){
		var _this = $(this);
		var dataId = _this.attr("data-id");
		
		var obj = $("#"+dataId);
		var scrollTop = obj.offset().top;
		
		$("body").animate({
			scrollTop : scrollTop
		},300)
	})
	
}

var top_c = {};
top_c.ui = {};
top_c.app = {};

top_c.ui.bgshow = function(){
	var arr = getElementsByClassName(document,"body_bg");
	for (var i = arr.length-1; i >=0 ; i--) {
		arr[i].style.zIndex=i;
	};
	var num = 0;
	var timer = setInterval(function(){
		if(num == arr.length-1){
			num = 0;
		}else{
			num++;
		}
		for (var i = 0; i < arr.length; i++) {
			startMove(arr[i],{opacity:0},6);
		};
		startMove(arr[num],{opacity:100},6);
	},10000);
}

top_c.app.pageLoad = function(){
	var load_before = document.getElementById("load_before");
	var xie_line = load_before.firstElementChild;
	var center_circle = xie_line.firstElementChild;
	var hd_left = document.getElementById("hd_left");
	var hd_right = document.getElementById("hd_right");

	var deg = 100;
	var start = 0;
	var speed = 20;
	var timer = setInterval(function(){
		if(start==deg){
			clearInterval(timer);
			top_c.app.circleToSmall(center_circle,hd_left,hd_right);
			var oDot = center_circle.firstElementChild;
			oDot.style.display="none";
		}else{
			center_circle.style.transform = "rotate("+(start+speed)+"deg)";
			start += speed;
		}
	},30);
	
}

top_c.app.circleToSmall = function(circle,hd_left,hd_right){
	var target = 0;
	var speed = -0.1;
	var start = 1;
	var timer = setInterval(function(){
		if(start==target){
			clearInterval(timer);
			top_c.app.closeDoor(hd_left,hd_right);
		}else{
			circle.style.transform = "scale("+(start+speed)+")";
			start += speed;
			start = Math.floor(start*10)/10;
		}
	},30);
}

top_c.app.closeDoor = function(left_d,right_d){
	var load_before = document.getElementById("load_before");
	var load_box = document.getElementById("load_box");
	startMove(left_d,{width:750},3);
	startMove(right_d,{width:750},3,function(){
		load_before.style.alpha = "(opacity:70)";
		load_before.style.opacity = "0.7";
		startMove(load_before,{opacity:0},4,function(){
			document.body.removeChild(load_box);
		});

		
	});
}
top_c.app.pageLoad();
