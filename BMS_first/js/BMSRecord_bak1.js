var aa=0
$(document).ready(function() {
	// alert(id)
	$("#J_DepDate").val(formatStrDate(new Date()))
    $("#J_EndDate").val(formatStrDate(new Date()))
	$(".recordWrapRight span").eq(0).click(function(event) {
		$(".mask").css('display', 'block').attr('id', 'ruZhu');
		$(".mask1").removeAttr('id');
		$(".alertRight").css('display', 'none');
		$(".mask .alert").css('width', '40%');
	});
	$(".recordWrapRight span").eq(1).click(function(event) {
		$(".mask").css('display', 'block').attr('id', 'liZhu');
		$(".mask1").removeAttr('id');
		$(".alertRight").css('display', 'none');
		$(".mask .alert").css('width', '40%');
	});
	$(".recordWrapRight span").eq(2).click(function(event) {
		$(".mask1").css('display', 'block').attr('id', 'feiruZhu');
		$(".mask").removeAttr('id');
		$(".alertRight").css('display', 'none');
		$(".mask1 .alert").css('width', '40%');
	});
	$(".recordWrap").css('width', $(window).width()-40);
	$(".recordTable").css('width', $(window).width()-40)
	$(".mask1").css('height', $(window).height());
	$(".mask2").css('height', $(window).height());
	$(".mask3").css('height', $(window).height());
	$(".mask4").css('height', $(window).height());
	// $(".recordWrap").css('height', $(window).height()-90);
	$(".maskClose").click(function(event) {
		$(this).parent().parent().parent().css('display', 'none');
	});
	$(".mask2Btn").children('span').eq(1).click(function(event) {
			$(this).parent().parent().parent().css('display', 'none');
	});

	//time失焦
	// $(".mask #J_DepDate1").blur(function (event) {
	// 	if($(this).val()==""){
	// 		$(this).css('border', '1px solid #fe4f40');
	// 		$(".errTip2").css('display', 'block');
	// 		// $(".mask dl").css('height', '60px');
	// 	}
	// 	else{
	// 		$(this).css('border', '1px solid #bfbfbf');
	// 		$(".errTip2").css('display', 'none');
	// 		// $(".mask dl").css('height', '44px');
	// 	}
		
	// })
	// $(".mask #J_EndDate1").blur(function (event) {
	// 	if($(this).val()==""){
	// 		$(this).css('border', '1px solid #fe4f40');
	// 		$(".errTip3").css('display', 'block');
	// 	}
	// 	else{
	// 		$(this).css('border', '1px solid #bfbfbf');
	// 		$(".errTip3").css('display', 'none');
	// 	}
		
	// })
	$(".roomNights").blur(function (event) {
		if($(this).val()==""){
			$(this).css('border', '1px solid #fe4f40');
			$(".errTip4").css('display', 'block');
			// $(".mask dl").css('height', '60px');
		}
		else{
			$(this).css('border', '1px solid #bfbfbf');
			$(".errTip4").css('display', 'none');
			// $(".mask dl").css('height', '44px');
		}
		
	})
	$(".amount").blur(function (event) {
		if($(this).val()==""){
			$(this).css('border', '1px solid #fe4f40');
			$(".errTip5").css('display', 'block');
			// $(".mask dl").css('height', '60px');
		}
		else{
			$(this).css('border', '1px solid #bfbfbf');
			$(".errTip5").css('display', 'none');
			// $(".mask dl").css('height', '44px');
		}
		
	})

	//失去焦点
	$(".alertLeft .dl1 dd input").blur(function (event) {
	    if (!$(this).val().match(/^[1][3,4,5,7,8][0-9]{9}$/)) {
	    	$(this).val("").css('border', '1px solid #fe4f40');
	    	$(this).siblings('span').html("请输入正确的手机号").css('display', 'block');
	        return; 
	    }
	    else{
	    	$(this).css('border', '1px solid #bfbfbf');
	    	var data={"accountname":$(this).val()}
				// console.log(JSON.stringify(data))
				$.post('/user/bmsh5/infobyaccount', {data: JSON.stringify(data)}, function(data) {
        		    console.log(data)
        		    if(data.sc=="0"){
        		       	$(".alertRight .memberName dd").html(data.data.realname);
        		       	$(".alertRight .memberClass dd").html(data.data.memberInfo.memberGradeDesc+"会员");
        		       	if(data.data.memberInfo.equityInfo.memberGrade=="0"){
        		       		$(".memberEq dd").html('1.'+data.data.memberInfo.equityInfo.welcomeGiftDesc+'<br/>2、积分返利')
        		       	}
        		       	else if(data.data.memberInfo.equityInfo.memberGrade=="1"){
        		       		$(".memberEq dd").html('1.'+data.data.memberInfo.equityInfo.welcomeGiftDesc+'<br/>2、订房-优先候补 <br/>3、住二送一（以积分形式赠送），一年一次 ')
        		       	}
        		       	else if(data.data.memberInfo.equityInfo.memberGrade=="2"){
        		       		$(".memberEq dd").html('1.'+data.data.memberInfo.equityInfo.welcomeGiftDesc+'<br/>2、订房-优先候补 <br/>3、升房-房型任选<br/> 4、住一送一（以积分形式赠送），一年一次 ')
        		       	}
        		       	// $(".alertRight .memberEq dd").html(data.data.memberInfo.equtyInfo)
        		    	if($(".mask").attr("id")=="ruZhu"){
        		    		$(".alertRight").css('display', 'block');
        		    		$(".errTip1").css('display', 'none');
        		    		$("#ruZhu .alert").css('width', '60%');
        		       		$("#ruZhu .xiugaimimaBtn").click(function(event) {
        		       			if($("#ruZhu #J_DepDate1").val()!=""&&$("#ruZhu #J_EndDate1").val()!=""&&$("#ruZhu .amount").val()!=""&&$(".roomNights").val()!=""){
        		       				var timestamp1 = Date.parse(new Date($("#ruZhu #J_DepDate1").val()));
        		       				var timestamp2 = Date.parse(new Date($("#ruZhu #J_EndDate1").val()));
        		       				var data1={"userid":data.data.uid,"checkin":timestamp1,"checkout":timestamp2,"amount":parseInt($("#ruZhu .amount").val())*100,"roomNights":parseInt($("#ruZhu .roomNights").val())}
        		       				console.log(JSON.stringify(data1))
        		       				$.post('/member/bms/points/roomreward/add', {data: JSON.stringify(data1)}, function(result) {
        		    					console.log(result)
        		    					if(result.sc=="0"){
        		     						$(".mask").css('display', 'none');
        		     						aa++;
											var a=aa-1
											var searchTimestamp1= Date.parse(new Date($("#ruZhu .recordWrapLeft #J_DepDate").val()));
    										// var searchTimestamp2 = Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()));
    										var searchTimestamp2 =Date.parse(new Date($("#ruZhu .recordWrapLeft #J_EndDate").val()))+1000*60*24*60
    										var data2={"starttime":searchTimestamp1,"endtime":searchTimestamp2}
    										 $.post('/member/bms/points/reward/list', {data: JSON.stringify(data2)}, function(result) {
    											console.log(result)
    											if(result.sc=="0"){
    												for (var i = 0; i<result.data.result.length; i++) {
    													//var checkin=getLocalTime(result.data.result[i].checkin);
    													var checkin=formatStrDate( new Date(parseInt(result.data.result[i].checkin)))
    													/*alert(checkin)*/
    													var checkout=formatStrDate( new Date(parseInt(result.data.result[i].checkout)))
    													$('.hovertable').append('<tr class="'+aa+'"><td>住宿</td><td>'+result.data.result[i].realName+'</td><td>'+result.data.result[i].memberGradeDesc+'</td><td>'+result.data.result[i].mobile+'</td><td>'+checkin+'</td><td class="checkout">'+checkout+'</td><td class="roomnights">'+result.data.result[i].roomnights+'</td><td>'+result.data.result[i].amount/100+'</td><td><span>修改</span><span>删除</span><span>操作记录</span></td><td><strong>提交</strong></td><td class="delId" style="display:none">'+result.data.result[i].id+'</td><td class="pointstype" style="display:none">'+result.data.result[i].pointsType+'</td><td class="uid" style="display:none">'+result.data.result[i].uid+'</td></tr>')
    													//status 0是待提交 1是已提交系统未确认 2是已提交系统已确认
    													if(result.data.result[i].status!=0){
    														$('.'+aa).eq(i).children('td').children('strong').css('display', 'none');
    														if(result.data.result[i].status==1){
    															$('.'+aa).eq(i).children('td').children('span').hover(function() {
    																$(this).css({
    																	'text-decoration': 'underline',
    																	'color': '#d13f4c'
    																});
    															}, function() {
    																$(this).css({
    																	'text-decoration': 'none',
    																	'color': '#333'
    																});
    															});
    														}
    													}
    													else{
    														$('.'+aa).eq(i).children('td').children('span').hover(function() {
    															$(this).css({
    																'text-decoration': 'underline',
    																'color': '#d13f4c'
    															});
    														}, function() {
    															$(this).css({
    																'text-decoration': 'none',
    																'color': '#333'
    															});
    														});
    													}
    													//pointsType 11住宿消费 12非住宿消费 13积分加速（统一处理，立即生效）14订单取消  15推荐奖励 16积分赠送（统一处理，立即生效） 21兑换房间 22兑换非住宿消费 23积分过期 99其他
    													if(result.data.result[i].pointsType==12){
    														$('.'+aa).eq(i).children('.roomnights').html("");
    														$('.'+aa).eq(i).children('.checkout').html("");
    														$('.'+aa).eq(i).children('td').eq(0).html("非住宿").css('background-color', '#e4e6e3');
    													}
    												};
    												
    											}	
    											
    											if(aa>a){
    												for (var i = 0; i <$('.'+a).length; i++) {
    													$('.'+a).css('display', 'none'); 
    												};
    												
    												
    											}
    										})
        		       						// var divObj= $('<tr><td>住宿</td><td>'+$(".memberName dd").html()+'</td><td>'+data.data.memberInfo.memberGradeDesc+'</td><td>'+data.data.mobileAccount.accountName+'</td><td>'+$("#ruZhu #J_DepDate1").val()+'</td><td class="checkout">'+$("#ruZhu #J_EndDate1").val()+'</td><td class="roomnights">'+$(".roomNights").val()+'</td><td>'+$("#ruZhu .amount").val()+'</td><td><span>修改</span><span>删除</span><span>操作记录</span></td><td><strong>提交</strong></td><td class="delId" style="display:none">'+result.data.id+'</td></tr>');

        		       						// $(".hovertableTitle").after(divObj);
        		    						$("#ruZhu #J_DepDate1").val("");
        		    						$("#ruZhu #J_EndDate1").val("");
        		    						$("#ruZhu .amount").val("");
        		    						$("#ruZhu .roomNights").val("");
        		    						$("#ruZhu .alertLeft .dl1 dd input").val("").css('border', '1px solid #bfbfbf');
        		    						$(".errTip1").css('display', 'none');

        		    					}
        							})
        		       			}
        		       			else{
        		       				alert("请填写完信息")
        		       			}

        		       			
        		       		});
        		    	}
        		    	else if($(".mask").attr("id")=="liZhu"){
        		    		$("#liZhu .alertRight").css('display', 'block');
        		    		$("#liZhu .alert").css('width', '60%');
        		    		var data1={"userid":data.data.uid}
        		    		$.post('/member/bms/points/roomreward/check', {data: JSON.stringify(data1)}, function(result) {
        		    				console.log(result)
        		    				if(result.sc=="0"){
        		    					if(result.data.hasUnconfirmed=="1"){
        		    						$("#liZhu .alertLeft dl").eq(0).children('dd').children('input').css('border', '1px solid #fe4f40');
        		    						$("#liZhu .errTip1").html("该会员有尚未确认的消费记录 ").css('display', 'block');
        		    					}
        		       					
        		    				}
        						})
        		    		$("#liZhu .xiugaimimaBtn").click(function(event) {
        		    			if($("#liZhu #J_DepDate1").val()!=""&&$("#liZhu #J_EndDate1").val()!=""&&$("#liZhu .amount").val()!=""&&$("#liZhu .roomNights").val()!=""){
        		       				var timestamp1 = Date.parse(new Date($("#liZhu #J_DepDate1").val()));
        		       				var timestamp2 = Date.parse(new Date($("#liZhu #J_EndDate1").val()));
        		       				var data1={"userid":data.data.uid,"isSubmit":"1","checkin":timestamp1,"checkout":timestamp2,"amount":parseInt($("#liZhu .amount").val())*100,"roomNights":parseInt($("#liZhu .roomNights").val())}
        		       				// console.log(JSON.stringify(data1))
        		       				$.post('/member/bms/points/roomreward/add', {data: JSON.stringify(data1)}, function(result) {
        		    					console.log(result)
        		    					if(result.sc=="0"){
        		       						$(".mask").css('display', 'none');
        		       						aa++;
											var a=aa-1
											var searchTimestamp1= Date.parse(new Date($("#liZhu .recordWrapLeft #J_DepDate").val()));
    										// var searchTimestamp2 = Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()));
    										var searchTimestamp2 =Date.parse(new Date($("#liZhu .recordWrapLeft #J_EndDate").val()))+1000*60*24*60
    										var data2={"starttime":searchTimestamp1,"endtime":searchTimestamp2}
    										 $.post('/member/bms/points/reward/list', {data: JSON.stringify(data2)}, function(result) {
    											console.log(result)
    											if(result.sc=="0"){
    												for (var i = 0; i<result.data.result.length; i++) {
    													//var checkin=getLocalTime(result.data.result[i].checkin);
    													var checkin=formatStrDate( new Date(parseInt(result.data.result[i].checkin)))
    													/*alert(checkin)*/
    													var checkout=formatStrDate( new Date(parseInt(result.data.result[i].checkout)))
    													$('.hovertable').append('<tr class="'+aa+'"><td>住宿</td><td>'+result.data.result[i].realName+'</td><td>'+result.data.result[i].memberGradeDesc+'</td><td>'+result.data.result[i].mobile+'</td><td>'+checkin+'</td><td class="checkout">'+checkout+'</td><td class="roomnights">'+result.data.result[i].roomnights+'</td><td>'+result.data.result[i].amount/100+'</td><td><span>修改</span><span>删除</span><span>操作记录</span></td><td><strong>提交</strong></td><td class="delId" style="display:none">'+result.data.result[i].id+'</td><td class="pointstype" style="display:none">'+result.data.result[i].pointsType+'</td><td class="uid" style="display:none">'+result.data.result[i].uid+'</td></tr>')
    													//status 0是待提交 1是已提交系统未确认 2是已提交系统已确认
    													if(result.data.result[i].status!=0){
    														$('.'+aa).eq(i).children('td').children('strong').css('display', 'none');
    														if(result.data.result[i].status==1){
    															$('.'+aa).eq(i).children('td').children('span').hover(function() {
    																$(this).css({
    																	'text-decoration': 'underline',
    																	'color': '#d13f4c'
    																});
    															}, function() {
    																$(this).css({
    																	'text-decoration': 'none',
    																	'color': '#333'
    																});
    															});
    														}
    													}
    													else{
    														$('.'+aa).eq(i).children('td').children('span').hover(function() {
    															$(this).css({
    																'text-decoration': 'underline',
    																'color': '#d13f4c'
    															});
    														}, function() {
    															$(this).css({
    																'text-decoration': 'none',
    																'color': '#333'
    															});
    														});
    													}
    													//pointsType 11住宿消费 12非住宿消费 13积分加速（统一处理，立即生效）14订单取消  15推荐奖励 16积分赠送（统一处理，立即生效） 21兑换房间 22兑换非住宿消费 23积分过期 99其他
    													if(result.data.result[i].pointsType==12){
    														$('.'+aa).eq(i).children('.roomnights').html("");
    														$('.'+aa).eq(i).children('.checkout').html("");
    														$('.'+aa).eq(i).children('td').eq(0).html("非住宿").css('background-color', '#e4e6e3');
    													}
    												};
    												
    											}	
    											
    											if(aa>a){
    												for (var i = 0; i <$('.'+a).length; i++) {
    													$('.'+a).css('display', 'none'); 
    												};
    												
    												
    											}
    										})
        		    						$("#liZhu #J_DepDate1").val("");
        		    						$("#liZhu #J_EndDate1").val("");
        		    						$("#liZhu .amount").val("");
        		    						$("#liZhu .roomNights").val("");
        		    						$("#liZhu .alertLeft .dl1 dd input").val("").css('border', '1px solid #bfbfbf');
        		    						$("#liZhu .errTip1").css('display', 'none');
        		    					}
        							})
        						}
        						else{
        							alert("请填写完信息")
        						}
        		       		});
        		    	}
        		    	else if($(".mask1").attr("id")=="feiruZhu"){
        		    		
        		    		$("#feiruZhu .alertRight").css('display', 'block');
        		    		$("#feiruZhu .alert").css('width', '60%');
        		    		$("#feiruZhu .errTip1").css('display', 'none');
        		    		$("#feiruZhu .xiugaimimaBtn").click(function(event) {
        		       			if($("#feiruZhu #J_DepDate1").val()!=""&&$("#feiruZhu .amount").val()!=""){
        		       				// alert("aa")
        		       				var timestamp1 = Date.parse(new Date($("#feiruZhu #J_DepDate1").val()));
        		       				var data1={"userid":data.data.uid,"checkin":timestamp1,"amount":parseInt($("#feiruZhu .amount").val())*100}
        		       				console.log(JSON.stringify(data1))
        		       				$.post('/member/bms/points/cashreward/add', {data: JSON.stringify(data1)}, function(result) {
        		    					console.log(result)
        		    					if(result.sc=="0"){
        		       						$(".mask1").css('display', 'none');
        		       						aa++;
											var a=aa-1
											var searchTimestamp1= Date.parse(new Date($("#feiruZhu .recordWrapLeft #J_DepDate").val()));
    										// var searchTimestamp2 = Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()));
    										var searchTimestamp2 =Date.parse(new Date($("#feiruZhu .recordWrapLeft #J_EndDate").val()))+1000*60*24*60
    										var data2={"starttime":searchTimestamp1,"endtime":searchTimestamp2}
    										 $.post('/member/bms/points/reward/list', {data: JSON.stringify(data2)}, function(result) {
    											console.log(result)
    											if(result.sc=="0"){
    												for (var i = 0; i<result.data.result.length; i++) {
    													//var checkin=getLocalTime(result.data.result[i].checkin);
    													var checkin=formatStrDate( new Date(parseInt(result.data.result[i].checkin)))
    													/*alert(checkin)*/
    													var checkout=formatStrDate( new Date(parseInt(result.data.result[i].checkout)))
    													$('.hovertable').append('<tr class="'+aa+'"><td>住宿</td><td>'+result.data.result[i].realName+'</td><td>'+result.data.result[i].memberGradeDesc+'</td><td>'+result.data.result[i].mobile+'</td><td>'+checkin+'</td><td class="checkout">'+checkout+'</td><td class="roomnights">'+result.data.result[i].roomnights+'</td><td>'+result.data.result[i].amount/100+'</td><td><span>修改</span><span>删除</span><span>操作记录</span></td><td><strong>提交</strong></td><td class="delId" style="display:none">'+result.data.result[i].id+'</td><td class="pointstype" style="display:none">'+result.data.result[i].pointsType+'</td><td class="uid" style="display:none">'+result.data.result[i].uid+'</td></tr>')
    													//status 0是待提交 1是已提交系统未确认 2是已提交系统已确认
    													if(result.data.result[i].status!=0){
    														$('.'+aa).eq(i).children('td').children('strong').css('display', 'none');
    														if(result.data.result[i].status==1){
    															$('.'+aa).eq(i).children('td').children('span').hover(function() {
    																$(this).css({
    																	'text-decoration': 'underline',
    																	'color': '#d13f4c'
    																});
    															}, function() {
    																$(this).css({
    																	'text-decoration': 'none',
    																	'color': '#333'
    																});
    															});
    														}
    													}
    													else{
    														$('.'+aa).eq(i).children('td').children('span').hover(function() {
    															$(this).css({
    																'text-decoration': 'underline',
    																'color': '#d13f4c'
    															});
    														}, function() {
    															$(this).css({
    																'text-decoration': 'none',
    																'color': '#333'
    															});
    														});
    													}
    													//pointsType 11住宿消费 12非住宿消费 13积分加速（统一处理，立即生效）14订单取消  15推荐奖励 16积分赠送（统一处理，立即生效） 21兑换房间 22兑换非住宿消费 23积分过期 99其他
    													if(result.data.result[i].pointsType==12){
    														$('.'+aa).eq(i).children('.roomnights').html("");
    														$('.'+aa).eq(i).children('.checkout').html("");
    														$('.'+aa).eq(i).children('td').eq(0).html("非住宿").css('background-color', '#e4e6e3');
    													}
    												};
    												
    											}	
    											
    											if(aa>a){
    												for (var i = 0; i <$('.'+a).length; i++) {
    													$('.'+a).css('display', 'none'); 
    												};
    												
    												
    											}
    										})
											$("#feiruZhu #J_DepDate1").val("");
        		    						$("#feiruZhu .amount").val("");
        		    						$("#feiruZhu .alertLeft .dl1 dd input").val("").css('border', '1px solid #bfbfbf');
        		    						// $(".errTip1").css('display', 'none');
        		    					}
        							})
        		       			}
        		       			else{
        		       				alert("请填写完信息")
        		       			}

        		       			
        		       		});

        		    	}
        		        
        		        
        		    }
        		    else if(data.sc=="USER-1014"){
        		    	$(".alertLeft dl").eq(0).children('dd').children('input').css('border', '1px solid #fe4f40');
        		    	$(".errTip1").html("该用户不是会员").css('display', 'block');
        		    	
        		    }
        		    else{
        		    	$(".alertLeft dl").eq(0).children('dd').children('input').css('border', '1px solid #fe4f40');
        		    	$(".errTip1").html("系统繁忙").css('display', 'block');
        		    	
        		    }
        		}) 

	    }
	});
	//时间失去焦点
	

	$("#J_EndDate").blur(function (event) {
		// c++;
		// $(this).attr('name', c);
		// alert($(this).attr('name'))
		// if($(this).attr('name')%2==0){
			aa++;
		var a=aa-1
		var searchTimestamp1= Date.parse(new Date($(".recordWrapLeft #J_DepDate").val()));
    	var searchTimestamp2 = Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()));
    	if(searchTimestamp1==searchTimestamp2){
    		var searchTimestamp2=Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()))+1000*60*60*24
    	}
    	var data={"starttime":searchTimestamp1,"endtime":searchTimestamp2}
    	 $.post('/member/bms/points/reward/list', {data: JSON.stringify(data)}, function(result) {
    		console.log(result)
    		if(result.sc=="0"){
    			$("#pageDir strong").html(result.data.totalPages)
    			fenye(result.data.totalPages)
    			
    			for (var i = 0; i<result.data.result.length; i++) {
    				//var checkin=getLocalTime(result.data.result[i].checkin);
    				var checkin=formatStrDate( new Date(parseInt(result.data.result[i].checkin)))
    				/*alert(checkin)*/
    				var checkout=formatStrDate( new Date(parseInt(result.data.result[i].checkout)))
    				$('.hovertable').append('<tr class="'+aa+'"><td>住宿</td><td>'+result.data.result[i].realName+'</td><td>'+result.data.result[i].memberGradeDesc+'</td><td>'+result.data.result[i].mobile+'</td><td>'+checkin+'</td><td class="checkout">'+checkout+'</td><td class="roomnights">'+result.data.result[i].roomnights+'</td><td>'+result.data.result[i].amount/100+'</td><td><span>修改</span><span>删除</span><span>操作记录</span></td><td><strong>提交</strong></td><td class="delId" style="display:none">'+result.data.result[i].id+'</td><td class="pointstype" style="display:none">'+result.data.result[i].pointsType+'</td><td class="uid" style="display:none">'+result.data.result[i].uid+'</td></tr>')
    				//status 0是待提交 1是已提交系统未确认 2是已提交系统已确认
    				if(result.data.result[i].status!=0){
    					$('.'+aa).eq(i).children('td').children('strong').css('display', 'none');
    					if(result.data.result[i].status==1){
    						$('.'+aa).eq(i).children('td').children('span').hover(function() {
    							$(this).css({
    								'text-decoration': 'underline',
    								'color': '#d13f4c'
    							});
    						}, function() {
    							$(this).css({
    								'text-decoration': 'none',
    								'color': '#333'
    							});
    						});
    					}
    				}
    				else{
    					$('.'+aa).eq(i).children('td').children('span').hover(function() {
    						$(this).css({
    							'text-decoration': 'underline',
    							'color': '#d13f4c'
    						});
    					}, function() {
    						$(this).css({
    							'text-decoration': 'none',
    							'color': '#333'
    						});
    					});
    				}
    				//pointsType 11住宿消费 12非住宿消费 13积分加速（统一处理，立即生效）14订单取消  15推荐奖励 16积分赠送（统一处理，立即生效） 21兑换房间 22兑换非住宿消费 23积分过期 99其他
    				if(result.data.result[i].pointsType==12){
    					$('.'+aa).eq(i).children('.roomnights').html("");
    					$('.'+aa).eq(i).children('.checkout').html("");
    					$('.'+aa).eq(i).children('td').eq(0).html("非住宿").css('background-color', '#e4e6e3');
    				}
    			};
    			
    		}	
    	})
    		
    		if(aa>a){
    			// alert($(".hovertable tr").eq(1).attr('class'))
    			
    			/*alert($(".hovertable tr").eq(1).attr('class'));*/
    			for (var i = 0; i <$('.'+a).length; i++) {
    				$('.'+a).css('display', 'none'); 
    			};
    			//$('.'+a).css('display', 'none !important'); 
    			
    			
    		}
		// }
		
    // })

	});
