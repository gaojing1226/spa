
//容器 config
	var PasswordBox=function(config){ 
		var $pwd=$('<input type="password" id="pass" />');
		var $pwdText=$('<input type="text"></input>');
		var $eyeImage=$('<div></div>');
		var $div = $('<div class="main">密码：</div>');

		$div.append($pwd);
		$div.append($eyeImage);
		$div.append($pwdText);

		$(config.container).append($div);

		$pwd.on('input',function(){
			console.log("1");
			$pwdText.val($pwd.val());
		})

		$eyeImage.mouseout(function(){
			$pwdText.css('z-index',10);

		})

		$eyeImage.mouseover(function(){
			$pwdText.css('z-index',-10);
			
		})

		this.getPwd=function(){
			return $pwdText.val();
		}
	}
