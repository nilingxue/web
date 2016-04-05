$(document).ready(function() {
//获取焦点
$(".resetPhone").focus(function (event) {
	$("#submitBtn").removeAttr("disabled"); 
        
});
//失去焦点
$(".resetPhone").blur(function (event) {
    if ($(this).val() == "") {
       $("#submitBtn").attr("disabled", true);
   		return;
	}
     // alert()
     // alert()
     var zz=Number($(".resetPhone").val());
     var zg=Number($(".more span").html());
	if(zz>zg){
		$(".tip").css('display', 'block');
            setTimeout(function() {
               $(".tip").css('display', 'none');
            },2000)
        $("#submitBtn").attr("disabled", true);
   		return;
	}
});
//支付积分
$("#submitBtn").click(function(event) {
	var data={"amount":$(".resetPhone").val()*100,"hotelId":id}
     console.log(JSON.stringify(data));
     if($(".resetPhone").val()==""){
     	return;
     }
     else if($(".resetPhone").val()>$(".more span").html()){
     	$(".tip").css('display', 'block');
            setTimeout(function() {
               $(".tip").css('display', 'none');
            },2000)
     	return;
     }
     else{
     	$.post('/member/h5/points/consumecash/add', {data: JSON.stringify(data)}, function(data) {
    	    console.log(data)
    	    if(data.sc=="0"){
    	        window.location="/html/member/consumeFinish.html?member_hotelid=&obj="+encodeURIComponent(JSON.stringify(data.data))
    	    }
    	})   
     }
    
});
$.post('/member/h5/info', function(data) {
    console.log(data)
    if(data.sc=="0"){
        $(".more strong").html(data.data.points);
        $(".more span").html(data.data.pointsToCash/100);
        
    }
}) 

data={"id":id}
$.post('/content/client/hotel/detail',{data: JSON.stringify(data)}, function(data) {
    console.log(data)
    if(data.sc=="0"){
       $(".consumetitle").html(data.data.hotelBaseInfo.hotelCname);
   }
})




});