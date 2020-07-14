//Style prototype
$('#line1').css("margin-buttom","20px")
$('#line2').css("margin-top","100px")
$("body").css({
	"background-image":"url(https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
	"background-position":"center",
    "background-repeat":"no-repeat",
    "background-size":"100% 100%",
              });
$(".first").css({
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
$(".first h1").css({
	"font-family":"sans-serif",
	"background-color":"black",
	"font-size":"50px",
	"text-align":"center",
    "color":"#fff",
    "padding":"2px 0px",
    "border-radius":"20px",
    "margin":"10px 10px 10px 10px",
});
$(".first #question").css({
	"font-family": "sans-serif",
	"font-size":"30px",
	"color":"white",
});
$(".buttons").css({
	"margin-top":"30px",
    "display-inline":"block",
});
$("#btn0, #btn1, #btn2, #btn3").css({
	"background-color":"white",
	"width":"250px",
	"font-weight":"bold",
	"font-size":"20px",
	"color":"black",
	"border":"1px solid #1d3c6a",
	"margin":"35px 35px 35px 70px",
	"padding":"10px 10px",
	"border-radius":"20px",

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
	 "background-color":"white",
	})
	});
$("#btn0, #btn1, #btn2, #btn3").focus(function(){
	$(this).css("outline","0")
	});





