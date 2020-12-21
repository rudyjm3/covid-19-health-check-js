
//DISPLAY 1ST QUESTION ONLY

//WHEN QUESTION ANSWERED DISPLAY ANSWER INSIDE THE QUESTION AND SHOW THE NEXT // QUESTION
function answerDisplay (val){
  //let answer = document.getElementById('yes-btn no-btn').value;
  let answeredQuestion = document.getElementsByClassName('active-question')[0];
  let answeredBtns = document.getElementsByClassName('buttons-group')[0];
  if (val == "No") {
    alert("Great");
    document.getElementById('answer').innerHTML = "("+ val + ")";
    answeredQuestion.classList.add('answered-question');
    answeredBtns.classList.add('buttons-group-answered');
  } else {
    alert("No Good");
    document.getElementById('answer').innerHTML = "("+ val + ")";
    answeredQuestion.classList.add('answered-question');
    answeredBtns.classList.add('buttons-group-answered');
  }



  console.log(answer);

}



//IF WRONG ANSWER IS PICKED SHOW "FAILED ALERT TEXT"


// ONCE LAST QUESTION IS ANSWERED DISPLAY SUBMIT BUTTON SECTION AND SUBMIT alert (passed-alert-text)


// ONCE FROM IS SUBMITTED SHOW SUCCESS ALERT TEXT