//直接进去搜索
	var searchTimestamp1= Date.parse(new Date($(".recordWrapLeft #J_DepDate").val()));
    var searchTimestamp2 = Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()))+1000*60*24*60;
	var data={"starttime":searchTimestamp1,"endtime":searchTimestamp2}
    $.post('/member/bms/points/reward/list', {data: JSON.stringify(data)}, function(result) {
    	console.log(result)
    	if(result.sc=="0"){ 
    		// $(".tcdPageCode").createPage({
    		//     pageCount:result.data.totalPages,
    		//     current:1,
    		//     backFn:function(p){
    		//         console.log(p);
    		//     }
    		// });
    		
 			$("#pageDir strong").html(result.data.totalPages)
 			fenye(result.data.totalPages)
    		for (var i = 0; i<result.data.result.length; i++) {
    			//var checkin=getLocalTime(result.data.result[i].checkin);
    			var checkin=formatStrDate( new Date(parseInt(result.data.result[i].checkin)))
    			/*alert(checkin)*/
    			var checkout=formatStrDate( new Date(parseInt(result.data.result[i].checkout)))
    			$(".hovertable").append('<tr class="0"><td>住宿</td><td>'+result.data.result[i].realName+'</td><td>'+result.data.result[i].memberGradeDesc+'</td><td>'+result.data.result[i].mobile+'</td><td>'+checkin+'</td><td class="checkout">'+checkout+'</td><td class="roomnights">'+result.data.result[i].roomnights+'</td><td>'+result.data.result[i].amount/100+'</td><td><span>修改</span><span>删除</span><span>操作记录</span></td><td><strong>提交</strong></td><td class="delId" style="display:none">'+result.data.result[i].id+'</td><td class="pointstype" style="display:none">'+result.data.result[i].pointsType+'</td><td class="uid" style="display:none">'+result.data.result[i].uid+'</td></tr>')
    			//status 0是待提交 1是已提交系统未确认 2是已提交系统已确认
    			if(result.data.result[i].status!=0){
    				$("tr").eq(i+1).children('td').children('strong').css('display', 'none');
    				if(result.data.result[i].status==1){
    					$("tr").eq(i+1).children('td').children('span').hover(function() {
    						$(this).css({
    							'text-decoration': 'underline',
    							'color': '#d13f4c'
    						});
    					}, function() {
    						$(this).css({
    							'text-decoration': 'none',
    							'color': '#333'
    						});
    					});
    				}
    			}
    			else{
    				$("tr").eq(i+1).children('td').children('span').hover(function() {
    					$(this).css({
    						'text-decoration': 'underline',
    						'color': '#d13f4c'
    					});
    				}, function() {
    					$(this).css({
    						'text-decoration': 'none',
    						'color': '#333'
    					});
    				});
    			}
    			//pointsType 11住宿消费 12非住宿消费 13积分加速（统一处理，立即生效）14订单取消  15推荐奖励 16积分赠送（统一处理，立即生效） 21兑换房间 22兑换非住宿消费 23积分过期 99其他
    			if(result.data.result[i].pointsType==12){
    				$("tr").eq(i+1).children('.roomnights').html("");
    				$("tr").eq(i+1).children('.checkout').html("");
    				$("tr").eq(i+1).children('td').eq(0).html("非住宿").css('background-color', '#e4e6e3');
    			}
    		};  

    	}
    	else{
    		alert(result.msg)
    	}
    })
