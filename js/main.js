//页面加载动画
$(document).ready(function(){
	
	$(document).on('scroll',function(){
		
		var scrollTop = document.documentElement.scrollTop 
			|| document.body.scrollTop;
		if ( scrollTop > 0 ) {
			$('.menu-1').addClass('active');
		}else{
			$('.menu-1').removeClass('active');
		}
		
	})
	
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
	});
	
});
