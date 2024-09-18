//comentarios de una sola linea 


/* comentarios multilinea
*/

// Ejercicios 01 :declaracion de variables 

// a) VAR 

var miNombre ="Jennifer" 
var misApellidos;
var miEdad= 19

     //El objeto console nos permite enviar datos a la terminal y poder visualizar el valor de la variable o tambien el resultado de una funci+on o metodo
     console.warn("---Declaración de variables usando: VAR");
     console.log("Intentando leer las variables: ",miNombre, misApellidos);

     //console
misApellidos ="Bautista Barrios"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas:",miNombre,misApellidos);
 
//Una variable puede cambiar en el proceso de ejecución del programa

// b) CONST
     console.warn("---Declaracion de variables del tipo constante usando:CONST")
     const miUniversidad ="UT Xicotepec";
     const miMatricula=230317
     console.log("Hola,",miNombre," ",misApellidos,"se que se estudias actualmente en:",miUniversidad, "asignaron la matricula: ",miMatricula,"y tienes una edad de :",miEdad,"años.");
     
     //para saber el tipo de datos de la variable o constante podemos utilizar la  funcion type0f()
      console.log("Analizando los datos puede decir que ")
      console.log("miNombre es de tipo:",typeof(miNombre))
      console.log("misApellidos es del tipo:",typeof(misApellidos))
      console.log("miUniversidad es del tipo:",typeof(miUniversidad))
      console.log("miEdad es del tipo:",typeof(miEdad))
      console.log("miMatricula es del tipo: ", typeof(miMatricula))

// c) LET
let miFechaNacimiento = "2005-08-10";
let miColorFavorito;

      console.warn("---Declaracion de variable locales usando : Let")
      console.log("Genial,te voy conociendo mejor,ahora se que tu naciste el:",miFechaNacimiento,"y tu color favorito es: mmmm dejame pensar....")
       miColorFavorito = "Azul"
       console.log(`Creo que es ${miColorFavorito}, le atiné?`) //alt + 96 para usar " ` " y se usa para la interpolacion. Interpolacion se le conoce a la manera de mezclar textos fijos con el valor actual de las variables

       console.log("Analizando los datos puedo deducir que: ")
       console.log("miFechaNacimiento es del tipo: ", typeof(miFechaNacimiento))
       console.log("miColorFavorito es del tipo: ", typeof(miColorFavorito))
       
       // " ` " se le conoce como backtic Esto se utiliza para interpolar.
       // [] se les conoce como Brackets
       // {} se les conoce como Curly Brackets
       // DEBUG se le conoce como DEPURAR
       // DOM Document Object Model     
     
     