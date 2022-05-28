//change display from screen1 to screen2
function changeScreen(event, screen1, screen2){
    screen1.style.display= "none";
    screen2.style.display = "block";
}


/*function scoreScreen(event, pName){
    let elPlayerScore= document.getElementById("playerScore");
    let listOfPlayers = document.createElement("li");
    let pScore = String(pName);
    listOfPlayers.appendChild(pScore);
}*/


var score = [];
var scoreIndex = 0;
var playerNameStatus = 0;
function players(event){
    let playerName = document.getElementById("inputPlayer");
    score[scoreIndex] = new Array(2);
    if (event.keyCode === 13 || gameStartButton === 1){
        if (playerName.value.length >= 3){
            score[scoreIndex][0] = playerName;
            scoreIndex++;
            playerNameStatus = 1;
        }
        else{
            alert("O nome do jogador deve ter ao menos 3 letras");
        }
        alert(playerName.value);
        alert("scoreIndex: " + scoreIndex);
        playerName.value = "";
    }
}


var gameStartButton = 0;
function gameStart(event){
    gameStartButton = 1;
    players(event);
    if (playerNameStatus === 1){
        changeScreen(event, gameScreen1, gameScreen2);  
    }
    gameStartButton = 0;
}


function submit(event, inputN){
    let input = document.getElementById(inputN);
    if (event.keyCode === 13){
        if ((input.value != '1') && (input.value != '2') && (input.value != '3') && (input.value != '4')){
            alert("Escolha invalida... tente  de novo!");
        }
        else{
            alert(input.value);
        }
        input.value = "";
    }
    input.value = "";
}