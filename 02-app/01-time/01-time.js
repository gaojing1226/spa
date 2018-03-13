var countdown=9; 
var timeEnd =setInterval('settime()',1000);
function settime() {
	countdown--;
	if (countdown < 0 || countdown == 0) {
		$('#btn').html("同意");
		$('#btn').attr("disabled",false); 			
		$("#btn").click(function(){
			alert("就知道你会同意的");
		});	
		clearInterval(timeEnd);
	}
	else { 
		$('#btn').attr("disabled", true); 
		$('#btn').html("同意(" + countdown + "s)"); 
	}
}
