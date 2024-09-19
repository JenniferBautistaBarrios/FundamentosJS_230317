// Tipos de datos en JavaScript

// 1. Undefined
console.warn("--- Tipo de dato: UNDEFINED (indefinido)");
let cliente;
console.log(`El cliente es: ${cliente}`); // variable indefinida
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Jennifer Bautista";
console.log(`El cliente es: ${cliente}`); // variable definidad
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = 19227;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas


// 2. Boolean
console.warn("--- Tipo de dato: BOOLEAN (Boleano = true / false)");
let esPremium = "No lo sé";
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿El cliente es premium?: ${esPremium}`);
console.log(`Asignando el valor "true" a la variable.`);
esPremium = true;
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿El cliente es premium?: ${esPremium}`);
console.log(`Asignando el valor true a la variable.`);
if(esPremium) {
    console.log("El cliente pago por usar el servicio");
} else {
    console.log("El cliente que recibe los servicios gratuitos");
}
esPremium = false;
console.log(`Cambiando el valor de esPremium a: ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿El cliente es premium?: ${esPremium}`);
if(esPremium) {
    console.log("El cliente pago por usar el servicio");
} else {
    console.log("El cliente que recibe los servicios gratuitos");
}


// 3. Number
console.warn("--- Tipo de dato: NUMBER (Números, positivos, negativos, decimales, flotantes)");
var cantidad;
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;
let monto_transaccion;

console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos.`);
console.log(`El importe total de la venta es: ${(cantidad*costo_producto)}`);
saldo_cuenta = saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// El cliente realiza un abono de 1500
monto_transaccion = 1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`);



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
let numeroGrande3 = 123456789012345678901234567890;
let numeroGrande4 = 1234567890123456789012345678901234567890;

console.log(`El primer experimento de un número grande es: ${numeroGrande1}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande1)}`);
console.log(`El segundo experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El tercer experimento de un número grande es: ${numeroGrande3}, que ya no es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El cuarto experimento de un número grande es: ${numeroGrande4}, que ya no es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande4)}`);
//Para definir el tipo de dato BigInt debemos invocar la función BigInt o usar una letra "n" al final del numero en la asignación de valor.
console.log("Declaramos los valores númericos grandes tamaño...");
numeroGrande3 = BigInt(12345678901234567890123456789012345678901234567890);
numeroGrande4 = 12345678901234567890123456789012345678901234567890n;

console.log(`El quinto experimento de un número grande es: ${numeroGrande3}, y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El sexto experimento de un número grande es: ${numeroGrande4}, y su tipo de dato es: ${typeof(numeroGrande4)}`);
//Hay que considerar que los tipos de datos declarados como BigInt no son operables con los de tipo Number
let numero_a = 238;
//Si intentamos realizar una operación matemática entre estos dos tipos de datos, obtenemos un error de operación 
console.log(`El resultado de la operación: numeroGrande4/numero es igual a = ${numeroGrande4/BigInt(numero_a)}`);

const numeroGrande = BigInt(91199191991931237189382178919199191); //leer numeros enteros muy grandes
console.log(typeof numeroGrande);
let numero = 10;
let numero2 = 20;
console.log(numero + Number(numeroGrande)); //leer numeros enteros a conversion

numero = "30";
numero2 = 30;
console.log(typeof String(numero2));
console.log(typeof Number(numero));



// 6. Symbol
console.warn("--- Tipo de dato: Symbol (Simbolo o Forzar la Unicidad)");
//Declaramos diferentes variables con valores similares o iguales
const numero_1 = 2;
const numero_2 = 2.0;
const numero_3 = "2";
const numero_4 = "2.0";
const numero_5 = Symbol(2);
const numero_6 = Symbol(2.0);
const numero_7 = Symbol("2");
const numero_8 = Symbol("2.0");
const numero_9 = Symbol(2);
//Prueba de comparación 1
console.log("Prueba de comparación 1: ¿2 es igual a 2.0?");
if (numero_1 == numero_2) {
    console.log(`Se han comparado los valores 2 y 2.0, confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores 2 y 2.0, detectando que NO tienen el mismo valor.`);
}

