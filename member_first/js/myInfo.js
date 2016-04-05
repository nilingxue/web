$(document).ready(function() {
	$.post('/user/h5/info', function(data) {
        console.log(data)
        if(data.sc=="0"){
            $(".memberIcon span img").attr("src",data.data.headimgurl);
            $(".memberName span").html(data.data.realname);
            $(".memberNick span").html(data.data.nickname);
            // for(a=0;a<data.data.accoutList.length;a++){
            	
            		$(".memberPhone span").html(data.data.mobileAccount.accountName)
            	
            // }
        }
    })
});