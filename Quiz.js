var songs=[
  new Questions("Who's the singer?",["adam","bilel","sami","amin"],"amin"),
  new Questions("Who's the singer?",["Jennifer","Akon","Enrique","Adam"],"amin"),
  new Questions("Who's the singer?",["Miley","50Cent","Eminem","Drake"],"amin"),
  new Questions("Who's the singer?",["adam","bilel","sami","amin"],"amin"),
  new Questions("Who's the singer?",["adam","bilel","sami","amin"],"amin"),
];
var quiz=new Quiz(songs);

function populate(){
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
    	guess("btn"+ i, choices[i]);
    }
    showProgress();
	}
}

function guess(id, guess){
	var button=document.getElementById(id);
     button.onclick=function(){
      quiz.guess(guess);
      populate();
  };
}
function showProgress(){
   var currentQuestionNumber=quiz.questionIndex+1;
   var element=document.getElementById("progress");
   element.innerHTML="Question "+currentQuestionNumber+" of "+quiz.questions.length;
}


function showScores(){
   var gameOverHtml="<h1> Result </h1>";
       gameOverHtml+= "<h2 id='score'>Your score is : " + quiz.score+"</h2>";
   var element=document.getElementById("quiz");
   element.innerHTML=gameOverHtml;
}
populate();
