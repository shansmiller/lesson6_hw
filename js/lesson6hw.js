$(document).ready(function(){
	//alert("Welcome to Lesson 6 Home Work");

	$("#curtain").animate({ top:"-=900px"
	},3000);

	setTimeout(function(){
		$(".click-boat").fadeIn();

	},4000)

	$("#boat").click(function(){
		$(".click-boat").fadeOut();
		$(this).animate({
			marginLeft: "400px"
		}, 2000);
		$(".click-sun").fadeIn(2000);
	})
	// setTimeout(function(){
	// 	$(".click-sun").fadeIn();

	// },4000)

	$("#sun").click(function(){
		$("#curtain").animate({ top:"+=900px"
	},3000);

	})
  });

 
	


			

