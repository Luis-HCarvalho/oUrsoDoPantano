var gameStartButton = 0;
function gameStart(event){
    gameStartButton = 1;
    players(event);
    gameScreen1.style.display= "none";
    gameScreen2.style.display = "block";
}






var score = [];
var scoreIndex = 0;
function players(event){
    let playerName = document.getElementById("inputPlayer");
    score[scoreIndex] = new Array(2);
    if (event.keyCode === 13 || gameStartButton === 1){
        if (playerName.value.length >= 3){
            score[scoreIndex][0] = playerName;
            scoreIndex++;
        }
        else{
            alert("O nome do jogador deve ter ao menos 3 letras");
        }
        alert(playerName.value);
        alert("scoreIndex: " + scoreIndex);
        playerName.value = "";
    }
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