var url="/search/h5search"
var add=decodeURIComponent(tags)
var string=add
var search = string.split(",");
var data={"tags":search}
$.post(url, {data:JSON.stringify(data)}, function(result) {
	// console.debug(result)
	if(result.data.searchList==undefined){
		//recommend appl里最多显示5条推荐
		$(".recommendWrap").removeClass('no').children('.noFind').children('span').html(add);
		/*$.each(result.data.recommendList,function(i){

		}) */

	}
	else{
		//search app里是5条以内是搜索几条加上推荐总共5条，5条以上就不要推荐
		//resType=1为酒店，2为优惠
		$.each(result.data.searchList,function(i){
			$(".searchwrap").removeClass('no').append('<div class="wrap"><div class="pic"><div class="picImg"><img src="'+result.data.searchList[i].imageLink+'" alt=""></div><div class="priceWrap"><span class="plusPrice no">几何PLUS价<em>￥<strong>1200</strong>/2晚</em></span><span class="price"></span><span class="noPlus no"><em>几何PLUS用户</em>享受更低价</span></div><div class="icon"><img src="'+result.data.searchList[i].object.brandIcon+'" alt=""></div></div><div class="promotion no"><div class="promotionLeft"><div class="promotionLeftCon"><span>优惠</span><i></i></div></div><div class="promotionRight"><span class="time">'+result.data.searchList[i].object.statusInfo+'</span></div></div><div class="title">'+result.data.searchList[i].title+'</div><div class="tag no"></div><div class="desc no"></div></div> ');
		}) 
		for(var a=0; a<result.data.searchList.length;a++){
			if(result.data.searchList[a].resType==2){
				$(".wrap").eq(a).children('.promotion').removeClass('no');
				if(result.data.searchList[a].object.gradeLevel==1){
					$(".wrap").eq(a).children('.promotion').children('.promotionLeft').children('.promotionLeftCon').children('i').addClass('huasuan');
				}
				else if(result.data.searchList[a].object.gradeLevel==2){
					$(".wrap").eq(a).children('.promotion').children('.promotionLeft').children('.promotionLeftCon').children('i').addClass('chaozhi');
				}
				else{
					$(".wrap").eq(a).children('.promotion').children('.promotionLeft').children('.promotionLeftCon').children('i').addClass('zhenhan');
				}
				if(result.data.searchList[a].object.promPriceDays==1){
					$(".wrap").eq(a).children('.pic').children('.priceWrap').children('.price').append('￥<strong>'+result.data.searchList[a].price+'</strong>');
				}
				else{
					$(".wrap").eq(a).children('.pic').children('.priceWrap').children('.price').append('￥<strong>'+result.data.searchList[a].price+'</strong>/'+result.data.searchList[a].object.promPriceDays+result.data.searchList[a].object.priceUnit)
				}
				if(result.data.searchList[a].object.status!=1){
					$(".wrap").eq(a).children('.promotion').children('.promotionRight').children('.time').css('background', 'none');
				}
				if(result.data.searchList[a].object.statusInfo==undefined){
					$(".wrap").eq(a).children('.promotion').children('.promotionRight').children('.time').css('display', 'none');
				}
				//会员价还没弄
				
			}
			else if(result.data.searchList[a].resType==1){
				$(".wrap").eq(a).children('.pic').children('.priceWrap').children('.price').append('￥<strong>'+result.data.searchList[a].price+'</strong>');
				//直接展示一句话
				//有民宿和酒店
				if(result.data.searchList[a].sellerType==1){
					$(".wrap").eq(a).children('.tag').removeClass('no');
					
				}
				else{
					$(".wrap").eq(a).children('.desc').removeClass('no').html(result.data.searchList[a].object.brief);
				}
			}
			for(var b=0; b<result.data.searchList[a].tags.length;b++){
				if(result.data.searchList[a].tags[b]!="其他"&&result.data.searchList[a].tags[b]!="民宿"){
                    $(".wrap").eq(a).children('.tag').append('<span>'+result.data.searchList[a].tags[b]+'</span>')
                }
				// $(".wrap").eq(a).children('.tag').append('<span>'+result.data.searchList[a].tags[b]+'</span>')
			}
		}
		$(".picImg ").click(function(event) {
			var ee=$(this).parent('.pic').parent('.wrap').index()
			window.location=result.data.searchList[ee].object.wxDetailLink
		});
		// $(".icon").click(function(event) {
		// 	var dd=$(this).parent('.pic').parent('.wrap').index();
		// 	if(result.data.searchList[dd].object.type!=undefined){
		// 		window.location=result.data.searchList[dd].object.brandLink
		// 	}
			
		// });
		
	}
});
c=1
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  var scrollHeight = $(document).height();
  var windowHeight = $(this).height(); 
  if(scrollTop + windowHeight == scrollHeight) {
    c++;
    var paramPage = {"tags":search,"pagecnt":"5","pageno":c};
    $.post(url,
     {
       data: JSON.stringify(paramPage)
      },
    function (result) {
        console.debug(result);
       if(result.data.searchList==undefined){
       		$(".load").html("已经加载完")
        	return;
       }
       else{
        	$.each(result.data.searchList,function(i){
			$(".searchwrap").removeClass('no').append('<div class="wrap"><div class="pic"><div class="picImg"><img src="'+result.data.searchList[i].imageLink+'" alt=""></div><div class="priceWrap"><span class="plusPrice no">几何PLUS价<em>￥<strong>1200</strong>/2晚</em></span><span class="price"></span><span class="noPlus no"><em>几何PLUS用户</em>享受更低价</span></div><div class="icon"><img src="'+result.data.searchList[i].object.brandIcon+'" alt=""></div></div><div class="promotion no"><div class="promotionLeft"><div class="promotionLeftCon"><span>优惠</span><i></i></div></div><div class="promotionRight"><span class="time">'+result.data.searchList[i].object.statusInfo+'</span></div></div><div class="title">'+result.data.searchList[i].title+'</div><div class="tag no"></div><div class="desc no"></div></div> ');
		}) 
		var d = c - 1;
		for(var a=0; a<result.data.searchList.length;a++){
			if(result.data.searchList[a].resType==2){
				$(".wrap").eq(a+d*5).children('.promotion').removeClass('no');
				if(result.data.searchList[a].object.gradeLevel==1){
					$(".wrap").eq(a+d*5).children('.promotion').children('.promotionLeft').children('.promotionLeftCon').children('i').addClass('huasuan');
				}
				else if(result.data.searchList[a].object.gradeLevel==2){
					$(".wrap").eq(a+d*5).children('.promotion').children('.promotionLeft').children('.promotionLeftCon').children('i').addClass('chaozhi');
				}
				else{
					$(".wrap").eq(a+d*5).children('.promotion').children('.promotionLeft').children('.promotionLeftCon').children('i').addClass('zhenhan');
				}
				if(result.data.searchList[a].object.promPriceDays==1){
					$(".wrap").eq(a+d*5).children('.pic').children('.priceWrap').children('.price').append('￥<strong>'+result.data.searchList[a].price+'</strong>');
				}
				else{
					$(".wrap").eq(a+d*5).children('.pic').children('.priceWrap').children('.price').append('￥<strong>'+result.data.searchList[a].price+'</strong>/'+result.data.searchList[a].object.promPriceDays+result.data.searchList[a].object.priceUnit)
				}
				if(result.data.searchList[a].object.status!=1){
					$(".wrap").eq(a+d*5).children('.promotion').children('.promotionRight').children('.time').css('background', 'none');
				}
				if(result.data.searchList[a].object.statusInfo==undefined){
					$(".wrap").eq(a+d*5).children('.promotion').children('.promotionRight').children('.time').css('display', 'none');
				}
				//会员价还没弄
				
			}
			else if(result.data.searchList[a].resType==1){
				//有民宿和酒店
				$(".wrap").eq(a+d*5).children('.pic').children('.priceWrap').children('.price').append('￥<strong>'+result.data.searchList[a].price+'</strong>');
				//直接展示一句话
				if(result.data.searchList[a].sellerType==1){
					$(".wrap").eq(a+d*5).children('.tag').removeClass('no');
					
				}
				else{
					$(".wrap").eq(a+d*5).children('.desc').removeClass('no').html(result.data.searchList[a].object.brief);
				}
			}
			for(var b=0; b<result.data.searchList[a].tags.length;b++){
				if(result.data.searchList[a].tags[b]!="其他"&&result.data.searchList[a].tags[b]!="民宿"){
                    $(".wrap").eq(a+d*5).children('.tag').append('<span>'+result.data.searchList[a].tags[b]+'</span>')
                }
				// $(".wrap").eq(a+d*5).children('.tag').append('<span>'+result.data.searchList[a].tags[b]+'</span>')
			}
		}
		$(".picImg").click(function(event) {
			var ee=$(this).parent('.pic').parent('.wrap').index()
			window.location=result.data.searchList[ee-d*5].object.wxDetailLink
		});
		// $(".icon").click(function(event) {
		// 	var dd=$(this).parent('.pic').parent('.wrap').index();
		// 	if(dd-d*5>0){
		// 		if(result.data.searchList[dd-d*5].object.type==undefined){
		// 			return;

				
		// 		}
		// 		else{
		// 			window.location=result.data.searchList[dd-d*5].object.brandLink
		// 		}
		// 	}
			
		// 	// window.location=result.data.searchList[dd-d*5].object.brandLink
		// });
       }
        
      
	})
   }
})