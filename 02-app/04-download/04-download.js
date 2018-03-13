var count = 0;  
var tid;  

function getCount() {  
    count++;  
    if (count > 100) {  
        end();  
    } else {  
        var div = document.getElementById("div1");  
        div.innerText = count + "%";
        div.style.width = 3 * count + "px"; 
    }  
}  
  
function down() {  
    tid = setInterval("getCount()", 100);  
}  
  
function end() {  
    clearInterval(tid);
}

function reset(){
    count=0;
    end();
    var div = document.getElementById("div1");
    div.innerText = count + "%"  
    div.style.width = count + "px";
}