//Prueba de comparación 2
console.log(`Prueba de comparación 2: ¿2 es igual a "2"?`);
if (numero_1 == numero_3) {
    console.log(`Se han comparado los valores 2 y "2", confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores 2 y "2", detectando que NO tienen el mismo valor.`);
}
//Prueba de comparación 3
console.log(`Prueba de comparación 3: ¿2 estrictamente es igual a "2"?`);
if (numero_1 === numero_3) {
    console.log(`Se han comparado los valores 2 y "2", confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores 2 y "2", detectando que NO tienen el mismo valor.`);
}                           // = Asignación
                            // == Igualdad de valor (valor)
                            // === Igualdad estricta (valor y tipo de dato)
//Prueba de comparación 4
console.log(`Prueba de comparación 4: ¿2 es igual a "2.0"?`);
if (numero_1 == numero_3) {
    console.log(`Se han comparado los valores 2 y "2.0", confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores 2 y "2.0", detectando que NO tienen el mismo valor.`);
}
//Prueba de comparación 5
console.log(`Prueba de comparación 5: ¿2 es estrictamente igual a "2.0"?`);
if (numero_1 === numero_4) {
    console.log(`Se han comparado los valores 2 y "2.0", confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores 2 y "2.0", detectando que NO tienen el mismo valor.`);
}
//Prueba de comparación 6
console.log(`Prueba de comparación 6: ¿2 es igual a Symbol(2)?`);
if (numero_1 === numero_5) {
    console.log(`Se han comparado los valores 2 y Symbol(2), confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores 2 y Symbol(2), detectando que NO tienen el mismo valor.`);
}
//Prueba de comparación 7
console.log(`Prueba de comparación 7: ¿Symbol(2) es igual a Symbol("2")?`);
if (numero_5 === numero_7) {
    console.log(`Se han comparado los valores Symbol(2) y Symbol("2"), confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores Symbol(2) y Symbol("2"), detectando que NO tienen el mismo valor.`);
}
//Prueba de comparación 8
console.log(`Prueba de comparación 8: ¿Symbol(2) es igual a Symbol(2)?`);
if (numero_5 === numero_9) {
    console.log(`Se han comparado los valores Symbol(2) y Symbol(2), confirmando que tienen el mismo valor.`);
} else {
    console.log(`Se han comparado los valores Symbol(2) y Symbol(2), detectando que NO tienen el mismo valor.`);
}
//Los valores de tipo Symbol() son valores unicos por lo que nunca resultara verdadera una comparacion entre este dato y cualqueir otro (incluso si sus valores son iguales)
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol);
console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());



// 7. Null
console.warn("--- Tipo de dato: NULL (Nulo o Vacío)");
//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacio, bajo su consentimiento, a diferencia de UNDEFINED que es un valor desconocido asignado por DEFAULT por JS
let nombreUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental = null;
let fechaUltimoPost;
//Supongamos que estamos programando una Red Social, tipo Facebook, en la que parte de la información se publicara en el perfil de usuario
//Si el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicación web, puede explorar contenido de acceso publico y no existira información para mostrar.
//En la UH (Historia de Usuario), que el usuario desea logearse debera ingresar su número telefonico o correo electrónico y una contraseña que deberemos guardar en las variables previamente declaradas
//Supongamos que el usuario: Diego M. con correo electrónico diego.miguel@gmail.com desea ingresar con su contraseña: pas1234
nombreUsuario = "JenniferBautistaBarrios@gmail.com";
passUsuario = "pas1234";
//En este momento de ejecución del sistema no sabemos su género, ni su estatus de relación sentimental.
console.log(`El usuario ${nombreUsuario} esta intentando logearse con una contraseña: ${passUsuario}`);
//Lo que prosigue es que el sistema cotejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzara la sesión en la plataforma actualizando estos valores.
//Dado que Diego es del genero Masculino, y denota que su estatus de relación no ha sido capturado o lo mantiene privado, esto generara la actualización de los valores de las variables:
generoUsuario = "F";
estatusRelacionSentimental = null;
console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su información de perfil podemos deducir que es del genero ${generoUsuario} y que su estatus de relación es: ${estatusRelacionSentimental} y su última publicación la realizo el: ${fechaUltimoPost}`);

const descuento = null;
console.log(typeof descuento);