$(".hovertable tr span").live('click', function(event) {
	if($(this).index()==1){
		$(".mask2").css('display', 'block');
		// $(this).parent("td").parent('tr').attr('id', '0');
		var e=$(this).parent("td").parent('tr').index();
		$(".mask2Btn").children('span').eq(0).click(function(event) {

			var data={"id":$(".hovertable tr").eq(e).children('.delId').html()}
			console.log($(".hovertable tr").eq(e).children('.delId').html())
			$.post('/member/bms/points/reward/del', {data: JSON.stringify(data)}, function(result) {
				
				if(result.sc==0){
					$(".mask2").css('display', 'none');
					$(".hovertable tr").eq(e).css('display', 'none');
				}
			})
			
		});
		
	}
	else if($(this).index()==0){
		var e=$(this).parent("td").parent('tr').index();
		$(".mask3").css('display', 'block');
		$(".mask3 .alertRight").css('display', 'none');
			
		$(".mask3 .alertLeft .dl1 dd").html($(".hovertable tr").eq(e).children('td').eq(3).html()).css('color', '#000');;
		if($(".hovertable tr").eq(e).children('.pointstype').html()==11){
			$(".mask3 .alertLeft dl").eq(2).show();
			$(".mask3 .alertLeft dl").eq(3).show();
			
			$(".mask3 .xiugaimimaBtn").click(function(event) {
				var timestamp1 =Date.parse(new Date($(".mask3 #J_DepDate2").val()));
       			var timestamp2 = Date.parse(new Date($(".mask3 #J_EndDate2").val()));
				var data={"userid":$(".hovertable tr").eq(e).children('.uid').html(),"id":$(".hovertable tr").eq(e).children('.delId').html(),"pointstype":$(".hovertable tr").eq(e).children('.pointstype').html(),"checkin":timestamp1,"checkout":timestamp2,"amount":parseInt($(".mask3 .amount").val())*100,"roomNights":parseInt($(".mask3 .roomNights").val())}
				// console.log(data)
				if($(".mask3 #J_DepDate2").val()!=""&&$(".mask3 .amount").val()!=""&&$(".mask3 #J_EndDate2").val()!=""&&$(".mask3 .roomNights").val()!=""){
					$.post('/member/bms/points/reward/edit', {data: JSON.stringify(data)}, function(result) {
						console.log(result)
						if(result.sc==0){
							$(".mask3 #J_DepDate2").val("");
							$(".mask3 .amount").val("");
							$(".mask3 .roomNights").val("");
							$(".mask3 #J_EndDate2").val("");
							$(".mask3").css('display', 'none');
							aa++;
							var a=aa-1
							var searchTimestamp1= Date.parse(new Date($("#feiruZhu .recordWrapLeft #J_DepDate").val()));
    						// var searchTimestamp2 = Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()));
    						var searchTimestamp2 =Date.parse(new Date($("#feiruZhu .recordWrapLeft #J_EndDate").val()))+1000*60*24*60
    						var data2={"starttime":searchTimestamp1,"endtime":searchTimestamp2}
    						 $.post('/member/bms/points/reward/list', {data: JSON.stringify(data2)}, function(result) {
    							console.log(result)
    							if(result.sc=="0"){
    								for (var i = 0; i<result.data.result.length; i++) {
    									//var checkin=getLocalTime(result.data.result[i].checkin);
    									var checkin=formatStrDate( new Date(parseInt(result.data.result[i].checkin)))
    									/*alert(checkin)*/
    									var checkout=formatStrDate( new Date(parseInt(result.data.result[i].checkout)))
    									$('.hovertable').append('<tr class="'+aa+'"><td>住宿</td><td>'+result.data.result[i].realName+'</td><td>'+result.data.result[i].memberGradeDesc+'</td><td>'+result.data.result[i].mobile+'</td><td>'+checkin+'</td><td class="checkout">'+checkout+'</td><td class="roomnights">'+result.data.result[i].roomnights+'</td><td>'+result.data.result[i].amount/100+'</td><td><span>修改</span><span>删除</span><span>操作记录</span></td><td><strong>提交</strong></td><td class="delId" style="display:none">'+result.data.result[i].id+'</td><td class="pointstype" style="display:none">'+result.data.result[i].pointsType+'</td><td class="uid" style="display:none">'+result.data.result[i].uid+'</td></tr>')
    									//status 0是待提交 1是已提交系统未确认 2是已提交系统已确认
    									if(result.data.result[i].status!=0){
    										$('.'+aa).eq(i).children('td').children('strong').css('display', 'none');
    										if(result.data.result[i].status==1){
    											$('.'+aa).eq(i).children('td').children('span').hover(function() {
    												$(this).css({
    													'text-decoration': 'underline',
    													'color': '#d13f4c'
    												});
    											}, function() {
    												$(this).css({
    													'text-decoration': 'none',
    													'color': '#333'
    												});
    											});
    										}
    									}
    									else{
    										$('.'+aa).eq(i).children('td').children('span').hover(function() {
    											$(this).css({
    												'text-decoration': 'underline',
    												'color': '#d13f4c'
    											});
    										}, function() {
    											$(this).css({
    												'text-decoration': 'none',
    												'color': '#333'
    											});
    										});
    									}
    									//pointsType 11住宿消费 12非住宿消费 13积分加速（统一处理，立即生效）14订单取消  15推荐奖励 16积分赠送（统一处理，立即生效） 21兑换房间 22兑换非住宿消费 23积分过期 99其他
    									if(result.data.result[i].pointsType==12){
    										$('.'+aa).eq(i).children('.roomnights').html("");
    										$('.'+aa).eq(i).children('.checkout').html("");
    										$('.'+aa).eq(i).children('td').eq(0).html("非住宿").css('background-color', '#e4e6e3');
    									}
    								};
    								
    							}	
    							
    							if(aa>a){
    								for (var i = 0; i <$('.'+a).length; i++) {
    									$('.'+a).css('display', 'none'); 
    								};
    								
    								
    							}
    						})

						}
						else{
							alert(result.msg)
						}
					})
				}
				else{
					alert("请填写完信息")
				}
				
			})
		}
		else if($(".hovertable tr").eq(e).children('.pointstype').html()==12){

			$(".mask3 .alertLeft dl").eq(2).css('display', 'none');
			$(".mask3 .alertLeft dl").eq(3).css('display', 'none');
			$(".mask3 .xiugaimimaBtn").click(function(event) {
				var timestamp1 = Date.parse(new Date($(".mask3 #J_DepDate2").val()));
				var data={"userid":$(".hovertable tr").eq(e).children('.uid').html(),"id":$(".hovertable tr").eq(e).children('.delId').html(),"pointstype":$(".hovertable tr").eq(e).children('.pointstype').html(),"checkin":timestamp1,"amount":parseInt($(".mask3 .amount").val())*100}
				console.log(data)
				if($(".mask3 #J_DepDate2").val()!=""&&$(".mask3 .amount").val()!=""){
					$.post('/member/bms/points/reward/edit', {data: JSON.stringify(data)}, function(result) {
						console.log(result)
						if(result.sc==0){
						$(".mask3 #J_DepDate2").val("");
						$(".mask3 .amount").val("");
						$(".mask3").css('display', 'none');
						// alert("message")
						var a=aa-1
							var searchTimestamp1= Date.parse(new Date($("#feiruZhu .recordWrapLeft #J_DepDate").val()));
    						// var searchTimestamp2 = Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()));
    						var searchTimestamp2 =Date.parse(new Date($("#feiruZhu .recordWrapLeft #J_EndDate").val()))+1000*60*24*60
    						var data2={"starttime":searchTimestamp1,"endtime":searchTimestamp2}
    						 $.post('/member/bms/points/reward/list', {data: JSON.stringify(data2)}, function(result) {
    							console.log(result)
    							if(result.sc=="0"){
    								for (var i = 0; i<result.data.result.length; i++) {
    									//var checkin=getLocalTime(result.data.result[i].checkin);
    									var checkin=formatStrDate( new Date(parseInt(result.data.result[i].checkin)))
    									/*alert(checkin)*/
    									var checkout=formatStrDate( new Date(parseInt(result.data.result[i].checkout)))
    									$('.hovertable').append('<tr class="'+aa+'"><td>住宿</td><td>'+result.data.result[i].realName+'</td><td>'+result.data.result[i].memberGradeDesc+'</td><td>'+result.data.result[i].mobile+'</td><td>'+checkin+'</td><td class="checkout">'+checkout+'</td><td class="roomnights">'+result.data.result[i].roomnights+'</td><td>'+result.data.result[i].amount/100+'</td><td><span>修改</span><span>删除</span><span>操作记录</span></td><td><strong>提交</strong></td><td class="delId" style="display:none">'+result.data.result[i].id+'</td><td class="pointstype" style="display:none">'+result.data.result[i].pointsType+'</td><td class="uid" style="display:none">'+result.data.result[i].uid+'</td></tr>')
    									//status 0是待提交 1是已提交系统未确认 2是已提交系统已确认
    									if(result.data.result[i].status!=0){
    										$('.'+aa).eq(i).children('td').children('strong').css('display', 'none');
    										if(result.data.result[i].status==1){
    											$('.'+aa).eq(i).children('td').children('span').hover(function() {
    												$(this).css({
    													'text-decoration': 'underline',
    													'color': '#d13f4c'
    												});
    											}, function() {
    												$(this).css({
    													'text-decoration': 'none',
    													'color': '#333'
    												});
    											});
    										}
    									}
    									else{
    										$('.'+aa).eq(i).children('td').children('span').hover(function() {
    											$(this).css({
    												'text-decoration': 'underline',
    												'color': '#d13f4c'
    											});
    										}, function() {
    											$(this).css({
    												'text-decoration': 'none',
    												'color': '#333'
    											});
    										});
    									}
    									//pointsType 11住宿消费 12非住宿消费 13积分加速（统一处理，立即生效）14订单取消  15推荐奖励 16积分赠送（统一处理，立即生效） 21兑换房间 22兑换非住宿消费 23积分过期 99其他
    									if(result.data.result[i].pointsType==12){
    										$('.'+aa).eq(i).children('.roomnights').html("");
    										$('.'+aa).eq(i).children('.checkout').html("");
    										$('.'+aa).eq(i).children('td').eq(0).html("非住宿").css('background-color', '#e4e6e3');
    									}
    								};
    								
    							}	
    							
    							if(aa>a){
    								for (var i = 0; i <$('.'+a).length; i++) {
    									$('.'+a).css('display', 'none'); 
    								};
    								
    								
    							}
    						})
						}
						else{
							alert(result.msg)
						}
	
					})
				}
				else{
					alert("请填写完信息")
				}

			})
		}
		
	}
	else if($(this).index()==2){
		$(".mask4").css('display', 'block');
		var e=$(this).parent("td").parent('tr').index();
		$(".recordIfr").attr('src', '/html/bms/record.html?member_hotelid='+$(".hovertable tr").eq(e).children('.delId').html());
	}
});
//分页
//sousuo
$("#pageDir i").click(function(event) {
	var ee=$("#pageDir input").val()
	$("."+ee).attr('id', 'current1').siblings('span').removeAttr('id');
	if(ee>1){
		$(".pageBefore").removeAttr('id')
	}
	else{
		$(".pageBefore").attr('id', 'current')
	}
	if($("#pageDir strong").html()==ee){
		$(".pageNext").attr('id', 'current')
	}
	else{
		$(".pageNext").removeAttr('id')
	}
	if(ee>5){
		$("#pageDir span").removeAttr('id');
	}
	fenye1(ee)
});
//下一个 上一页
	$("#pageDir .pageBefore").click(function(event) {
		var ee=$("#pageDir input").val()-1
		$("."+ee).attr('id', 'current1').siblings('span').removeAttr('id');
		if(ee>1){
			fenye1(ee)
			$("#pageDir input").val(ee)
			$(".pageNext").removeAttr('id')
		}
		else if(ee==1){
			fenye1(ee)
			$("#pageDir input").val(ee)
			$(".pageBefore").attr('id', 'current')
		}
		// else if($("#pageDir input").val()==$("#pageDir strong").html()){
		// 	$(".pageNext").attr('id', 'current')
			
		// }

		
	});
	$("#pageDir .pageNext").click(function(event) {
		var d=5;
		var ee=parseInt($("#pageDir input").val())+1
		$("."+ee).attr('id', 'current1').siblings('span').removeAttr('id');
		$(".pageBefore").removeAttr('id')
		if(ee<$("#pageDir strong").html()){
			if(ee>5){
			d++;
				if($("#pageDir strong").html()>d){
					alert(d);
					var dd=d-1;
					$("."+dd).after('<span class="'+d+'">'+d+'</span>')
					$("."+ee).attr('id', 'current1').siblings('span').removeAttr('id');
				}
			}
			fenye1(ee)
			$("#pageDir input").val(ee)
		}
		else if(ee==$("#pageDir strong").html()){
			fenye1(ee)
			$("#pageDir input").val(ee)
			$(".pageNext").attr('id', 'current')
			
			$(".pageNext").before('<span class="'+ee+'">'+ee+'</span>')
			$("#pageDir .add").hide();
			$("."+ee).attr('id', 'current1').siblings('span').removeAttr('id');
		}


		
	});

