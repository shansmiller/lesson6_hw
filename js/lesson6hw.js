$(document).ready(function(){
	alert("Welcome to Lesson 6 Home Work");

	$("#curtain").animate({ top:"-=900px"
	},3000);

	$("#boat").click(function(){
		// moveBoat();
		$(this).animate({
			marginLeft: "400px"
		}, 2000)
	})
  });

 
	


			

