let emptyArray = ["", "", "","", "", "","", "", "",]; // EMPTY ARRAY FOR RESETTING GAME

let choices = ["", "", "","", "", "","", "", "",];


function xChoice(num) {

  choices[num -1] = "X";

  if (num < 10 && num > 0 && choices[num -1] === "") {
    return choices[num -1] = "X";
  }else {
    return ("Place your choices between 1-9, please!")
  }

}



function oChoice(num) {
  choices[num -1] = "O";

  if (num < 10 && num > 0 && choices[num -1] === "") {
    return choices[num -1] = "O";
  }else {
    return ("Place your choices between 1-9, please!")
  }

}

function showBoard() {
  console.log( choices);

}

function resetGame() {
  return choices = emptyArray
}











  // all possible winning combinations//
