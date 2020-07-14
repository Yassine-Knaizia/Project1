function Quiz(questions){
	this.score=0;
	this.questions=questions;
	this.questionIndex=0;
}
function Questions(text, choices, answer){
  this.text=text;
  this.choices=choices;
  this.answer=answer;
}
Quiz.prototype.getQuestionsIndex=function(){
	return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded=function(){
	return this.questions.length===this.questionIndex;
}
Quiz.prototype.match=function(answer){
   if(this.getQuestionsIndex().correctAnswer(answer)){
   	this.score++;
   }
     this.questionIndex++;
}
Questions.prototype.correctAnswer=function(choice){
  return choice===this.answer;
}
var audio = document.querySelector('audio');
if (audio) {
  window.addEventListener('keydown', function (event) {
    var key = event.which || event.keyCode;
    if (key === 32) { 
      event.preventDefault();
      audio.paused ? audio.play() : audio.pause(); 
    }
  });
}
