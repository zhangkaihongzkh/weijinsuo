$(function(){
	function resize(){
		var windowWidth = $(window).width();
		var isSmallScreen = windowWidth < 768;

		$('#main_ad > .carousel-inner > .item').each(function(i,item){
			var $item = $(item);	//each中item为DOM对象，要转换为JQ对象
			//获取data属性
			var imgSrc = isSmallScreen?
									$item.data('img-sm'):
									$item.data('img-lg');
			$item.css('backgroundImage','url("'+ imgSrc +'")');
			if(isSmallScreen){ //小图片时使用IMG标签
				$item.html('<img src="'+ imgSrc +'" alt="" />')
			} else{
				$item.empty();
			}
		});
	}
	$(window).on('resize',resize).trigger('resize');

		/*初始化tooltips*/
	$('[data-toggle="tooltip"]').tooltip();

	/*动态设置标签页横向滚动条ul宽度*/
	var $navTabs = $('ul.nav-tabs');
	var width = 30;	//原先ul有padding-left10px
	$navTabs.children().each(function(index,element){
		width += element.clientWidth;
	});
	$navTabs.css({'width':width});

	
});