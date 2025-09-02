const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((e) => {
  console.log(e.toLocaleUpperCase());
});

carros.forEach(e => console.log(e.toLocaleLowerCase()));

const retornoForeach = carros.forEach(e => console.log(e.toLocaleLowerCase()));

console.log(retornoForeach);

const estados = ['sp', 'rj', 'mg', 'df'];

const novaArray = estados.map(e => {
  return e.toLocaleUpperCase()
});

console.log(novaArray)

const aulas = [
  {
    nome: 'Html 1',
    min: 15
  },
  {
    nome: 'Html 2',
    min: 10
  },
  {
    nome: 'Css 1',
    min: 20
  },
  {
    nome: 'Js 1',
    min: 25
  }
]

const tempoAulas = aulas.map(e => e.min);

console.log(tempoAulas);


const aulas2 = [
  {
    nome: 'Html 1',
    min: 15
  },
  {
    nome: 'Html 2',
    min: 10
  },
  {
    nome: 'Css 1',
    min: 20
  },
  {
    nome: 'Js 1',
    min: 25
  }
]

const reduceAulas = aulas.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item.min;
});

console.log(reduceAulas)