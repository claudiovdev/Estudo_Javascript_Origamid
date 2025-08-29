var pessoa = {
  nome: 'Claudio',
  sobreNome: 'Vinicius',
  idade: 36,
  nomeCompleto(){
    return `${this.nome} ${this.sobreNome}`
  }
}
console.log(pessoa.nomeCompleto())


var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E'
}

var bg = menu.backgroundColor;