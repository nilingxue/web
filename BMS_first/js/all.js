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
      var d=0;
function fenye(zongCount){

if(zongCount==0){
    $(".recordTable").hide()
}
else{
     $(".recordTable").show()
}
    for (var i = 0; i < zongCount; i++) {
        d++
                if(d <zongCount){
                    var dd=d-1
                    $("."+dd).after('<span class="'+d+'">'+d+'</span>')
                }
                else if(d ==zongCount){
                    var dd=d-1
                    $("."+dd).after('<span class="'+d+'">'+d+'</span>')
                }
    };
    var tt=$("#pageDir span").last().attr('class');
        for (var i = tt; i > zongCount; i--) {
          $("."+tt).remove();
        };
        

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
            
                for (var i = 0; i <$('.'+a).length; i++) {
                    $('.hovertable .'+a).remove(); 
                };
               
                
                
            }
    }
function searchXun(){
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
        
        if(aa>a){
            for (var i = 0; i <$('.'+a).length; i++) {
                // alert("a")
                $('.hovertable  .'+a).remove(); 
                // $('.'+a).hide(); 
            };
            // $("#pageDir ."+a).show();
            
            
        }
    })
}