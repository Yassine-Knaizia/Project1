$('#line').css("margin-buttom","20px")
$("body").css({
	"background-image":"url(https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
    "background-position":"center",
    "background-repeat":"no-repeat",
    "background-size":"100% 100%",
  });
$("#start").css({
	"width":"800px",
	"height":"550px",
	"margin":"0 auto",
	"background-image":"url(https://images.unsplash.com/photo-1571553693721-b9500d685594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
	"background-repeat":"no-repeat",
	"background-size":"100% 100%",
	"background-position":"center",
	"padding":"10px 50px 50px 50px",
	"border-radius":"50px","border":"2px solide #cbcbcb",
	"box-shadow":"10px 15px 5px #cbcbcb",
  }); 
$("#start h1").css({
	"font-family":"sans-serif",
	"background-color":"black",
	"font-size":"60px",
	"text-align":"center",
    "color":"#fff",
    "padding":"2px 0px",
    "border-radius":"50px",
  });
$("#button").css({
    "font-family":"sans-serif",
    "font-size":"30px",
	"display":"block",
	"margin": "0 auto ",
    "width":"80px",
	"height":"50px",
	"border":"1px solid #1d3c6a",
	"border-radius":"10px",
	"background-color":"#72C09A",
  });
$("#button").mouseover(function(){
	$(this).css({
	   "cursor":"pointer",
	  "background-color":"#57636e",
	})
	});
$("#button").mouseout(function(){
	$(this).css({
	  "cursor":"default",
	  "background-color":"#72C09A",
	})
	});
$("#button").focus(function(){
	$(this).css("outline","0")
	});

