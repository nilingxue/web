$(document).ready(function() {
	// var hh=decodeURIComponent(obj);
	// var h=JSON.parse(hh);
   $.post('/bms/h5/business/is_login.json',  function(data) {
        console.log(data)
        if(data.sc==0){
            $(".BMSRightTopLeft h1").html(data.data.hotelName+"会员管理中心");
            $(".BMSRightTopLeftZhanghaoName i").html(data.data.account);
        }
        else{
            window.location="/html/bms/BMSLogin.html"
        }
   })
	$(".maskClose").click(function(event) {
		$(this).parent().parent().parent().css('display', 'none');
	});
     $(".BMSLeft ul li").click(function(event) {
        $(this).addClass('current').siblings('').removeClass('current');
        var el=$(this).index();
        if(el==1){
           $(".BMSRightBottom").attr('src', '/html/bms/integralPayment.html?member_hotelid=5');
        }
        else if(el==0){
           $(".BMSRightBottom").attr('src', '/html/bms/BMSRecord.html?member_hotelid=5');
        }
        else if(el==3){
           $(".BMSRightBottom").attr('src', '/html/bms/managementCenter.html?member_hotelid=5');
        }
        else if(el==2){
           $(".BMSRightBottom").attr('src', '/html/bms/mentoringProgram.html?member_hotelid=5');
        }
        // $(".BMSRightBottom").attr('src', '/html/bms/integralPayment.html?member_hotelid=5');
    });
	
	//登录
	$(".BMSWrap").css('height', $(window).height());
	$(".mask").css('height', $(window).height());
    $(".BMSRightBottom").css('width', $(window).width()-130);
    $(".BMSRightBottom").css('height', $(window).height()-90);
	$(".BMSRightTopLeftZhanghao").hover(function() {
		$(".BMSRightTopLeftZhanghaoName").addClass('BMSRightTopLeftZhanghaoNameCurrent');
		$(".BMSRightTopLeftZhanghaoKan").css('display', 'block');
	}, function() {
		$(".BMSRightTopLeftZhanghaoName").removeClass('BMSRightTopLeftZhanghaoNameCurrent');
		$(".BMSRightTopLeftZhanghaoKan").css('display', 'none');
	});
	$(".BMSRightTopLeftZhanghaoKan li").eq(0).click(function(event) {
		$.post('/bms/h5/business/logout.json', function(data) {
            // console.log(data)
            window.location="/html/bms/BMSLogin.html"
        }) 
	});
    $(".BMSRightBottom").attr('src', '/html/bms/BMSRecord.html?member_hotelid=5');



    //失去焦点
    $(".BMSRightTopRight input").blur(function (event) {
        if (!$(this).val().match(/^[1][3,4,5,7,8][0-9]{9}$/)) {
            $(this).val("");
            return; 
        }
        else{
            $(".BMSRightTopRight i").click(function(event) {
                $(".BMSRightBottom").attr('src', '/html/bms/enquiry.html?member_hotelid='+$(".BMSRightTopRight input").val());
            });
        }
    })
    
	$(".BMSRightTopLeftZhanghaoKan li").eq(1).click(function(event) {
		$(".mask").css('display', 'block');
	});
	  //失去焦点
	$(".dl1 dd input").blur(function (event) {
    	if ($(this).val() != "") {
    		var data={"oldPassword":$(this).val()}
    	   $.post('/bms/h5/business/edit-password.json', {data: JSON.stringify(data)},  function(data) {
            	// console.log(data)
            	if(data.sc=="0"){
            		$(".mask .dl1 .errTip1").css('display', 'none').removeAttr('id');
            		$(".mask .dl1 input").css('border', '1px solid #bfbfbf');
            	}
            	else{
            		$(".mask .dl1 .errTip1").css('display', 'block').attr('id', 'errCur');;
            		$(".mask .dl1 input").css('border', '1px solid #fe4f40');
            	}

            	
        	})  
    	   
    	}
	
	});
	$(".dl3 dd input").blur(function (event) {
    	if ($(this).val() != $(".dl2 dd input").val()) {
    		$(".mask .dl3 .errTip2").css('display', 'block');
            $(".mask .dl3 input").css('border', '1px solid #fe4f40');
    	   
    	}
    	else {
    		$(".mask .dl3 .errTip2").css('display', 'none');
    		$(".mask .dl3 input").css('border', '1px solid #bfbfbf');
    	}
	
	});
	$(".xiugaimimaBtn").click(function(event) {
		if ($(".dl3 dd input").val() != $(".dl2 dd input").val()) {
    		$(".mask .dl3 .errTip2").css('display', 'block');
            $(".mask .dl3 input").css('border', '1px solid #fe4f40'); 
            return;    	   
    	}
    	else if($(".dl1 dd span").attr("id")=="errCur"){
    		return; 
    	}
    	else {
    	   var data={"oldPassword":$(".dl1 dd input").val(),"newPassword":$(".dl3 dd input").val()}
    	   $.post('/bms/h5/business/edit-password.json', {data: JSON.stringify(data)},  function(data) {
            	// console.log(data)
            	if(data.sc=="0"){
            		window.location="/html/bms/BMSLogin.html"
            	}
            	else{
            		alert("网络错误")
            	}
            	
        	})  
    	}
	});
	//


});