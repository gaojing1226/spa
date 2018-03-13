var countdown=9; 
function settime(val) { 
	if (countdown == 0) { 
		val.removeAttribute("disabled"); 
		val.value="同意";
		clearInterval(btn);	
		$("#btn").click(function(){
			alert("同意");
		})		
	}
	else { 
		val.setAttribute("disabled", true); 
		val.value="同意(" + countdown + "s)"; 
		countdown--; 
	}

	setTimeout(function() { 
		settime(val);
	},1000)
}
