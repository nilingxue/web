$(document).ready(function() {
	var data={"pagecnt":"15","pageno":"1"}
	$.post('/content/h5/hotel/pointsconsume',{data: JSON.stringify(data)}, function(data) {
	    console.log(data)
	    if(data.sc=="0"){
	    	for (var i = 0; i <data.data.length; i++) {
	    		var dd;
	    		if(data.data[i].roomPriceList==undefined){
	    			var dd=0
	    		}
	    		else{
	    			var dd=data.data[i].roomPriceList.length
	    		}
	    		$(".exchangeListWrap1").append('<div class="exchangeListWrap"><div class="exchangeList"><img class="exchangeWrapLeft" src="'+data.data[i].imgList[0]+'" alt=""><div class="exchangeWrapCenter"><div class="exchangeWrapCenterTop">'+data.data[i].hotelCname+'<span>共'+dd+'个可兑换房型</span></div><div class="exchangeWrapCenterBottom">积分兑房/消费<i class="iconfont3">&#xe61d;</i></div></div><i class="iconfont1">&#xe601;</i></div><div class="exchangeListKan"><div class="exchangeListKanWrap1"><div class="exchangeListKanWrapLeft"><span>当前积分余额：6500</span></div><div class="exchangeListKanWrapRight"><a href="/html/member/consume.html?member_hotelid='+data.data[i].hotelId+'"><i>积分消费</i></a></div></div><div class="exchangeListKanWrapWrap"></div></div></div>');
	    		if(data.data[i].roomPriceList!=undefined){
	    			for (var a = 0; a <data.data[i].roomPriceList.length; a++) {
	    				$(".exchangeListWrap").eq(i).children('.exchangeListKan').children('.exchangeListKanWrapWrap').append('<div class="exchangeListKanWrap"><div class="exchangeListKanWrapLeft"><span>'+data.data[i].roomPriceList[a].roomName+'</span><strong>'+data.data[i].roomPriceList[a].currencyCode+parseInt(data.data[i].roomPriceList[a].price)+'起</strong></div><div class="exchangeListKanWrapRight"><a href="tel://15382302035"><i>'+data.data[i].roomPriceList[a].points+'积分起</i></a></div></div>')
	    			}
		    	}
	    	};

	    $(".exchangeList .exchangeWrapLeft").click(function(event) {
	    	var c=$(this).parent().parent().index()
			if(data.data[c].type==1){
				window.location="/h5/bnbShare.html?id="+data.data[c].hotelId
			}
			else{
				window.location="/h5/hotelShare.html?id="+data.data[c].hotelId
			}
	    });
	    $(".exchangeWrapCenterTop").click(function(event) {
	    	var c=$(this).parent().parent().index()
			if(data.data[c].type==1){
				window.location="/h5/bnbShare.html?id="+data.data[c].hotelId
			}
			else{
				window.location="/h5/hotelShare.html?id="+data.data[c].hotelId
			}
	    });
	    $(".iconfont1").click(function(event) {
	    	var c=$(this).parent().parent().index()
			if(data.data[c].type==1){
				window.location="/h5/bnbShare.html?id="+data.data[c].hotelId
			}
			else{
				window.location="/h5/hotelShare.html?id="+data.data[c].hotelId
			}
	    });
	    $(".exchangeWrapCenterBottom").toggle(function() {
			// alert("aaa")
			$(this).children().html("&#xe61e;").addClass('iconfont2').removeClass('iconfont3');
			$(this).parent().parent().css('border-bottom', '0');
			$(this).parent().parent().siblings('.exchangeListKan').css('display', 'block');
		}, function() {
			$(this).children().html("&#xe61d;").removeClass('iconfont2').addClass('iconfont3');
			$(this).parent().parent().css('border-bottom', '1px solid #d5d4d9');
			$(this).parent().parent().siblings('.exchangeListKan').css('display', 'none');
		});
		// $.post('/member/h5/info', function(data) {
		//     console.log(data)
		//     if(data.sc=="0"){
		//         $(".exchangeListKanWrap1 .exchangeListKanWrapLeft span").html("当前积分余额："+data.data.points);
		        
		//     }
		// })



	    	
	    }
	})
	    
			var b=1;
			
			$(window).scroll(function(){
    		    var scrollTop = $(this).scrollTop();
    		    var scrollHeight = $(document).height();
    		    var windowHeight = $(this).height();
    		    if(scrollTop + windowHeight == scrollHeight) {
    		    	b++;
    		    	var ain=$(".exchangeListWrap").eq(0).children('.exchangeListKan').children('.exchangeListKanWrap1').children('.exchangeListKanWrapLeft').children('span').html()
					 	var data1={"pagecnt":"15","pageno":b}
					 	$.post('/content/h5/hotel/pointsconsume',{data: JSON.stringify(data1)}, function(data) {
			// 			    console.log(data)
						    if(data.sc=="0"){
						    	if(data.data.length==0){
						    		$(".load").html("已经加载完");
						    		return;
						    	}
						    	else{


	    						for (var i = 0; i <data.data.length; i++) {
	    								var dd;
	    								if(data.data[i].roomPriceList==undefined){
	    									var dd=0
	    								}
	    								else{
	    									var dd=data.data[i].roomPriceList.length
	    								}
	    							$(".exchangeListWrap1").append('<div class="exchangeListWrap"><div class="exchangeList"><img class="exchangeWrapLeft" src="'+data.data[i].imgList[0]+'" alt=""><div class="exchangeWrapCenter"><div class="exchangeWrapCenterTop">'+data.data[i].hotelCname+'<span>共'+dd+'个可兑换房型</span></div><div class="exchangeWrapCenterBottom">积分兑房/消费<i class="iconfont3">&#xe61d;</i></div></div><i class="iconfont1">&#xe601;</i></div><div class="exchangeListKan"><div class="exchangeListKanWrap1"><div class="exchangeListKanWrapLeft"><span>'+ain+'</span></div><div class="exchangeListKanWrapRight"><a href="/html/member/consume.html?member_hotelid='+data.data[i].hotelId+'"><i>积分消费</i></a></div></div><div class="exchangeListKanWrapWrap"></div></div></div>');
	    							if(data.data[i].roomPriceList!=undefined){
	    								for (var a = 0; a <data.data[i].roomPriceList.length; a++) {
	    								$(".exchangeListKanWrapWrap").append('<div class="exchangeListKanWrap"><div class="exchangeListKanWrapLeft"><span>'+data.data[i].roomPriceList[a].roomName+'</span><strong>'+data.data[i].roomPriceList[a].currencyCode+parseInt(data.data[i].roomPriceList[a].price)+'起</strong></div><div class="exchangeListKanWrapRight"><a href="tel://15382302035"><i>'+data.data[i].roomPriceList[a].points+'积分起</i></a></div></div>')
	    							};
	    							}
	    							
	    						};
	    						}
	    						
	    					}
	    					 $(".exchangeList .exchangeWrapLeft").click(function(event) {
							 	var c=$(this).parent().parent().index()
								if(data.data[c-15*b].type==1){
									window.location="/h5/bnbShare.html?id="+data.data[c-15*b].hotelId
								}
								else{
									window.location="/h5/hotelShare.html?id="+data.data[c-15*b].hotelId
								}
							 });
							 $(".exchangeWrapCenterTop").click(function(event) {
							 	var c=$(this).parent().parent().index()
								if(data.data[c-15*b].type==1){
									window.location="/h5/bnbShare.html?id="+data.data[c-15*b].hotelId
								}
								else{
									window.location="/h5/hotelShare.html?id="+data.data[c-15*b].hotelId
								}
							 });
							 $(".iconfont1").click(function(event) {
							 	var c=$(this).parent().parent().index()
								if(data.data[c-15*b].type==1){
									window.location="/h5/bnbShare.html?id="+data.data[c-15*b].hotelId
								}
								else{
									window.location="/h5/hotelShare.html?id="+data.data[c-15*b].hotelId
								}
							 });
	    	
							$(".exchangeWrapCenterBottom").toggle(function() {
								// alert("aaa")
								$(this).children().html("&#xe61e;").addClass('iconfont2').removeClass('iconfont3');
								$(this).parent().parent().css('border-bottom', '0');
								$(this).parent().parent().siblings('.exchangeListKan').css('display', 'block');
							}, function() {
								$(this).children().html("&#xe61d;").removeClass('iconfont2').addClass('iconfont3');
								$(this).parent().parent().css('border-bottom', '1px solid #d5d4d9');
								$(this).parent().parent().siblings('.exchangeListKan').css('display', 'none');
							});

						})
}

})
setTimeout(function() {
    $.post('/member/h5/info', function(data) {
	    console.log(data)
	    if(data.sc=="0"){
	        $(".exchangeListKanWrap1 .exchangeListKanWrapLeft span").html("当前积分余额："+data.data.points);
	        
	    }
	})
 },2000)

	
   //  		    	}
    		    	
   //  		    // }
   //  		})





	

		



	})