// $(".hovertable tr span").live('click', function(event) {
$("#pageDir span").live('click', function(event) {
	var ee=$(this).attr("class")
	alert(ee)

	$(this).attr('id', 'current1').siblings('span').removeAttr('id');
	$("#pageDir input").val(ee)
	if(ee>1){
		$(".pageBefore").removeAttr('id')
	}
	else{
		$(".pageBefore").attr('id', 'current')
	}
	if($("#pageDir strong").html()==ee){
		$(".pageNext").attr('id', 'current')
	}
	else{
		$(".pageNext").removeAttr('id')
	}
	//fenye请求
	fenye1(ee)
	
		
});
});
// formatStrDate( new Date(parseInt(nS)))
 function formatNum(num){//补0
        return num.toString().replace(/^(\d)$/, "0$1");
    }
    function formatStrDate(vArg){//格式化日期
        switch(typeof vArg) {
            case "string":
                vArg = vArg.split(/-|\//g);
                return vArg[0] + "-" + formatNum(vArg[1]) + "-" + formatNum(vArg[2]);
                break;
            case "object":
                return vArg.getFullYear() + "-" + formatNum(vArg.getMonth() + 1) + "-" + formatNum(vArg.getDate());
                break;
    }
  } 
function fenye(zongCount){
	   if(zongCount>5){
	   	alert("aaa")
			$(".recordTable").css('display', 'block');
			$(".add").show();
			$(".1").show();
			$(".2").show();
			$(".3").show();
			$(".4").show();
			$(".5").show();
			$(".pageNext").show();
			$(".pageBefore").show();
			var d=5;
			$("#pageDir .add").click(function(event) {
				d++
				if(d <zongCount){
					var dd=d-1
					// alert(dd);
					$("."+dd).after('<span class="'+d+'">'+d+'</span>')
				}
				else if(d ==zongCount){
					var dd=d-1
					// alert(dd);
					$("."+dd).after('<span class="'+d+'">'+d+'</span>')
					$("#pageDir .add").hide();
				}
				
				
			});  				
		}
		else if(zongCount==0){
			// alert($("#pageDir strong").html())
			$(".recordTable").css('display', 'none');
		}
		else{
			// alert($("#pageDir strong").html())
			if(zongCount==1){
				$(".2").hide();
				$(".3").hide();
				$(".4").hide();
				$(".5").hide();
				$(".pageNext").hide();
				$(".pageBefore").hide();
				$(".add").hide();	
			}
			else if(zongCount==2){
				$(".3").hide();
				$(".4").hide();
				$(".5").hide();
				$(".add").hide();
			}
			else if(zongCount==3){
				$(".4").hide();
				$(".5").hide();
				$(".add").hide();
			}
			else if(zongCount==4){
				$(".5").css('display', 'none');
			}
			$(".recordTable").css('display', 'block');
			
			// $("#pageDir").append('<span class="current pageBefore" ><</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span class="pageNext">></span> <strong>共'+result.data.totalPages+'页</strong> 到第<input type="number" value="1">页 <i>确定</i>')
		}
}

function fenye1(ee){
		aa++;
		var a=aa-1
		var searchTimestamp1= Date.parse(new Date($(".recordWrapLeft #J_DepDate").val()));
    	var searchTimestamp2 = Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()));
    	if(searchTimestamp1==searchTimestamp2){
    		var searchTimestamp2=Date.parse(new Date($(".recordWrapLeft #J_EndDate").val()))+1000*60*60*24
    	}
    	// }
    	var data={"starttime":searchTimestamp1,"endtime":searchTimestamp2,"pageno":ee}
    	 $.post('/member/bms/points/reward/list', {data: JSON.stringify(data)}, function(result) {
    		console.log(result)
    		if(result.sc=="0"){
    			$("#pageDir strong").html(result.data.totalPages)
    			
    			for (var i = 0; i<result.data.result.length; i++) {
    				//var checkin=getLocalTime(result.data.result[i].checkin);
    				var checkin=formatStrDate( new Date(parseInt(result.data.result[i].checkin)))
    				/*alert(checkin)*/
    				var checkout=formatStrDate( new Date(parseInt(result.data.result[i].checkout)))
    				$('.hovertable').append('<tr class="'+aa+'"><td>住宿</td><td>'+result.data.result[i].realName+'</td><td>'+result.data.result[i].memberGradeDesc+'</td><td>'+result.data.result[i].mobile+'</td><td>'+checkin+'</td><td class="checkout">'+checkout+'</td><td class="roomnights">'+result.data.result[i].roomnights+'</td><td>'+result.data.result[i].amount/100+'</td><td><span>修改</span><span>删除</span><span>操作记录</span></td><td><strong>提交</strong></td><td class="delId" style="display:none">'+result.data.result[i].id+'</td><td class="pointstype" style="display:none">'+result.data.result[i].pointsType+'</td><td class="uid" style="display:none">'+result.data.result[i].uid+'</td></tr>')
    				//status 0是待提交 1是已提交系统未确认 2是已提交系统已确认
    				if(result.data.result[i].status!=0){
    					$('.'+aa).eq(i).children('td').children('strong').css('display', 'none');
    					if(result.data.result[i].status==1){
    						$('.'+aa).eq(i).children('td').children('span').hover(function() {
    							$(this).css({
    								'text-decoration': 'underline',
    								'color': '#d13f4c'
    							});
    						}, function() {
    							$(this).css({
    								'text-decoration': 'none',
    								'color': '#333'
    							});
    						});
    					}
    				}
    				else{
    					$('.'+aa).eq(i).children('td').children('span').hover(function() {
    						$(this).css({
    							'text-decoration': 'underline',
    							'color': '#d13f4c'
    						});
    					}, function() {
    						$(this).css({
    							'text-decoration': 'none',
    							'color': '#333'
    						});
    					});
    				}
    				//pointsType 11住宿消费 12非住宿消费 13积分加速（统一处理，立即生效）14订单取消  15推荐奖励 16积分赠送（统一处理，立即生效） 21兑换房间 22兑换非住宿消费 23积分过期 99其他
    				if(result.data.result[i].pointsType==12){
    					$('.'+aa).eq(i).children('.roomnights').html("");
    					$('.'+aa).eq(i).children('.checkout').html("");
    					$('.'+aa).eq(i).children('td').eq(0).html("非住宿").css('background-color', '#e4e6e3');
    				}
    			};
    			
    		}	
    	})
    		
    		if(aa>a){
    			// alert($(".hovertable tr").eq(1).attr('class'))
    			
    			/*alert($(".hovertable tr").eq(1).attr('class'));*/
    			for (var i = 0; i <$('.'+a).length; i++) {
    				$('.'+a).css('display', 'none'); 
    			};
    			$("#pageDir ."+a).show();
    			//$('.'+a).css('display', 'none !important'); 
    			
    			
    		}
	}