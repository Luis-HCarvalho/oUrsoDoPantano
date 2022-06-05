//items
var morcego;
var espadaMagica;


// (localStorage.length - 1) is the index of the current player

// set player leaderboards name and score
var playerNameStatus;
function players(){
    let playerName = document.getElementById("inputPlayer");

    // check if the player's chosen name is valid and place it in localStorage and leaderboards
    if (playerName.value.length >= 3){
        playerNameStatus = true; // the player's name is valid
        localStorage.setItem(playerName.value, "sem título"); //store the player's name

    }
    else{
        alert("O nome do jogador deve ter ao menos 3 letras");
    }
    playerName.value = "";
    
}


// change display from screen1 to screen2
function changeScreen(event, screen1, screen2){
    screen1.style.display= "none";
    screen2.style.display = "block";
}



// the button of game start works as a submit of the player's name and starts the game
function gameStart(event){
    //initialize items as false
    espadaMagica = false;
    morcego = false;

    players(); //check the player's name as valid or not and place it in the leaderboards

    if (playerNameStatus === true){ //if the player's name has 3 char minimum and the start button is pressed the game starts
        changeScreen(event, startScreen, oUrso);
        changeFocus('inputUrso');  
    }
    // set variables as false to prevent bugs if the game is played after a game over without refreshing the page
    gameStartButton = false;
    playerNameStatus = false;
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
            changeFocus('inputPortao');
        }
        else if (inputN === "inputPortao"){
                if ((input.value == '1') || (input.value == '4') || (input.value == '3' && proficiency != '1')){
                    changeScreen(event, oPortao, dentroDoCastelo_1);
                    changeFocus('inputCastelo1');
                }
                else {
                    changeScreen(event, oPortao, dentroDoCastelo_2);
                    changeFocus('inputCastelo2');
                }
        }
        else if ((inputN === "inputCastelo1") || (inputN === "inputCastelo2") || (inputN === "inputCastelo3")){
            if (input.value == '1'){
                changeScreen(event, dentroDoCastelo_1, salaoDoTrono);
                changeScreen(event, dentroDoCastelo_2, salaoDoTrono);
                changeScreen(event, voltarEntradaCastelo, salaoDoTrono);
                changeFocus('inputSalaoTrono');
            }
            else if (input.value == '2'){
                changeScreen(event, dentroDoCastelo_1, calabouco);
                changeScreen(event, dentroDoCastelo_2, calabouco);
                changeScreen(event, voltarEntradaCastelo, calabouco);
                changeFocus('inputCalabouco');
            }
            else {
                alert("Escolha invalida... tente  de novo!");
            }
        }
        else if (inputN === "inputSalaoTrono"){
            if ((input.value == '1') || (input.value == '2' && espadaMagica == false) || (input.value == '3' && proficiency != '4')){
                changeScreen(event, salaoDoTrono, dragaoAcordou);
                changeFocus('inputDragaoAcordou');
            }
            else if (input.value == '4'){
                changeScreen(event, salaoDoTrono, voltarEntradaCastelo);
                changeFocus('inputCastelo3');
            }
            else if(input.value == '3' && proficiency == '4'){
                changeScreen(event, salaoDoTrono, vitoriaFurtiva);
                changeFocus('inputPlayer');
                //titulo = Ladrão de Coroas
            }
            else if(input.value == '2' && espadaMagica == true){
                changeScreen(event, salaoDoTrono, matouDragao);
                changeFocus('inputPlayer');
                //titulo = Matador de Dragões
            }
        }
        else if (inputN === "inputDragaoAcordou"){
            if (input.value == '2' && proficiency == '3'){
                changeScreen(event, dragaoAcordou, derrotaCarismática);
                changeFocus('inputPlayer');
                //titulo = Perdedor Carismático
            }
            else {
                changeScreen(event, dragaoAcordou, dragaoAtacou);
                changeFocus('inputPlayer');
                //titulo = Morte por fogo
            }
        }
        else if (inputN === 'inputCalabouco'){
            if (input.value == '1'){
                changeScreen(event, calabouco, caminhoEsquerda);
                changeFocus('inputCaminhoEsquerda');
            }
            else if (input.value == '2'){
                changeScreen(event, calabouco, caminhoDireita);
                changeFocus('inputCaminhoDireita');
            }
            else {
                alert("Escolha invalida... tente  de novo!");
                changeFocus('inputCalabouco');
            }
        }
        else if (inputN === 'inputCaminhoEsquerda'){
            if (input.value == '1' || input.value == '2'){
                changeScreen(event, caminhoEsquerda, puzzleFechadura);
                changeFocus('inputPuzzle');
            }
            else if (input.value == '3'){
                morcego = true;
                changeScreen(event, caminhoEsquerda, puzzleMorcegoCapturado);
                changeFocus('inputPuzzleMorcegoCapturado');
            }
            else if (input.value == '4'){
                changeScreen(event, caminhoEsquerda, calabouco);
                changeFocus('inputCalabouco');
            }
        }
        else if (inputN === 'inputPuzzle' || inputN === 'inputPuzzleMorcegoCapturado'){
            if ((input.value == '1' && proficiency == '1') || (input.value == '2' && proficiency == '2')){
                changeScreen(event, puzzleFechadura, genio);
                changeScreen(event, puzzleMorcegoCapturado, genio);
                changeFocus('inputGenio');
            }
            else if (input.value == '3'){
                changeScreen(event, puzzleFechadura, calabouco);
                changeScreen(event, puzzleMorcegoCapturado, calabouco);
                changeFocus('inputCalabouco');
            }
            else if (input.value == '4'){
                alert("Escolha invalida... tente  de novo!");
            }
            else {
                alert("Você não conseguiu abrir a fechadura,\n tente um caminho diferente.");
            }
        }
        else if (inputN === 'inputCaminhoDireita'){
            if (input.value == '4'){
                changeScreen(event, caminhoDireita, calabouco);
                changeFocus('inputCalabouco');
            }
            else {
                changeScreen(event, caminhoDireita, caminhoDireitaParte2);
                changeFocus('inputCaminhoDireitaParte2');
            }
        }
        else if (inputN === 'inputCaminhoDireitaParte2'){
            if (input.value == '1'){
                if (morcego == true){
                    changeScreen(event, caminhoDireitaParte2, necromancerComMorcego);
                    changeFocus('inputNecromancer2');
                }
                else{
                    changeScreen(event, caminhoDireitaParte2, necromancerSemMorcego);
                    changeFocus('inputNecromancer1');
                }
            }
            else if (input.value == '2'){
                changeScreen(event, caminhoDireitaParte2, calabouco);
                changeFocus('inputCalabouco');
            }
            else {
                alert("Escolha invalida... tente  de novo!");
            }
        }
        else if (inputN === 'inputNecromancer1' || inputN === 'inputNecromancer2'){
            if((input.value == '1' && proficiency == '3') || (input.value == '3' && morcego == true)){
                changeScreen(event, necromancerSemMorcego, genio);
                changeScreen(event, necromancerComMorcego, genio);
                changeFocus('inputGenio');
            }
            else if (input.value == '2') {
                changeScreen(event, necromancerSemMorcego, calabouco);
                changeScreen(event, necromancerComMorcego, calabouco);
                changeFocus('inputCalabouco');
            }
            else {
                alert("Escolha invalida... tente  de novo!");
            }
        }
        else if (inputN === 'inputGenio'){
            if (input.value == '1'){
                espadaMagica = true;
                changeScreen(event, genio, passagemSecreta1_espada);
                changeFocus('inputPassagemSecreta1_espada');
            }
            else if (input.value == '2'){
                changeScreen(event, genio, desejoCoroa);
                changeFocus('inputPlayer');
            }
            else if (input.value == '3'){
                changeScreen(event, genio, passagemSecreta2);
                changeFocus('inputPassagemSecreta2');
            }
            else if (input.value == '4'){
                changeScreen(event, genio, passagemSecreta1_bau);
                changeFocus('inputPassagemSecreta1_bau');
            }
        }
        else if (inputN === 'inputPassagemSecreta1_espada' || inputN === 'inputPassagemSecreta1_bau' || 
        inputN === 'inputPassagemSecreta2'){
            if (input.value == '2'){
                changeScreen(event, passagemSecreta1_espada, salaoDoTrono);
                changeScreen(event, passagemSecreta1_bau, salaoDoTrono);
                changeScreen(event, passagemSecreta2, salaoDoTrono);
                changeFocus('inputSalaoTrono');
            }
            else if (input.value == '1'){
                changeScreen(event, passagemSecreta1_espada, startScreen);
                changeScreen(event, passagemSecreta1_bau, startScreen);
                changeScreen(event, passagemSecreta2, startScreen);
                changeFocus('inputPlayer');
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

// change the cursor location from one input to another
function changeFocus(inputFocus){
    document.getElementById(inputFocus).focus();
}