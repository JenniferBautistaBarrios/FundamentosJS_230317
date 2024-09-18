// Tipos de Datos en JS

// 1. Undefined - (Null)
console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = 19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);


//console.log(`El cliente ha realizado ${NumCompras} en este mes`);
//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// 2. BOOLEAN - Boleanos - TRUE/FALSE (Falso/Verdadero)

console.warn("--- Tipo de Dato: BOOLEAN - True/False")
let esPremium = "No lo se";
console.log(`¿Es el cliente Premium?: ${esPremium}`)
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)} `);

console.log(`Asignando el valor\"true\" a la variable. `)
esPremium="true"
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)} `);
console.log(`¿Es el cliente Premium?: ${esPremium}`);
console.log(`Cambiando el valor de le esPremium a false`)

esPremium=true
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)} `);
console.log(`¿Es el cliente Premium?: ${esPremium}`);
console.log(`Cambiando el valor de esPremium a false`)
esPremium=0

if(esPremium)
    console.log("El cliente pago por usar el servicio.")
else
    console.log("El cliente recibe los servicios gratuitos")

// 3. NUMBER (Números)

var cantidad;
const costo_producto = 10.50
let saldo_cuenta= -2500.40
let monto_transaccion;

console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes");
console.log(`Tu saldo al día de hoy es de ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)}`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta-(cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

// El cliente realiza uin abono de 1500

monto_transaccion=1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(monto_transaccion+saldo_cuenta)}`);

// 4. Strings (Cadenas de texto)
console.warn("--- Tipo de dato: Strings o Cadenas de texto");
const alumno = "Jennifer Bautista Barrios";
let producto = 'Monitor de 20 pulgadas';
console.log(`El producto es un ${producto}`);
console.log(`El nombre del alumno es ${alumno}, que es un tipo de dato ${typeof(producto)}`);

//Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones especificas como convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto} => ${producto.toUpperCase()}`);



// 5. BigInt (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o espaciales donde se requiere de una excelente precisión
console.warn("--- Tipo de dato: BigInt");
const numeroGrande1 = 1234567890;
const numeroGrande2 = 12345678901234567890;
const numeroGrande3 = 123456789012345678901234567890;
const numeroGrande4 = 1234567890123456789012345678901234567890;

console.log(`El primer experimento de un número grande es: ${numeroGrande1}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande1)}`);
console.log(`El primer experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El primer experimento de un número grande es: ${numeroGrande3}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El primer experimento de un número grande es: ${numeroGrande4}, que no es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande4)}`);
const numeroGrande = BigInt(91199191991931237189382178919199191); //leer numeros enteros muy grandes
console.log(typeof numeroGrande);
const numero = 10;
const numero2 = 20;
console.log(numero + Number(numeroGrande)); //leer numeros enteros a conversion

// const numero = "30";
// const numero2 = 30;
// console.log(typeof String(numero2));
// console.log(typeof Number(numero));



// 6. Symbol
console.warn("--- Tipo de dato: Symbol");
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol);
console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());



// 7. Null
console.warn("--- Tipo de dato: Null");
const descuento = null;
console.log(typeof descuento);