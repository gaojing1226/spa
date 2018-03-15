		//计算周长 面积
		$("rectangle__calc").click(function(){
    		var width = Number($(".rectangle__width").val());
    		var height = Number($(".rectangle__height").val());

    		if(width<1||height<1){
    			var n1 = width.toString().split(".")[1].length;
    			var n2 = height.toString().split(".")[1].length;
    			var times = Math.pow(10, Math.max(n1, n2));
    		}
    		else{
    			times=1;
    		}

    		var perimeter = (width*times+height*times)/times*2;

    		var area = width*times*height*times/times/times;


    		$('.rectangle__perimeter').val(perimeter);
    		$('.rectangle__area').val(area);
  		});