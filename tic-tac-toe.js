// Pseudocode
// Create 2 players 
// Choose X or O for each player
// Create a board
// Each player can populate a square when clicked
// Squares cannot be overwritten
// Evaluate a winner, if any
const Playerx = (name, marker) => {
    const sayName = () => console.log(`Hi, ${name}`);
    return {name, marker, sayName};
}

const player1 = Playerx(document.getElementById("name1").value, 'X');
const player2 = Playerx(document.getElementById("name2").value, 'O');

function setPlayer (selection) {
    if (selection === player1) {
        selection = player2;
        return selection;
    }  else if (selection === player2) {
        selection = player1;
        return selection;
    }
}

// Play one match successfully
const playGame = ((player) => {
    player = player1;
    const buttons = document.getElementsByClassName("gameButtons");
    for (i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function (e) {
            if (this.textContent) {
                return;
            }
            this.textContent = player.marker;
            if (winner() === 'Winner') {
                addOverLay(player);
                resetGame();
                return;
            }
            tieGame();
            player = setPlayer(player);
            player1.name = document.getElementById("name1").value;
            player2.name = document.getElementById("name2").value;
        });
    }
})();

// determine winner
function winner () {
    myArray = [];
    const buttons = document.getElementsByClassName("gameButtons");
    for (i=0; i<buttons.length; i++) {
        myArray[i] = buttons[i].textContent;
        console.log(myArray); 
    }
    if (myArray[0] === myArray[1] && myArray[1] === myArray[2] && myArray[2] !== '') {
        return 'Winner';
    } else if (myArray[3] === myArray[4] && myArray[4] === myArray[5] && myArray[5] !== '') {
        return 'Winner';
    } else if (myArray[6] === myArray[7] && myArray[8] === myArray[6] && myArray[6] !== '') {
        return 'Winner';
    } else if (myArray[0] === myArray[3] && myArray[3] === myArray[6] && myArray[6] !== '') {
        return 'Winner';
    } else if (myArray[1] === myArray[4] && myArray[4] === myArray[7] && myArray[7] !== '') {
        return 'Winner';
    } else if (myArray[2] === myArray[5] && myArray[5] === myArray[8] && myArray[8] !== '') {
        return 'Winner';
    } else if (myArray[0] === myArray[4] && myArray[4] === myArray[8] && myArray[8] !== '') {
        return 'Winner';
    } else if (myArray[2] === myArray[4] && myArray[4] === myArray[6] && myArray[6] !== '') {
        return 'Winner';
    } 
} 

// Determine tie game
function tieGame () {
    const buttons = document.getElementsByClassName("gameButtons");
    myArray = [];
    for (i=0; i<buttons.length; i++) {
        myArray += buttons[i].textContent;
    }
    let tieCheck = myArray.length === 9? 'tie': false;
    if (tieCheck === 'tie')  {
        addOverLay();
        resetGame();
    }
}

function resetGame () {
    const buttons = document.getElementsByClassName("gameButtons");
    for (i=0; i<buttons.length; i++) {
        buttons[i].textContent = '';
    }
    document.getElementById("name1").value = '';
    document.getElementById("name2").value = '';
}

function addOverLay(value) {
    if (value) {
    document.getElementById("text").textContent = `${value.name}, wins!`;
    document.getElementById("overlay").style.display = "block";
    } else {
    document.getElementById("text").textContent = `It's a Tie!`;
    document.getElementById("overlay").style.display = "block";
    }
  }
  
  function removeOverLay() {
    document.getElementById("overlay").style.display = "none";
  } 

