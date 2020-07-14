//Functions
var songs=[
  new Questions("Who's the singer of Oh,Pretty Woman?",["Roy Orbison","Tom Jones","Westlife","Van Halen"],"Roy Orbison"),
  new Questions("Who's the singer of In the end?",["Linken Park","Britney Spears","Jennifer Lopez","Drake"],"Linken Park"),
  new Questions("Who's the singer of Y.M.C.A?",["Green day","Village people","Ray Parker Jr","Aerosmith"],"Village people"),
  new Questions("Who's the singer of I kissed a girl?",["Lady Gaga","The emotions","Justin Bieber","Katy Perry"],"Katy Perry"),
  new Questions("Who's the singer of Hound Dog?",["Boyz ll Men","Scorpions","Elvis Presly","The killers"],"Elvis Presly"),
  new Questions("Who's the singer of Hotline Bling?",["The Notorious B.I.G","Drake","Machine Gun Kelly","Eminem"],"Drake"),
  new Questions("Who's the singer of What a wonderful world?",["Led Zeppelin","Whitney Houston","The Eagles","Louis Armstrong"],"Louis Armstrong"),
  new Questions("Who's the singer of The sound of silence?",["Led Zeppelin","Neil Diamond","Simon & Gurfunkel","Louis Armstrong"],"Simon & Gurfunkel"),
  new Questions("Who's the singer of Maggie May?",["Rod Stewart","Gnarls Barkley","Micheal Jackson","The Police"],"Rod Stewart"),
  new Questions("Who's the singer of Stand by me?",["Mc Hammer","Chuck Berry","Madonna","Ben E.King"],"Ben E.King"),
];
var quiz=new Quiz(songs);

function process(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
	var element=document.getElementById("question");
	element.innerHTML=quiz.getQuestionsIndex().text;
    var choices=quiz.getQuestionsIndex().choices;
    for(var i=0;i<choices.length;i++){
    	var element=document.getElementById("choice"+i);
    	element.innerHTML=choices[i];
    	match("btn"+ i, choices[i]);
    }
    showProgress();
	}
}

function match(id, guess){
	var button=document.getElementById(id);
     button.onclick=function(){
      quiz.match(guess);
      process();
  };
}
function showProgress(){
   var currentQuestionNumber=quiz.questionIndex+1;
   var element=document.getElementById("progress");
   element.innerHTML="Question "+currentQuestionNumber+" of "+quiz.questions.length;
}

function showScores(){
   var gameOverHtml="<h1 style='color:white; text-align:center; font-size:50px; margin-top:50px'> Game over </h1>";
       gameOverHtml+= "<h2 style='color:red;font-weight:bold; text-align:center; font-size:50px; margin-top:100px'> Your score is : " + quiz.score+"</h2>";
   var element=document.getElementById("quiz");
   element.innerHTML=gameOverHtml;
}
process();
