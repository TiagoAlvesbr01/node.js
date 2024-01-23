console.log('Olá, mundo!')

// Criar a variavel com JS
var cliente ='Tiago'

//Imprimir na tela o texto e o conteudo variavel
console.log('cliente:' + cliente)

//Criar a variavel com JS
let valorProduto = 100
var valorDesconto = 42


// Incluir o arquivo com a funcao calcular desconto
let calcularDesconto = require('./modules/calcularDesconto')

// Utilizar a função calcular desconto
let valorFinal =  calcularDesconto(valorProduto, valorDesconto)

// Imprimir na tela o texto e o conteudo da variavel
console.log('Valor do produto com desconto: R$' + valorFinal)