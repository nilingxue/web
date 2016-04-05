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
	        
        // document.title = person.getRequestData().data.shareInfo;






	// $.post('/member/h5/info', function(data) {
	//     console.log(data)
	//     if(data.sc=="0"){
	//         $(".consumingRecords span").html(data.data.memberGradeDesc+"会员");
	//         $(".consumingRecords strong").html(data.data.upgradeCondition)
	        
	//     }
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
                    /*XMLHttpRequest.setRequestHeader('apiversion', ''+obj.apiversion )
                     XMLHttpRequest.setRequestHeader('channel', ''+obj.channel)
                     XMLHttpRequest.setRequestHeader('location', ''+obj.location)
                     XMLHttpRequest.setRequestHeader('userid', ''+obj.userid)
                     XMLHttpRequest.setRequestHeader('uuid', ''+obj.uuid)
                     XMLHttpRequest.setRequestHeader('sign', ''+obj.sign)*/
                     XMLHttpRequest.setRequestHeader('apiversion', String(obj.apiversion) )
                     XMLHttpRequest.setRequestHeader('channel', String(obj.channel))
                     XMLHttpRequest.setRequestHeader('location', String(obj.location))
                     XMLHttpRequest.setRequestHeader('userid', String(obj.userid))
                     XMLHttpRequest.setRequestHeader('uuid', String(obj.uuid))
                     XMLHttpRequest.setRequestHeader('sign', String(obj.sign))
                    /*XMLHttpRequest.setRequestHeader('apiversion', '2.0')
                    XMLHttpRequest.setRequestHeader('channel', 'HuaWei@android_2.0')
                    XMLHttpRequest.setRequestHeader('location', '120.073086,30.282003')
                    XMLHttpRequest.setRequestHeader('userid', '7')
                    XMLHttpRequest.setRequestHeader('uuid', '4bfa4ee1a806059b')
                    XMLHttpRequest.setRequestHeader('sign', '11ce05ac015bf548d1c21986bee8166d')*/
                },
                success: function (data) {
                    requestData = (data);
                }
            })


        }
    }