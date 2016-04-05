$(document).ready(function() {
 //手机号
 //获取焦点
$(".phone1").focus(function (event) {
	if ($(".phone").val() == "请输入手机号码") {
    	$(".phone").val("");
        $(this).val("").css({"color": "#fff","font-size":"1.2rem"});
        $("#btn").removeAttr("disabled"); 
    }
});
if($(".phone1").val()==""){
    $("#btn").attr("disabled", true);
}
$(".closeBtn").click(function(event) {
   $(this).parent().parent().css('display', 'none');
});
$(".jiheCon").click(function(event) {
   window.location="/html/static/memberIntroduction.html"
});
  //失去焦点
$(".phone1").blur(function (event) {
    if ($(this).val() == "") {
          //alert("aab1")
       $(".phone").val("请输入手机号码").css({"color":"#d0d0d0","font-size":"1rem"});
       $(this).val("").css({"color": "#fff","font-size":"1.2rem"});
       $("#btn").attr("disabled", true);
   		return;
	}
    if (!$(".phone1").val().match(/^[1][3,4,5,7,8][0-9]{9}$/)) {
        $(".phone").val("请输入手机号码").css({"color":"#d0d0d0","font-size":"1rem"});
        $(this).val("").css({"color": "#fff","font-size":"1.2rem"});
        $("#btn").attr("disabled", true);
        return; 
    }
});
 //获取焦点
$(".phoneNum1").focus(function (event) {
    if ($(".phoneNum").val() == "请输入短信验证码") {
        $(".phoneNum").val("");
        $(this).val("").css({"color": "#fff","font-size":"1.2rem"});
    }
});
  //失去焦点
$(".phoneNum1").blur(function (event) {
    if ($(this).val() == "") {
         // alert("aab1")
       $(".phoneNum").val("请输入短信验证码").css({"color":"#d0d0d0","font-size":"1rem"});
       $(this).val("").css({"color": "#fff","font-size":"1.2rem"});
        return;
    }

});
 //获取焦点
$(".name").focus(function (event) {
    if ($(this).val() == "请输入您的真实姓名") {
        $(this).val("").css({"color": "#fff","font-size":"1.2rem"});
    }
    $("#submitBtn1").css({"background-color":"#bb8e4b"}).removeAttr("disabled");
});

  //失去焦点
$(".name").blur(function (event) {
    if ($(this).val() == "") {
         // alert("aab1")
       $(this).val("请输入您的真实姓名").css({"color":"#d0d0d0","font-size":"1rem"});
        return;
    }

});

//倒计时
var wait=59;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");  
        o.value="发送验证码";
        wait = 59;
        $("#btn").css({"background-color":"#bb8e4b","font-size":"12px"})
        // document.getElementById("submitBtn").setAttribute("disabled", true);
        // $("#submitBtn").css({"background-color":"#666"}).attr("disabled", true);
    } else {
        o.setAttribute("disabled", true);
        o.value=wait+"s";
        wait--;
        $("#btn").css({"background-color":"#666","color":"#fff","font-size":"1.2rem"})
        $("#submitBtn").css({"background-color":"#bb8e4b"}).removeAttr("disabled");
        setTimeout(function() {
            time(o)
        },1000)
    }
} 
//获取验证码
$("#btn").click(function(event) {
    if($(".phone1").val()==""){
        return;
    }
    else{
        // alert($(".phone1").val())
     var data={"accountname":$(".phone1").val(),"verifycodetype":"1"}
     console.log(JSON.stringify(data));
    $.post('/user/h5/getverifycode', {data: JSON.stringify(data)}, function(data) {
        console.log(data)
        if(data.sc=="0"){
            time(document.getElementById("btn"));
            $(".tip").css('display', 'block');
            setTimeout(function() {
               $(".tip").css('display', 'none');
            },2000)
        }
        else {
            $(".tip").html(data.ErrorMsg).css('display', 'block');
                setTimeout(function() {
               $(".tip").css('display', 'none');
            },2000)
        }
    })   
    }
    
});
//提交手机和验证码
$("#submitBtn").click(function(event) {
    if($(".phoneNum1").val()==""){
        return;
    }
    else{


    var data={"accountname":$(".phone1").val(),"verifycode":$(".phoneNum1").val()}
    console.log(data)
   $.post('/user/h5/bindmobile', {data: JSON.stringify(data)}, function(data) {
        console.log(data)
        if(data.sc=="-99999"){
            // time(document.getElementById("btn"));
            alert("系统繁忙")
        }
        else if(data.sc=="-1"){
            alert("系统繁忙")
        }
        else if(data.sc=="USER-1011"){
             $(".newweixin").html(data.data.newweixin);
                $(".oldweixin").html(data.data.oldweixin);
                $(".mask1").css('display', 'block');
                
                $(".fanPaiBtn").click(function(event) {
                    var bind={"bindtoken":data.data.bindtoken};
                    $.post('/user/h5/bindmobile', {data: JSON.stringify(bind)}, function(data) {
                        if (data.sc=="0") {
                            // alert(data.data.jumpurl)
                            window.location=data.data.jumpurl
                        }
                    })
                });
        }
        else if (data.sc=="0") {
                window.location=data.data.jumpurl
        }
       
        else{
            alert(data.ErrorMsg)
        }

    }) 
}

});
//提交姓名
$("#submitBtn1").click(function(event) {
    if($(".name").val()=="请输入您的真实姓名"){
        return;
    }
    else{
        var data={"realname":$(".name").val()}
        // console.log(data)
        $.post('/user/h5/registermember', {data: JSON.stringify(data)}, function(data) {
            // console.log(data)
            //判断是否关注公众号，无跳关注页，有直接进会员中心
            if(data.sc=="0"){
                if(data.data.isSubcribe){
                    window.location=data.data.jumpurl
                    
                }
                else{
                    window.location=data.data.jumpurl
                }
            }
        }) 
    }
      
});


})
