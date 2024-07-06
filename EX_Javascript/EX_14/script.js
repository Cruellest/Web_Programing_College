/*
 *  Script com a lógica do Jogo da Velha
 *  Ele possui o esqueleto dos método essenciais.
 *
 *  DICAS GERAIS:
 *  - Modifique este arquivo o quanto for necessário.
 */

/*Declaração de uma variável que retorna uma lista de elementos presentes no documento 
* que coincidam com o grupo de seletores especificado. 
O objeto retornado é uma NodeList.  
*/
const cells = document.querySelectorAll(".cell");

//Variável que retorna o valor selecionado do statusText
const statusText = document.querySelector("#statusText");

/*Insira aqui as condições de vitória, para isso utilize a lógica do funcionamento
 * do jogo da velha
 */
const winConditions = [[0,1,2],
                       [3,4,5],
                       [6,7,8],
                       [0,4,8],
                       [2,4,6],
                       [0,3,6],
                       [1,4,7],
                       [2,5,8]];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

// Chamada da função para inicializar o jogo
initializeGame();

// Insira aqui a função para a inicialização do jogo
function initializeGame() {
    cells.forEach((cell,index) => {
    cell.textContent = "";
    cell.addEventListener("click", () => cellClicked(index), {once: true})});
    
    statusText.textContent = `Vez do Jogador ${currentPlayer}`;
    
   
    
}

// Função para a verificação do clique para adicionar o valor e verifica o vencedor.
function cellClicked(index) {
    if (!running || options[index] !== "") 
        return;

    options[index] = currentPlayer;
    updateCell(cells[index],index);

    if(checkWinner()){
        running = false;
        statusText.textContent = `Jogador ${currentPlayer} Venceu !`;
    }

    else if (options.every(option => option !== "")) {
        running = false;
        statusText.textContent = "Empate!";
    }

    else{
        changePlayer();
    }
    console.log(running)
}

// Função para atualizar visualização da informação
function updateCell(cell, index) {
    cell.textContent = options[index];
}

// Função para escolha e alternância de jogadores
function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Vez do Jogador ${currentPlayer}`
  
}

//Função para verificar o vencedor
function checkWinner() {
    return winConditions.some(condition => condition.every(index => options[index] === currentPlayer));
}

// Função para resert das informações da tela
function restartGame() {

    options = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    running = true;

    initializeGame();
}
