/*var DateUtil = require('./common/utils/dateUtil.js');
var List = require('./modules/list.js');
var Detail = require('./modules/detail.js');
var $ = require('./common/libs/jquery.js');

// console.log($);

$.post('/api/skill', {}, function (text, status) {
	var html  ="<ul>";
	for( var i = 0 ; i< text.length ;i++){
		html += "<li>" + text[i].name + "</li>";
	}
	html +="</ul>";

	$('#list').html(html);
 });

*/

// console.log(List('222'));
// console.log(Detail);
// 
// var detailInstance = new Detail();


// console.log(detailInstance);

// console.log(detailInstance.say('33333333333'))



// console.log("main js");

// console.log(dateUtil.getDate());











//js的入口文件
//引入zepto
var $=require('./components/zepto-modules/_custom');
//引入swiper
var Swiper=require('./components/swiper/swiper-3.3.1.min.js');
//引入iscroll
var IScroll=require('./components/iscroll/iscroll.js');

$('.swiper-container').show();
$('#mainContent').hide();

$('#enter').tap(function(){
	/*console.log('tap')*/
	$('.swiper-container').hide();
	$('#mainContent').show();

	//需要进行post请求
	$.post('/api/skill',{},function(response){
		/*console.log(response);*/
		var html="";
		for(var i=0;i<response.length;i++){
			html+="<li>"+response[i].name+"<li>";
		}
		$('#scroller ul').html(html);
	})
	//调用

	myScroll=new IScroll('#wrapper',{mouseWheel:true});
	document.addEventListener('touchmove',function(e){e.preventDefault();},false);
})


//引入swiper animate
var SwiperAnimate=require('./components/swiper/swiper.animate1.0.2.min.js');
var mySwiper = new Swiper ('.swiper-container', {
	   effect: 'flip',//特效名称，直接复制swiper里面的
	  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
	   	 SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画 SwiperAnimate官方网站上没有这个对象（必须写上）
	  }, 
	  	onSlideChangeEnd: function(swiper){ 
	     SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
  })       
$("#footer div").tap(function(){
	var apiTarget=$(this).attr('id');
	$.post('/api/'+apiTarget,{},function(response){
		var html="";
		for(var i=0;i<response.length;i++){
			html+="<li>"+response[i].category+"</li>";

		}
		$("#scroller ul").html(html);
		//调用IScroll
		myScroll=new IScroll('#wrapper',{mouseWheel:true});
		document.addEventListener('touchmove',function(e){e.preventDefault();},false);

	})
})

var interval=setInterval(function(){
	if(document.readyState==='complete'){
		clearInterval(interval);
		$('#preload').hide();
		$('.swiper-container').show();
		mySwiper.updateContainerSize();
		mySwiper.updateSlidesSize();
	}else{
		$('$preload'.show);
	}
})



























