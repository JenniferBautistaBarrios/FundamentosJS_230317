
 //String o cadenas de texto  este tipo de dato se utiliza para declara variables del tipo de texto o cadena de texto
const alumno = "juan"
let producto = 'monitor 20 pulgadas'

const numero = "30"
const numero2 = 30
console.log(typeof numero)
console.log(typeof numero2)

//BigInt Se usa para declarar numeros muy granades

const numeroGrande = BigInt(12123445678654323456)
console.log(typeof numeroGrande)

const numero1 = 10
const numeroo2 = 20
console.log(numero + Number(numeroGrande))

const numerooo = "30"
const numerooo2 = 30

console.log(typeof String(numero2))
console.log(typeof Number(numero))

 Symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())

//Null  se utiliza para declarar variables con un valor nulo
const descuento = null
console.log(typeof descuento)