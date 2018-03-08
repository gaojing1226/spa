$(function(){
	$('form :input').blur(function(){
		//去掉先前的提醒
		var $parent = $(this).parent();
		$parent.find(".formtips").remove();
		//判断宽度为空或非数字
		var patrn = /^\d+(\.\d+)?$/;
		if($(this).is('.rectangle__width')){
			if(this.value=="" ){
				var errorMsg1 = '宽度不能为空!';
                $(this).next().after('<div class="formtips onError1">'+errorMsg1+'</div>');
			}
			//exec()找到了匹配的文本,则返回一个结果数组。否则,返回 null
			else if(patrn.exec(this.value) == null){
				var errorMsg3 = '请输入大于0的数字!';
                $(this).next().after('<div class="formtips onError3">'+errorMsg3+'</div>');
			}
			else{
				$(".rectangle__height").removeAttr("disabled");
			}
		}

		//判断长度为空或非数字
		if($(this).is('.rectangle__height')){
			if(this.value=="" ){
				var errorMsg2 = '高度不能为空!';
                $(this).next().after('<div class="formtips onError2">'+errorMsg2+'</div>');
			}
			else if(patrn.exec(this.value) == null){
				var errorMsg3 = '请输入大于0的数字!';
                $(this).next().after('<div class="formtips onError3">'+errorMsg3+'</div>');
			}
		}

		//计算周长 面积
		$(".rectangle__calc").click(function(){
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
	});
})
