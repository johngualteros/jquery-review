$(document).ready(function(){
	console.log("Running Jquery");
})

var paragrahp=jQuery(".paragraph");
var saludo=jQuery("#saludo");

paragrahp.css("font-size","34px").css("color","#ff0");

//Other Section

$("#animate").click(function(){
	var id=$(this).attr('id');
	console.log("click in the element "+id);
	$("span",this).addClass("animate-right");
})
// Selector :first-child
// :last-child
// :nth:child

// child secondary examples

// $("ul.menu > li")
// $("form input")

/* The methods for getters and setters
.attr()
.html()
.text()
.val()*/
// Position()
var email=$("#email");
console.log("The value of input before is: "+email.val())

$("#email").val("gualteros@gmail.com");
console.log("The value of after input is: "+email.val())

$("#button").on("click",function(){
	console.log("click");
	$("#new_text").css("color","#FE3A3A");
});

$(document).ready(function(){
	$("#element").animate({
		width:"200px",
		height:"200px",
		left:"200px"
	})
})

var max=40;
var min=12;


$(document).ready(function(){
	$("#increase").on("click",function(){
		var font_size=$(".new-text").css("font-size");
		font_size=font_size.replace("px","");
		if(font_size<=max){
			var increase=parseInt(font_size)+2;
			$(".new-text").css("font-size",increase+"px");
		}else{
			alert("The max font size is this");
		}
	})
	$("#diminish").on("click",function(){
		var font_size=$(".new-text").css("font-size");
		font_size=font_size.replace("px","");
		if(font_size<=max){
			var diminish=parseInt(font_size)-2;
			$(".new-text").css("font-size",diminish+"px");
		}else{
			alert("The max font size is this");
		}
	})
})



