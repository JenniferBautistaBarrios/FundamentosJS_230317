// Objetos
const bg ="Linear-gradient(11deg,rgba(2,0,36,1) 0%,rgba (9,9,121,1)33%,rgba(0,212,255,1)86%)";
const style_console=`background:${bg};color: white; border-radius: Gpx ; padding; 4px ; font-size: 1.0rem; font-weight:bold`
console.warn("Practicas 05:Repasos de objetos de la aplicacion de java Script");
//variables independientes 
console.log("%c1.-Variables Independientes",style_console);
//Declaramos valores independientes relacionadas a ujn producto 
let producto_Nombre="Computadora Gammer Laptop 17\"";
let producto_Marca="Asus";
let producto_Modelo="Tuf 17";
let producto_Precio="15369.50";
let producto_Disponibilidad="True";
let producto_SKU=Symbol("TUF707VV-HX221W")
let producto_Stock =15;
let producto_Imagen="null";
let producto_Barcode;
let producto_Categorias=["Electronicos","Computacion","Gamming","Promociones Buen fin","Mejor Valorados"];

//Acendamos a los valores de las caracteristicas de  manejar a independientes 
console.log(` Los datos del Producto son: \n
nombre: ${Producto_nombre},Tipo de dato <${typeof(producto_Nombre)}>
Marca: ${Producto_marca},Tipo de dato <${typeof(producto_marca)}>
Modelo: ${producto_modelo},Tipo de dato <${typeof(producto_modelo)}>
Precio: ${producto_precio},Tipo de dato <${typeof(producto_precio)}>
Disponibilidad:${producto_Disponibilidad},Tipo de dato
<${typeof(Producto_disponibilidad)}>
stock:${Producto_stock},Tipo de dato <${typeof(producto_Stock)}>
Barcode:${producto_Barcode},tipo de dato<${typeof(producto_Barcode)}>
Imagen:${producto_Imagen},tipo de dato<${typeof(producto_Imagen)}>
Categorias:${producto_Categorias},tipo de dato
<${typeof(producto_Categorias)}>`);
console.log(typeof(producto_SKU));
//Ahora lo declaramos como un objeto
console.log("%c2.-objeto",style_console);
let producto =
{
    Nombre :"Zapatos de balet",
    Marca:"Jb",
    Modelo:"famosa 2024",
    Precio:500.60,
    Disponible:"no",
    Stock:0,
    SKU:"DLLAAA-19",
    iMAGEN:"../assets/products/sneakers/JORDAN.png",
    Barcode:null,
    categorias:["Zapatos de balet","Juventul"]    
}
//Ahora leemos el objeyo completo 
console.table(producto)

console.log("Acendimos a las propiedades especificas del producto");
console.log(`Nombre completo del producto: ${producto,nombre} ${Producto,marca} ${producto.modelo}`);
console.log(`Precio:${producto.precio}`);
if( producto_Disponibilidad ==0)
    console.log(`Estatus`)

// const {nombre, precio, disponible} = producto;
// console.log(nombre);
// console.log(precio);
// console.log(disponible);

// // Object Literal Enhancement
// const autenticado = true;
// const usuario = "Juan";
// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario: usuario
// } /*or
// const nuevoObjeto {
//     autenticado,
//     usuario
// } */

// console.table(nuevoObjeto);
