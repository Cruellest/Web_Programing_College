// Seleção de elementos
const elementoResultado = document.querySelector('.js-resultado');
const botaoAC = document.querySelector('.js-btn-ac');
const botaoMaisMenos = document.querySelector('.js-btn-mais-menos');
const botaoDeletar = document.querySelector('.js-btn-del');
const botoesPadroes = document.querySelectorAll('.js-btn-padroes');
const botaoResultado = document.querySelector('.js-btn-igual');


// Função que adiciona um número ou operador ao visor da calculadora
function adicionaAoVisor(valor) {
  elementoResultado.value += valor;
}

// Função que verifica se o usuário digitou mais de um operador seguido
function operadorSeguido() {
  const ultimoCaractere = elementoResultado.value.slice(-1);
  return ['+', '-', '*', '/'].includes(ultimoCaractere);
}

// Função que verifica se o usuário digitou mais de um ponto em um número
function pontoSeguido() {
  const partes = elementoResultado.value.split(/[+\-*/]/);
  const ultimoNumero = partes.pop();
  return ultimoNumero.includes('.');
}

// Função que verifica se o usuário digitou mais de um zero no início de um número
function zeroNoInicio() {
  const partes = elementoResultado.value.split(/[+\-*/]/);
  const ultimoNumero = partes.pop();
  return ultimoNumero === '0';
}

// Função que gerencia os eventos de clique nos botões da calculadora
function gerenciaClique(evento) {
  const botao = evento.target;
  const valor = botao.getAttribute('data-valor');

  if (valor === '.' && pontoSeguido()) return;
  if (valor === '0' && zeroNoInicio()) return;
  if (['+', '-', '*', '/'].includes(valor) && operadorSeguido()){
    elementoResultado.value = elementoResultado.value.slice(0, -1);
  }

  if (['+', '-', '*', '/'].includes(valor) && elementoResultado.value == '') return;

  if(['+', '-', '*', '/'].includes(valor) && elementoResultado.value.slice(-1) == '.'){
    alert("Não é possivel realizar a operação (Ponto seguido de Operador)");
    return;
  }

  adicionaAoVisor(valor);
}

// Função que gerencia os eventos de teclado na calculadora
function gerenciaTeclado(evento) {
    const tecla = evento.key;
  
    // Verifica se a tecla pressionada é um número, um operador, um ponto ou a tecla Enter
    if ((tecla >= '0' && tecla <= '9') || ['+', '-', '*', '/'].includes(tecla) || tecla === '.' || tecla === 'Enter' || tecla == 'Backspace') {
      // Se a tecla pressionada for um operador e o último caractere no visor já for um operador, não faz nada
      if (['+', '-', '*', '/'].includes(tecla) && operadorSeguido()) 
        elementoResultado.value = elementoResultado.value.slice(0, -1);
      
      // Se a tecla pressionada for um ponto e o último número já tiver um ponto, não faz nada
      if (tecla === '.' && pontoSeguido()) return;
      
      // Se a tecla pressionada for um zero e o último número for um zero no início, não faz nada
      if (tecla === '0' && zeroNoInicio()) return;
  
      // Se a tecla pressionada for a tecla Enter, calcula o resultado
      if (tecla === 'Enter') {
        elementoResultado.value = calculo();
        return;
      } 
      
      // Se a tecla pressionada for um sinal e o ultimo caracter tiver sido um ".", a operação é cancelada
      if(['+', '-', '*', '/'].includes(tecla) && elementoResultado.value.slice(-1) == '.'){
        alert("Não é possivel realizar a operação (Ponto seguido de Operador)");
        return;
      }
      
      // Se não houver valor nenhum e a tecla pressionada for um sinal, não realizar operação
      if (['+', '-', '*', '/'].includes(tecla) && elementoResultado.value == '') return;

      // Se a tecla pressionada for um Backspace, Apagar ultimo caracter
      if (tecla === 'Backspace')
        elementoResultado.value = elementoResultado.value.slice(0,-1);

      else {
        // Caso contrário, adiciona a tecla pressionada ao visor
        adicionaAoVisor(tecla);
      }
    }
}

function calculo(){
    let result = eval(elementoResultado.value)
    if (result == Infinity){;
        alert("Tu esta tentando realizar uma divisão por 0, por favor volte a escola");
        return elementoResultado.value;
    }

    else if (elementoResultado.value == '')
        return '';

return result;

}

// Adiciona o event listener ao objeto window para capturar os eventos de teclado
window.addEventListener('keydown', gerenciaTeclado);
  

// Adiciona event listeners aos botões
botaoAC.addEventListener('click', () => elementoResultado.value = '');
botaoMaisMenos.addEventListener('click', () => elementoResultado.value = -calculo());
botaoDeletar.addEventListener('click', () => elementoResultado.value = elementoResultado.value.slice(0, -1));
botoesPadroes.forEach(botao => botao.addEventListener('click', gerenciaClique));
botaoResultado.addEventListener('click', () => elementoResultado.value = calculo());

