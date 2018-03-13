 $(function(){
 function haha(){  

  var jindutiao = document.getElementById("progress");  

  jindutiao.style.width = parseInt(jindutiao.style.width) + 1 + "%";

  jindutiao.innerHTML = jindutiao.style.width;  

  if(jindutiao.style.width == "100%"){  

     window.clearInterval(shijian);  

  }  

 }  

 var shijian = window.setInterval(function(){haha();},100); 

window.onload = function(){  

   shijian;  

} 
}); 