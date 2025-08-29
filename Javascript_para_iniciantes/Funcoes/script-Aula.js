function areaQuadrada(lado){
  return lado * lado;
}

console.log(areaQuadrada(2));

function pi(){
  return 3.14;
}

var total = pi();

console.log(total)
console.log(pi)

function imc(peso, altura){
  var imc = peso / (altura * altura)
  return imc;
}

console.log(imc(80, 1.8))

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Eu gosto do céu';
  }else{
    return 'Eu não gosto de cores';
  }
}

console.log(corFavorita('azul'));

addEventListener('click', function(){console.log('Oi')});

function terceiraIdade(idade){
  if(typeof idade !=='number'){
    return 'Informe a sua idade!';
  }else if(idade >= 60){
    return true;
  }else{
    return false;
  }
}

console.log(terceiraIdade('casa'));

function faltaVisitar(paisesVisitados){
  var totalPaises = 193;

  return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

console.log(`${faltaVisitar(100)}`);


