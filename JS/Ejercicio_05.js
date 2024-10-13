// Ejercicio 5
const bg ="linear-gradient(11deg, rgba(3,0,6,5) 0%, rgba(7,7,131,1) 23%, rgba(0,912,155,3) 86%)";

const style_console=`background:${bg}; color: white;border-radius: 6px; padding: 4px: font-size: 1.0rem; font-weight: bold`

console.warn ("--- Practica 07 Arreglos de JS ");

console.log("%c1.- Condicionales -Si/Entonces (IF)", style_console);

/* let fechaActual = new Date("2025/06/05");*/
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MS',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días

if(fechaActual.getHours()<12){
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`)
}

// Existe un extensor de la sentencia if(Sí) que es else (en caso contrario)
if(fechaActual.getMonth()<=6){
    console.log(`Estas en la primera mitad del año.`)
} else {
    console.log(`Estas en la segunda mitad del año.`)
}

// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();

let inicioPrimavera = new Date(anio, 2,21);
let inicioVerano = new Date (anio, 5,21);
let inicioOtonio = new Date(anio, 8,23);
let inicioInvierno = new Date(anio, 11,21);
let estacion;
let horarioVerano = false;

if (fechaActual>= inicioPrimavera && fechaActual<inicioVerano)
{
    console.log("Estamos en PRIMAVERA")
    console.log("Inicia la floración de muchas plantas...")
    console.log("Los días son más largos y las noches más cortas")
    console.log("Muchos animales despiertan de la hibernación...")
    estacion="Primavera";
    horarioVerano=true;
}
else if(fechaActual>=inicioVerano && fechaActual<inicioOtonio)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada los abundan los días Soleados y Calurososos...")
    console.log("En esta temporada el indicé de turismo vacacional sube...")
    console.log("Mucha gente busca realiar actividades al aire...")
    estacion="Verano";
    horarioVerano=true;
}
else if (fechaActual>=inicioOtonio && fechaActual<inicioInvierno)
{
    console.log("Estamos en OTOÑO...")
    console.log("Los árboles suelen cambiar de follaje")
    console.log("Se registrarán temperaturas más templadas")
    console.log("Los animales comienza con la recolección de alimento y prepraran sus espacios para la hibernación, incluso algunas aves migran.")
    estacion="Verano"
    horarioVerano=true;
}
else 
{
    console.log("Estamos en INVERINO...")
    console.log("En esta temporada los días  son más cortos y las noches más largas...")
    console.log("En algunas regiones suele nevar...")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse")
    estacion="Invierno"
    horarioVerano=false;
}

console.log("%c2.- Operador Ternario (validacion=cumple:no_cumple)",style_console);
// En Java Script exista una operación simplificada que valdia si una condición se cumple o no, y que hacer en cada caso

const edadPersona= 18;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;

let evaluarMayoriaEdad = (edad) =>
    edad>=19?"Eres mayor de edad.":"No eres mayor de edad."

console.log("Evaluando la mayoria de edad de una persona")
console.log(evaluarMayoriaEdad(edadPersona));

// Sin embargo tenemos que considerar que la mayoría de edad varia en cada áis por cuestiones legales, por lo que debemos considerar un segundo parámetro en la evaluación

evaluarMayoriaEdad = (edad,pais) =>
    (edad>=18 && pais==="MX")?`En ${pais} eres mayor de edad `:`En ${pais} No eres mayor de edad `;

console.log("Evaluando la mayoría de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoría de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.- Switch - CASE (Elección por valor definido)",style_console)

let asignaGeneracion = (anioNacimiento)=>{
    switch(true)
    {
        case(anioNacimiento<1968):
            return "Baby Boomers";
        case (anioNacimiento<1968 && anioNacimiento<=1980):
            return "Generación X";
        case (anioNacimiento>1980 && anioNacimiento<=1994):
            return "Milenials";
        case (anioNacimiento>1994 && anioNacimiento<=2010):
            return "Centenials";
        case (anioNacimiento>2010):
            return "Krystal";
    }
}

console.log(`Dado que naci en el año 2005 soy de la generación: ${asignaGeneracion(2005)}`)

console.log("%c4.- Manejo de Excepciones (TRY/CATCH)", style_console);
//En algunas existiran errores que no son culpa del programa, si no del usuario, la red, el S.O. o incluso de un middleware, pero que si duda debemos controlar para evitar las fallas de ejecuciòn.
// Caso de Prueba 1
console.log("Intentamos dividir: 0/10, el resultado es:")
try {
    let result = 0/10; //dividir 0 entre un entero
    console.log(result)
} catch(error) {
    console.log("Ocurrio un error: "+error.message);
}
// Caso de Prueba 2
console.log("Intentamos dividir: 10/10, el resultado es:")
try {
    let result = 10/10;
    console.log(result)
} catch(error) {
    console.log("Ocurrio un error: "+error.message);
}
// Caso de Prueba 3
console.log("Intentamos dividir: \"a\"/10, el resultado es:");
try {
    let result = "a"/10; //dividir una letra entre 0
    console.log(result)
} catch (error) {
    console.log("Ocurrio un error: "+error.message);
}
// Caso de Prueba 4
console.log("Intentamos dividir: la variable a / 10, el resultado es:");
try {
    let result = a/10; //dividir una variable no definida entre 0
    console.log(result);
} catch(error) {
    console.log("Ocurrio un error: "+error.message);
}
// Caso de Prueba 5
console.log("Intentamos dividir: el valor de la variable x / entre el valor de la variable y, el resultado es:");
try {
    let x=8, y=2, result = x/y;
    console.log(result);
} catch(error) {
    console.log("Ocurrio un error: "+error.message);
}
console.log("%c5.- Control de ciclos (BREAK / CONTINUE)", style_console);
//En algunas ocasiones serà importante detener un ciclo de manera abruptua para controlar casos especiales en un ciclo...
console.log("Vamos a contar del 1 al 10...")
for (let num=1; num<=10; num++) {
    console.log(num);
}
console.log("Ahora necesitamos lo siguiente: Si se llega a 7 pares de contar... suponiendo que solo por hoy es de mala suerte...")
for (let num=1; num<=10; num++) {
    if (num==7) {
        break;
    } else {
        console.log(num);
    }
}
console.log("Ahora necesitamos lo siguiente: Si se llega a 7 se salta ese nùmero y continua")
for (num=1; num<=10; num++) {
    if (num==7) {
        continue;
    }
    console.log(num);
}
console.log("%c6.- Ciclo Iterativo - (FOR)", style_console);
//Recorre de manera iterativa (i), de incremental o decremental
console.log("Los dias de la semana son en orden ascendente:")
let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
for (let i=0; i<dias.length; i++) {
    console.log(dias[i])
}
console.log("Ahora vamos a imprimir los meses en orden descendente...")
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (let i=meses.length-1; i>=0; i--) {
    console.log(meses[i]);
}
console.log("%c7.- Ciclo condicional - (WHILE)", style_console);
//Estos ciclos (BUCLE) dependen de una condiciòn para continuar ejecutandose
let finDeSemana = false;
let mensaje = "";
let j = 0;
while (j < dias.length) {
    switch (j) { //Usamos 'j' para que coincida con el ìndice
        case 0:
            finDeSemana = true;
            mensaje = "Hoy es Domingo... zzZ";
            break;
        case 1:
            finDeSemana = false;
            mensaje = "Hoy es Lunes";
            break;
        case 2:
            finDeSemana = false;
            mensaje = "Hoy es Martes";
            break;
        case 3:
            finDeSemana = false;
            mensaje = "Mitad de semana!";
            break;
        case 4:
            finDeSemana = false;
            mensaje = "Hoy es Jueves";
            break;
        case 5:
            finDeSemana = false;
            mensaje = "Hoy es Viernes";
            break;
        case 6:
            finDeSemana = true;
            mensaje = "Hoy es Sabado";
            break;
    }
    if (!finDeSemana) {
        console.log(`Dìa: ${dias[j]}`);
        console.log(`Mensaje del dìa: ${mensaje}`);
    }
        j++;
}
console.log("%c8.- Ciclo Condicionales, que se ejecutan al menos una vez - (DO-WHILE)", style_console);
// Simulamos una lista de episodios de una temporada
let episodios = [
    "Arco 1: La Era Dorada",
    "Arco 2: Espadachin Oscuro",
    "Arco 3: Los niños perdidos",
    "Arco 4: Fantasia",
    "Arco 5: Halcon Milenario"
];
let indice = 0;
let continuarViendo = true; // Esta variable simula la decision del usuario de continuar viendo
do {
    console.log(`Reproduciendo ${episodios[indice]}`);
    // Simulamos la reproducciòn del episodio
    indice++;
    if (indice<episodios.length) {
        continuarViendo = confirm("¿Deseas continuar con el siguiente arco?");
    } else {
        continuarViendo = false;
    }
} while (continuarViendo && indice < episodios.length);
console.log("Fin de la reproducciòn");
console.log("%c9.- Cìclos para recorrer elementos finitos - (FOR...OF)", style_console);
//Ciclo para recorrer objetos iterables còmo mapas, arreglos, cadenas y conjuntos de datos
let seriesTrending = [
    {nombre: "Invincible", temporadas: 3, totalView: "1.5M", totalReproducidas: "3.0M"},
    {nombre: "Stranger Things", temporadas: 4, totalView: "6.5M", totalReproducidas: "10M"},
    {nombre: "Hora de Aventura", temporadas: 10, totalView: "12M", totalReproducidas: "15M"},
    {nombre: "The Boys", temporadas: 3, totalView: "3.2M", totalReproducidas: "5M"},
    {nombre: "Loki", temporadas: 2, totalView: "3.5M", totalReproducidas: "6M"}
];
//Usando } ! {
for (let serie of seriesTrending) {
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
}
//! console.log(`La ultima serie leida fue: ${serie.nombre}`); //No va a funcionar por que la variable serie ya no existe ya que su alcance solo estuvo durante el ciclo
try {
    console.log(`La ultima serie leida fue: ${serie.nombre}`);
} catch(error) {
    console.log("Mensaje de error: "+error.message)
}
console.log("%c10.- Cìclos para recorrer las propiedades de elementos finitos - (FOR...IN)", style_console);
// Usando for...in para recorrer cada serie
for (let i in seriesTrending) {
    console.log(`Serie ${parseInt(i)+1}:`);
    for (let propiedad in seriesTrending[i]) {
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
    }
    console.log('------------------');
}
console.log("%c11.- Cìclos ininterrumpidos para cada uno de los elementos del arreglo - (FOR EACH)", style_console);
let seriesTrending2 = [
    {nombre: "Invincible", temporadas: 3, viewers: 8000000, reproducciones: 10000000},
    {nombre: "Stranger Things", temporadas: 4, viewers: 6000000, reproducciones: 10000000},
    {nombre: "Hora de Aventura", temporadas: 10, viewers: 12000000, reproducciones: 15000000},
    {nombre: "The Boys", temporadas: 3, viewers: 3200000, reproducciones: 5000000},
    {nombre: "Loki", temporadas: 2, viewers: 3500000, reproducciones: 6000000},
    {nombre: "The Walking Dead", temporadas: 16, viewers: 16000000, reproducciones: 36000000}
];
// Usando forEach para recorrer cada serie y calcular la calificaciòn
seriesTrending2.forEach((serie, index) => {
    let calificacion = (serie.reproducciones / serie.viewers).toFixed(2); // Calcula la calificacion y la redondea a 2 decimales
    console.log(`Serie: ${index+1}:`);
    console.log(`Nombre: ${serie.nombre}:`);
    console.log(`Temporadas: ${serie.temporadas}:`);
    console.log(`Viewers: ${serie.viewers}:`);
    console.log(`Reproducciones: ${serie.reproducciones}:`);
    console.log(`Calificaciòn: ${serie.calificacion}:`); // Muestra la calificaciòn
    console.log('--------------------');
});
// Usando Filter para filtrar, y mal para transformar la informaciòn
// Lista de series que queremos verificar
let seriesDeseadas = ["The Walking Dead", "Invincible", "The Boys"];
// Usando map e includes para filtrar y obtener los nombres de series con 3 temporadas
let seriesConTresTemporadas = seriesTrending2
    .filter(serie => serie.temporadas <= 3) // Filtramos las series que tienen 3 temporadas
    .map(serie => serie.nombre) // Obtenemos solo los nombres de esas series
    .filter(nombre => seriesDeseadas.includes(nombre)); // Filtramos las que estàn en la lista de series deseadas
// Mostrar los resultados
console.log("Series con 3 temporadas que estàn en la lista deseada: ");
console.table(seriesConTresTemporadas);