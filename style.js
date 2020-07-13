//Style
$('#line1').css("margin-buttom","20px")
$('#line2').css("margin-buttom","50px")
$("body").css({
	"background-image":"url(https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
	"background-position":"center",
    "background-repeat":"no-repeat",
    "background-size":"100% 100%",
              });
$(".grid").css({
	"width":"800px",
	"height":"550px",
	"margin":"0 auto",
	"background-image":"url(https://images.unsplash.com/photo-1481886756534-97af88ccb438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)",
	"background-position":"center",
    "background-repeat":"no-repeat",
    "background-size":"100% 100%",
	"padding":"10px 50px 50px 50px",
	"border-radius":"50px","border":"2px solide #cbcbcb",
	"box-shadow":"10px 15px 5px #cbcbcb",
});
$(".grid h1").css({
	"font-family":"sans-serif",
	"background-color":"grey",
	"font-size":"40px",
	"text-align":"center",
    "color":"#fff",
    "padding":"2px 0px",
    "border-radius":"20px",
    "margin":"10px 10px 10px 10px",
});
$(".grid #question").css({
	"font-family": "sans-serif",
	"font-size":"30px",
	"color":"black",
});
$(".buttons").css("margin-top","30px");
$("#btn0, #btn1, #btn2, #btn3").css({
	"background-color":"#72C09A",
	"width":"250px",
	"font-size":"20px",
	"color":"#fff",
	"border":"1px solid #1d3c6a",
	"margin":"30px 30px 40px 0px",
	"padding":"10px 10px",
	"display":"flex",
	"align-items":"center",
	"border-radius":"30px",

});
$("#progress").css({
	"color":"black",
	"font-size":"20px",
});
$("#btn0, #btn1, #btn2, #btn3").mouseover(function(){
	$(this).css({
	  "cursor":"pointer",
	  "background-color":"#57636e",
	})
	});
$("#btn0, #btn1, #btn2, #btn3").mouseout(function(){
	$(this).css({
	"cursor":"default",
	 "background-color":"#72C09A",
	})
	});
$("#btn0, #btn1, #btn2, #btn3").focus(function(){
	$(this).css("outline","0")
	});





