$(document).ready(function() {


pageData = new Array();
var person = new Person();
person.requestCommit('/member/h5/info','{}')
console.debug(person.getRequestData());
 $(".consumingRecords span").html(person.getRequestData().data.memberGradeDesc+"会员");
   if(person.getRequestData().data.memberGrade==0){
            // alert(person.getRequestData().data.upgradeCondition)
             $(".consumingRecords strong").html(person.getRequestData().data.upgradeCondition)
         }
         else if(person.getRequestData().data.memberGrade==1){
             $(".consumingRecords strong").html(person.getRequestData().data.upgradeCondition+"<br/>"+person.getRequestData().data.keepgradeCondition)
         }
         else if(person.getRequestData().data.memberGrade==2){
            $(".consumingRecords strong").html(person.getRequestData().data.keepgradeCondition)
         }
    // $(".consumingRecords strong").html(person.getRequestData().data.upgradeCondition+"<br/>"+person.getRequestData().data.keepgradeCondition)



//请求分页









		var data={"pagecnt":"15","pageno":"1"}
		pageData = new Array();
var person = new Person();
person.requestCommit('/member/h5/points/list',JSON.stringify(data))
console.debug(person.getRequestData());
	// $.post('/member/h5/points/list',{data: JSON.stringify(data)}, function(data) {
	//     console.log(data)
	    if(person.getRequestData().sc=="0"){
	    	for(a=0;a<person.getRequestData().data.length;a++){
	    		var data1=parseInt(person.getRequestData().data[a].checkout)
	    		var date = new Date(data1);
				Y = date.getFullYear() + '-';
				M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
				D = date.getDate() + ' ';
				var time=Y+M+D;
	    		$(".integrationSystem ul").append('<li style="height:4rem;padding:1rem 0;"><span style="line-height:3rem;min-width:6.4rem;max-width:6.4rem;text-align:center;">'+person.getRequestData().data[a].pointsChange+'</span><strong style="line-height:1.6rem;">'+person.getRequestData().data[a].pointsChangeDesc+'<br/><i>'+time+'</i></strong></li>')
	    		if(person.getRequestData().data[a].recordType=="2"){
	        		$(".integrationSystem ul li").eq(a).children('span').css('color', '#d13f4c');
	        	}
	    	}
	        
	    }
	    if($(".integrationSystem ul li").length<15){
			$(".load").html("已经加载完");
			return;
		}
		else{
			var b=1;
		
			 $(window).scroll(function(){
    		    var scrollTop = $(this).scrollTop();
    		    var scrollHeight = $(document).height();
    		    var windowHeight = $(this).height();
    		    if(scrollTop + windowHeight == scrollHeight) {
    		    	b++;
    		    	if($(".integrationSystem ul li").length<15*b){
    		    		$(".load").html("已经加载完");
    		    		return;
    		    	}
    		    	else{
					 	var data1={"pagecnt":"15","pageno":b}
		pageData = new Array();
var person = new Person();
person.requestCommit('/member/h5/points/list',JSON.stringify(data1))
console.debug(person.getRequestData());
					 	// $.post('/member/h5/points/list',{data: JSON.stringify(data1)}, function(data) {
						    // console.log(data)
						    if(person.getRequestData().sc=="0"){
						    	for(a=0;a<person.getRequestData().data.length;a++){
						    		var data1=parseInt(person.getRequestData().data[a].createTime)
						    		var date = new Date(data1);
									Y = date.getFullYear() + '-';
									M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
									D = date.getDate() + ' ';
									var time=Y+M+D;
						    		$(".integrationSystem ul").append('<li style="height:4rem;padding:1rem 0;"><span style="line-height:3rem;min-width:6.4rem;max-width:6.4rem;text-align:center;">'+person.getRequestData().data[a].pointsChange+'</span><strong style="line-height:1.6rem;">'+person.getRequestData().data[a].pointsChangeDesc+'<br/><i>'+time+'</i></strong></li>')
						    		if(person.getRequestData().data[a].recordType=="2"){
						        		$(".integrationSystem ul li").eq(15*(b-1)+a).children('span').css('color', '#d13f4c');
						        	}
						    	}
						    }
						// })
	
    		    	}
    		    	
    		    }
    		})
		}
	// })
	
});
 function Person() {

        var requestData = "";
        this.setRequestData = function (_requestData) {
            requestData = _requestData;
        };
        this.getRequestData = function () {
            return requestData;
        }

        this.requestCommit = function (allUrl, allData) {
            var testHeader = jihe.getHeaderData(allData);

            var testHeaderB = decodeURIComponent(testHeader);
            var obj = eval("(" +testHeaderB + ")");
            $.ajax({
                type: 'POST',
                url: allUrl, async: false,
                data: {data: allData},
                beforeSend: function (XMLHttpRequest) {
                     XMLHttpRequest.setRequestHeader('apiversion', String(obj.apiversion) )
                     XMLHttpRequest.setRequestHeader('channel', String(obj.channel))
                     XMLHttpRequest.setRequestHeader('location', String(obj.location))
                     XMLHttpRequest.setRequestHeader('userid', String(obj.userid))
                     XMLHttpRequest.setRequestHeader('uuid', String(obj.uuid))
                     XMLHttpRequest.setRequestHeader('sign', String(obj.sign))
                },
                success: function (data) {
                    requestData = (data);
                }
            })


        }
    }