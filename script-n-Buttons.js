var chosenButton;

//this function chooses a random number from 1 to the input value and creates the N buttons from which the user needs to choose (button 1 = 1, button 2 = 2, button 3 = 3, etc.)

function chooseRandomBtn() {
    const howManyButtons = parseInt(document.getElementById("inputNumber").value);
  if (howManyButtons <= 0) {
    document.getElementById("check").style.color = "red";
    document.getElementById("check").innerHTML = "Whoops! The number is too low, you need at least 2 buttons!";
  } else if (howManyButtons == 1) {
    document.getElementById("check").style.color = "red";
    document.getElementById("check").innerHTML = "Whoops! The number is too low, you need at least 2 buttons!";
  }
    else {
            chosenButton = Math.floor(Math.random() * howManyButtons) + 1;
        for(let i = 1; i <= howManyButtons; i++){
            $('#buttons').append(`
                <button type="button" id = "` + i + `" class="btn btn-primary" onclick = "return guessedBtn(` + i + `);">Button: ` + i + `</button>
            `);
        }
    }
}

//this function is checking if the button that was clicked by the user is the one that was chosen by the previous function

function guessedBtn(id) {
    if(id == chosenButton) {
    document.getElementById("check").style.color = "green";
    document.getElementById("check").innerHTML = "Check: You won!";
  }
  else{
      document.getElementById("check").style.color = "red";
    document.getElementById("check").innerHTML = "Check: You lost!";
  }
}

function restart() {
  location.reload();
}