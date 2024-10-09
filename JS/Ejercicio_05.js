//Repaso de  ciclo y sentencias de control 

//Estimacion de nlos mensajes de salida 
const bg="Linear-grandient(11deg,199,36,1) 0%,rgba(129,255,26,1) 33%,rgba(191,255,26,1) 86%";
const style_console=`backgroud:${bg};color: white; border-radius; 6px; padding;4px; font-size; 1.0rem;font-weight:bold padding: 4px;font -size: 1.0rem; font-weight:bold`
// personalizacion de salida de un console 
console.warn("practica 07;Areglos de java Script")
console.log("%c1,-Condicionales -si7entonces ...(if)",style_console);
//Le indica al programas que hace o que no el base de una prueba logica y verdadera o falsa 
let fechaActual =new Date();
/*let fechaActual =new Date ("2025/05/06")*/
console.log(`Hola ,la fecha de hoy es :${fechaActual.toString()}`);
// y ¿si agregamos la necesidad de fomento local ?
const fechaLocal1mx =fechaActual.toLocaleString(`es -MX`,
    {
        weekday:`Long`,
        Year:`numeric`,
        Month:`Long`,
        day:`numeric`,
        hour:`numeric`,
        minute:`numeric`,
        Secound:`numeric`,
        hour12:false
    }
);
console.log(`en formato local(mexico):${fechaLocal1mx}`);
// si es antes de las doce saluda a un buenos dias 
if(fechaActual.getHours()<=6){
    console.log(`Estas en la primera mitad del año ,`);
}else{
    console.log(`Estas en la segunda mitad del año,`)
}
//que pas asi la validacion tiene varipos operaciones 
const anio=fechaActual.getFullYear();
 let inicioPrimavera =new Date(anio,2,21);
 let inicioverano  =new Date(anio,5,21);
 let inicioOtoño =new Date(anio,8,21);
 let inicioInvierno =new Date(anio,11,21);
 let estacion ;
 let horaVerano=false;
 if(fechaActual>=inicioPrimavera && fechaActual<inicioverano){
    console.log("Estacion en primavera ...")
    console.log("Iniciacion de la floracion de muchas palantas ...")
    console.log("Los dias son mas alrgos y las noches mas cortas...")
    console.log("Muchos animales despiertan de las hibernaciones...")
    estacion="Primavera"
    horarioVerano=true;
 }else if(fechaActual >-inicioverano && fechaActual< inicioOtoño){
    console.log("Estamos un Verano...")
    console.log("Esta es temporada de los abundantes soleados y calurosos ...")
    console.log("Esta es la temporada de el indice de el turismo vacacional sube...")
    console.log("Muchas gente busca realizar actividades al aire libre ...")
    estacion="verano"
    horarioVerano=true;
 }else if(fechaActual >- inicioOtoño && fechaActual<inicioInvierno){
    console.log("Estamos en Otoño...")
    console.log("los arboles suelen cambiar a follar ...")
    console.log("Se registran temperaturas mas tembladas ...")
    console.log("Los animales comenzaron con la reconciliazion de alimento y preparar sus espacios para la hibermentacion incluso ...")
    estacion="otoño"
    horaVerano=true;
 }else{
    console.log("Estamos en invierno...")
    console.log("En esta temporada los dias son mas cortos y lo de las noches  mas largos ...")
    console.log("En algunas regiones suele nevar...")
    console.log("Dando las bajas temperaturas , se recomienda abrigarse")
    estacion ="Invierno"
    horaVerano=false;
 }
 console.log("%c2.-Operador ternario (validacion?cumple:no_cumple",style_console);
 //En jacva escript exixte una operacion de implificacuion su validacion de 
 const edadPersona =20;
 const mayorEdadMX=18;
 const mayorEdaduS=21;
 let  evaluarMayorEdad =(edad)=>edad=>18>"Eres mayor de edad.";"No eres mayor de edad,"
 console.log("evaluado de la mayoria de edad de la persona ...")



 

    {} 