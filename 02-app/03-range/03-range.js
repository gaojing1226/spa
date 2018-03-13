$(function(){
	$("#range").change(function(){
		var age = document.getElementById("range").value;
		console.log(age); 
		document.getElementById("age").innerHTML = age;
	});
});