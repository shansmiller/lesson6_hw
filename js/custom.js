$(document).ready(function(){
	
	var isLightOn = true;

	$("#lightSwitch").click(function(){
		flipTheLightSwitch();
	});
	//event listener makes the ball roll
	 $("#ball").click(function(){
	 	var windowWidth = $(window).width();

		console.log(windowWidth)
		console.log( $("#ball").position() )

		if($("#ball").position() <= windowWidth ){
	 		$("#ball").animate( {left:"+=100px"} );
	 	}else{
	 		$("#ball").animate( {left:"-=100px"} );
	 	}
	 });

	 //light switch example turning something on and off
	function flipTheLightSwitch(){
		if(isLightOn){
			
			$("body").css("background", "black");
			$("#lightSwitch").val("Turn Light On")
			$("#square").fadeOut(3000);
			isLightOn = false;
		} else{
			$("body").css("background", "yellow");
			$("#lightSwitch").val("Turn Light Off")
			$("#square").fadeIn(3000);
			isLightOn = true;
			}

		}

	});
