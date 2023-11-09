var submitBtn = $('.submit-btn');
var container = $(".container")

var questionsCollection = $('.question')
//console.log(questionsCollection);
var questionsArray = Array.from(questionsCollection);
//console.log(questionsArray);

submitBtn.on("click", gradeQuiz) //tells computer to do the function when the submit-button is clicked

function gradeQuiz(){
  event.preventDefault(); //Prevents  the form from refreshing after hitting the submit button
  var userName = $(".user-name").val();
  var score = 0;
    
questionsArray.forEach(function(input){

    if(input.checked){
      var answer = input.value 
          if(answer === "a"){
            score = score + 1
            }
          else if(answer === "b"){
              score = score + 2
            }
        else if(answer === "c"){
          score = score + 3
          }
        else if(answer === "d"){
          score = score + 4
          }
      } 
    }
  )  

 console.log(score);
  if(score>= 8){
    container.text(`${userName} you are so strong, reach to someone if you need support :)`)
  }
  else if(score >= 6){
    container.text(`${userName} hope you are doing ok, you got this!`)
  }
  else if(score >= 4){
    container.text(`${userName} keep pushing through, your doing great!`)
  }
  else if(score >= 2){
    container.text(`${userName} keep having an amazing day!`)
  }
}
