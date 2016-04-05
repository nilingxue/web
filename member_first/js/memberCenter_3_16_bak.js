$(document).ready(function() {
    $.post('/member/h5/info', function(data) {
	    console.log(data)
	    if(data.sc=="0"){
	    	$(".nameInfo").html(data.data.realname);
	        $(".classInfo strong").html(data.data.memberGradeDesc);
	        $(".integrationLeft span").html(data.data.upgradeCondition);
	        $(".cardInfo").html(data.data.memberCode);
	        $(".integrationRightTop strong").html(data.data.points);
	        $(".integrationRightBottom strong").html(data.data.nightsNeedUpgrade); 
	        if(data.data.memberGrade=="0"){
	        	$(".memberInfo p").css('color', '#473618');
	        } 
	        else if(data.data.memberGrade=="2"){
	        	$(".memberInfo p").css('color', '#ffda7f');
	        }
	        $(".memberInfo").css({
	        	"background":  "url("+data.data.backGroundImg+") center center no-repeat",
                "-webkit-background-size": "contain",
                "background-size": "contain"
	        });
	    }
	})
	var data={"pagecnt":"3","pageno":"1"}
	$.post('/member/h5/points/list',{data: JSON.stringify(data)}, function(data) {
	    console.log(data)
	    if(data.sc=="0"){
	    	for(a=0;a<data.data.length;a++){
	    		$(".integrationSystem ul").append('<li><span>'+data.data[a].pointsChange+'</span><strong>'+data.data[a].pointsChangeDesc+'</strong></li>')
	    		if(data.data[a].recordType=="0"){
	        		$(".integrationSystem ul li").eq(a).children('span').css('color', '#d13f4c');
	        	}
	    	}
	    }
	})
	if(id!=""&&id!="无此参数"){
		$(".saoOpen").css('display', 'block');
		data={"id":id}
		$.post('/content/client/hotel/detail',{data: JSON.stringify(data)}, function(data) {
	    console.log(data)
	    if(data.sc=="0"){
	    	$(".exchangeWrapCenterTop").html(data.data.hotelBaseInfo.hotelCname);
	    	$(".exchangeWrapLeft").attr("src",data.data.productBaseInfo.imgList[0]);
	    	$(".saoOpen .exchangeWrapCenterTop").click(function(event) {
				if(data.data.hotelBaseInfo.type=="1"){
					window.location="/h5/bnbShare.html?id="+id
				}
				else{
					window.location="/h5/hotelShare.html?id="+id
				}
				
			});
			$(".saoOpen .exchangeWrapLeft").click(function(event) {
				if(data.data.hotelBaseInfo.type=="1"){
					window.location="/h5/bnbShare.html?id="+id
				}
				else{
					window.location="/h5/hotelShare.html?id="+id
				}
				
			});
			$(".saoOpen .iconfont1").click(function(event) {
				if(data.data.hotelBaseInfo.type=="1"){
					window.location="/h5/bnbShare.html?id="+id
				}
				else{
					window.location="/h5/hotelShare.html?id="+id
				}
				
			});
	    }
	})
	$(".saoOpen .exchangeWrapCenterBottom").click(function(event) {
		window.location="/html/member/consume.html?member_hotelid="+id
	});

	}

	
});