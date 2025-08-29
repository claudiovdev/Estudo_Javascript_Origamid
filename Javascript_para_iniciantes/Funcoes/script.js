// Crie uma função para verificar se um valor é Truthy
function isTruthy(dados){
  return !!dados;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobreNome){
  return `${nome} ${sobreNome}`
}

// Crie uma função que verifica se um número é par
function isEven(numero){
  var modulo = numero % 2;
  if(modulo === 0){
    return true;
  }else{
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado){
  return typeof dado;
};



