//itens
var morcego;
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
    morcego = false;
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
            else if(input.value == '2' && espadaMagica == true){
                changeScreen(event, salaoDoTrono, matouDragao);
                //titulo = Matador de Dragões
            }
        }
        else if (inputN === "inputDragaoAcordou"){
            if (input.value == '2' && proficiency == '3'){
                changeScreen(event, dragaoAcordou, derrotaCarismática);
                //titulo = Perdedor Carismático
            }
            else {
                changeScreen(event, dragaoAcordou, dragaoAtacou);
            }
        }
        else if (inputN === 'inputCalabouco'){
            if (input.value == '1'){
                changeScreen(event, calabouco, caminhoEsquerda);
            }
            else if (input.value == '2'){
                changeScreen(event, calabouco, caminhoDireita);
            }
            else {
                alert("Escolha invalida... tente  de novo!");
            }
        }
        else if (inputN === 'inputCaminhoEsquerda'){
            if (input.value == '1' || input.value == '2'){
                changeScreen(event, caminhoEsquerda, puzzleFechadura);
            }
            else if (input.value == '3'){
                morcego = true;
                changeScreen(event, caminhoEsquerda, puzzleMorcegoCapturado);
            }
            else if (input.value == '4'){
                changeScreen(event, caminhoEsquerda, calabouco);
            }
        }
        else if (inputN === 'inputPuzzle' || inputN === 'inputPuzzleMorcegoCapturado'){
            if ((input.value == '1' && proficiency == '1') || (input.value == '2' && proficiency == '2')){
                changeScreen(event, puzzleFechadura, genio);
                changeScreen(event, puzzleMorcegoCapturado, genio);
            }
            else if (input.value == '3'){
                changeScreen(event, puzzleFechadura, calabouco);
                changeScreen(event, puzzleMorcegoCapturado, calabouco);
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
            }
            else {
                changeScreen(event, caminhoDireita, caminhoDireitaParte2);
            }
        }
        else if (inputN === 'inputCaminhoDireitaParte2'){
            if (input.value == '1'){
                if (morcego == true){
                    changeScreen(event, caminhoDireitaParte2, necromancerComMorcego);
                }
                else{
                    changeScreen(event, caminhoDireitaParte2, necromancerSemMorcego);
                }
            }
            else if (input.value == '2'){
                changeScreen(event, caminhoDireitaParte2, calabouco);
            }
            else {
                alert("Escolha invalida... tente  de novo!");
            }
        }
        else if (inputN === 'inputNecromancer1' || inputN === 'inputNecromancer2'){
            if((input.value == '1' && proficiency == '3') || (input.value == '3' && morcego == true)){
                changeScreen(event, necromancerSemMorcego, genio);
                changeScreen(event, necromancerComMorcego, genio);
            }
            else if (input.value == '2') {
                changeScreen(event, necromancerSemMorcego, calabouco);
                changeScreen(event, necromancerComMorcego, calabouco);
            }
            else {
                alert("Escolha invalida... tente  de novo!");
            }
        }
        else if (inputN === 'inputGenio'){
            if (input.value == '1'){
                espadaMagica = true;
                changeScreen(event, genio, passagemSecreta1_espada);
            }
            else if (input.value == '2'){
                changeScreen(event, genio, desejoCoroa);
            }
            else if (input.value == '3'){
                changeScreen(event, genio, passagemSecreta2);
            }
            else if (input.value == '4'){
                changeScreen(event, genio, passagemSecreta1_bau);
            }
        }
        else if (inputN === 'inputPassagemSecreta1_espada' || inputN === 'inputPassagemSecreta1_bau' || 
        inputN === 'inputPassagemSecreta2'){
            if (input.value == '2'){
                changeScreen(event, passagemSecreta1_espada, salaoDoTrono);
                changeScreen(event, passagemSecreta1_bau, salaoDoTrono);
                changeScreen(event, passagemSecreta2, salaoDoTrono);
            }
            else if (input.value == '1'){
                changeScreen(event, passagemSecreta1_espada, startScreen);
                changeScreen(event, passagemSecreta1_bau, startScreen);
                changeScreen(event, passagemSecreta2, startScreen);
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