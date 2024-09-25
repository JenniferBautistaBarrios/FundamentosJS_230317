// Repaso de objetos

const bg= "linear-gradient(11deg, rgba(2,0,36,1)0%, rgba(9,9,121,1)33%, rgba(0,212,255,1)86%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`


// Personalización de las Salidas a Consola
console.warn("Practica 05: Repaso de Objetos en JavaScript");

// Variables independientes
console.log("%c1.- Variables independientes", style_console);

// Declaramos valores independientes relacionados a un producto

let Producto_Nombre = "Computadora Gamer Laptop 17\"";
let Producto_Marca = "Asus";
let Producto_Modelo = "TUF 17";
let Producto_Precio = 15749.50;
let Producto_Disponibilidad = true;
let Producto_SKU=Symbol("TUF707VV-HX221W");
let Producto_Stock = 15;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categorias= ["Electronicos", "Computación","Gaming", "Promociones Buen Fin", "Mejor Valoradps"]


// Accedemos a los valores de las caracteristicas del producto de manera independiente
console.log(`Los datos del producto son : \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);

    console.log("En el caso de SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

    // Ahora lo declaramos como un objeto
    let Producto = {
        Nombre : "Tenis Deportivos",
        Marca : "Nike",
        Modelo : "Jordan 24",
        Precio : 3361.25,
        Disponibilidad : false,
        Stock : 0,
        SKU: "DZ5485-612",
        Imagen : "../Assets/products/sneakers/Jordan.png",
        Barcode : null,
        Categorias : ["Deportes", "Juvenil"]
    }

    // Ahora leemos el objeto completo
    console.log("%c2.- Objeto", style_console);

    console.table(Producto)

    // Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer

    console.log("Accediendo a propiedades especificas del PRODUCTO")
    console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`);
    console.log(`Precio: ${Producto.Precio}`);
    if(Producto.Disponibilidad == 0){
        console.log(`Estatus: Agotado`);
    }else{
        console.log(`Estatus: ${Producto.Stock} unidades disponibles.`);
    }
   
    console.log("%c3.- Deestructuración de Objetos", style_console);

    let Producto2 = {
        Clave : 316,
        Nombre : "Lentes para Sol",
        Marca : "Oakley",
        Modelo : "QTMN Kato",
        Precio : 6829.00,
        Disponibilidad : true,
        Stock : 5,
        SKU: "009481D-0356",
        Imagen : "../Assets/products/sunglasses/KatoRed.png",
        Barcode : 888392491626,
        Categorias : ["Deportes", "Lentes", "Hombre", "Accesorios"]
    }
    
    let Comprador = {
        Clave : 3216,
        Nombre : "Abishai",
        Apellidos: "Flores Campos",
        Tipo: "Frecuente",
        Correo : "AprendienteAcademico05@gmail.com",
        PaisOrigen : "México",
        Saldo_Actual: 14000.00
    }
   
    let Pedido = {
        Producto_Clave: 316,
        Comprador_Clave : 3216,
        Cantidad: 2,
        Estatus: "Carrito de Compra",
        TipoPago: "Tarjeta de Crédito"
    }

    // En base a los tres objetos necesarios calcular el costo de la compra y si le alcanza con su saldo a favor
let {Precio: ProductoPrecio } = Producto2;
let {Cantidad: Pedido_Cantidad } = Pedido;
let {Saldo_Actual: Saldo_Actual} = Comprador;
let Costo_Compra = ProductoPrecio*Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras  ${Pedido_Cantidad} unidades, con un costo total de: ${(Costo_Compra)}`)

if(Costo_Compra< Saldo_Actual){
console.log("El  cliente tiene el saldo suficiente");
}else{
    console.log("El  cliente NO tiene el saldo suficiente");
}

// Actualizar el valor de los objetos

console.log("%c4.- Actualización de los valores de las propiedades de un Objeto", style_console);

console.log(`El objeto actulmenbte tiene los siguientes valores: `);
console.log(JSON.stringify(Producto2,null, 2));
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado.... de $6,829.00 a $6,915.50`)


// Para modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseaada

Producto2.Precio=6915.50;
console.log(`Los nuevos valores del producto son: `);
console.log(Producto2);

// ¿Puedo cambiar no solo el valor, s no el tipo de dato de un objeto de JavaScript?
console.log(`El Objeto actualmente tiene los siguientes valores`)
var tipoDisponibilidad = typeof(Producto.disponibilidad)
console.log(`El  tipo de dato de la disponibilidad es ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2,null, 2)); // Disponibilidad Booleano
Producto2.Disponibilidad="Si";
let nuevotipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El nuevo tipo de dato de la Disponibilidad es: ${nuevotipoDisponibilidad}`);



// Agregar nuevas propiedades al objeto

console.log("%c5.- Agregar nuevas propiedades al Objeto", style_console);

// Para agfregar una nueva propiedad utilizaremos el nombre del Objeto los corchetes [] y el nuevo de la propiedad de su valor por defecto.
console.log("Los datos actuales del Comprador son: ")
    console.table(Comprador);

Comprador['Direccion']= "Av. Benito Juárez, No. 1525, Interior 4D, Xixotepec de Juárez, Puebla, México";
Comprador['Tipo']="Nuevo Cliente"
Comprador['ActividadReciente']= true
Comprador['TotalCompras']= 3516.25
console.log("Despues de haber agregado las propiedades Dirección, Tipo, ActividadReciente y TotalCompras... ")
console.table(Comprador);

//ERliminar propiedades existentes al Objeto
console.log("%c6.-Eliminar las propiedades existentes de un Objeto", style_console);
console.log("La estructura y vbalores dfel producto del Objeto PEDIDO previos a la m0odificación")
console.table(Pedido)
delete Pedido.TipoPago
console.log("Despues de la modificación... ")
console.table(Pedido)
