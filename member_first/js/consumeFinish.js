$(document).ready(function() {
	 console.log(decodeURIComponent(obj))
	 var hh=decodeURIComponent(obj);
	 var h=JSON.parse(hh);
	$(".consumeFinish1 strong").html(h.pointsChange);
	$(".consumeFinish2 strong").html(h.currency+h.amount/100);
	$(".consumeFinish3 strong").html(h.hotelName)
});