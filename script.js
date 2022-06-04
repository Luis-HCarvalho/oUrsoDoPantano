var espadaMagica;
// set player leaderboards name and score
var playerNameStatus = 0;
function players(event){
    let playerName = document.getElementById("inputPlayer");
    //let playerScore; // id of the tag list in the html
    //let scoreLi; // used to create li tags 
    if (gameStartButton === 1){
        if (playerName.value.length >= 3){
            playerNameStatus = 1;
            // achar uma forma de alterar o score "0"
            localStorage.setItem(playerName.value, 0);
            //create an elements li with the name and score in the pontuacao screen
            // problema na criação de tags li
            for (let i = 0; i < localStorage.length; i++){
                let playerScore = document.getElementById("playerScore");
                let scoreLi = document.createElement("li");
                
                scoreLi.textContent = localStorage.key(i) + " : " + localStorage.getItem(playerName);
                
                
                playerScore.appendChild(scoreLi);

                

                scoreLi.value = "";
                
            }
        }
        else{
            alert("O nome do jogador deve ter ao menos 3 letras");
        }
        playerName.value = "";
    }
}

// change display from screen1 to screen2
function changeScreen(event, screen1, screen2){
    screen1.style.display= "none";
    screen2.style.display = "block";
}


// função de ordenação das pontuações 



// fazer o botao de começar o jogo funcionar como um submit do nome do jogador
var gameStartButton = 0;
function gameStart(event){
    gameStartButton = 1;
    espadaMagica = false;
    players(event);
    if (playerNameStatus === 1){
        changeScreen(event, startScreen, oUrso);  
    }
    gameStartButton = 0;
}

var proficiency;
function submit(event, inputN){
    let input = document.getElementById(inputN);
    if (event.keyCode === 13){
        soundEffects(event, "inputSound");
        if ((input.value != '1') && (input.value != '2') && (input.value != '3') && (input.value != '4')){
            alert("Escolha invalida... tente  de novo!");
        }
        else if (inputN === "inputUrso"){
            proficiency = input.value;
            changeScreen(event, oUrso, oPortao);
        }
        else if (inputN === "inputPortao"){
                if ((input.value == '1') || (input.value == '4') || (input.value == '3' && proficiency != '1')){
                    changeScreen(event, oPortao, dentroDoCastelo_1);
                }
                else {
                    changeScreen(event, oPortao, dentroDoCastelo_2);
                }
        }
        else if ((inputN === "inputCastelo1") || (inputN === "inputCastelo2") || (inputN === "inputCastelo3")){
            if (input.value == '1'){
                changeScreen(event, dentroDoCastelo_1, salaoDoTrono);
                changeScreen(event, dentroDoCastelo_2, salaoDoTrono);
                changeScreen(event, voltarEntradaCastelo, salaoDoTrono);
            }
            else {
                changeScreen(event, dentroDoCastelo_1, calabouco);
                changeScreen(event, dentroDoCastelo_2, calabouco);
                changeScreen(event, voltarEntradaCastelo, calabouco);
            }
        }
        else if (inputN === "inputSalaoTrono"){
            if ((input.value == '1') || (input.value == '2' && espadaMagica == false) || (input.value == '3' && proficiency != '4')){
                changeScreen(event, salaoDoTrono, dragaoAcordou);
            }
            else if (input.value == '4'){
                changeScreen(event, salaoDoTrono, voltarEntradaCastelo);
            }
            else if(input.value == '3' && proficiency == '4'){
                changeScreen(event, salaoDoTrono, vitoriaFurtiva);
                //titulo = Ladrão de Coroas
            }
        }
        else if (inputN === "inputDragaoAcordou"){
            if (input.value == 2 && proficiency == 3){
                changeScreen(event, dragaoAcordou, derrotaCarismática);
                //titulo = Perdedor Carismático
            }
            else {
                changeScreen(event, dragaoAcordou, dragaoAtacou);
            }
        }
        input.value = "";
    }
    
}

//sound effects for buttons and inputs in the game
function soundEffects(event, sound){
    let audio;
    if (sound === "hoverSound"){
        audio = new Audio('mixkit-video-game-mystery-alert-234.wav');
        audio.play();
    }
    else if (sound === "clickSound"){
        audio = new Audio('mixkit-retro-game-notification-212.wav');
        audio.play();
    }
    else if (sound === "inputSound"){
        audio = new Audio('mixkit-arcade-bonus-alert-767.wav');
        audio.play();
    }
}