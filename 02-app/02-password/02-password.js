window.onload=function(){
	var btn=document.getElementById("btn");
	var pass=document.getElementById("pass")
	btn.onmouseover=function(){
		pass.type="text"
	};
	btn.onmouseup=btn.onmouseout=function(){
		pass.type="password"
	}
}