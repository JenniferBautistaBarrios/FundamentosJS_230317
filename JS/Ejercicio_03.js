//Objetos
const bg = "linear-gradient(11deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 33%, rgba(0, 212, 255, 1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;
//VARIABLES INDEPENDIENTES
console.log("%c 1.- variables Independientes ", style_console);

//Declaramos valores independientes relacionadas a un Producto
let productoNombre = "Laptop Gamer 17.3\"";
let productoMarca = "ASUS ROG";
let productoModelo = "Strix G17";
let productoPrecio = 37000.00;
let productoDisponibilidad = true;
let productoSKU = Symbol("STRIXG17-HC570");
let productoStock = 50;
let productoImagen = null;
let productoBarcode;
let productoCategorias = ["Electrónicos", "Computación", "Gaming", "Promociones Buen Fin", "Mejor Valorados"];

//Accedemos a los valores de las carácteristicas del producto de manera independiente
console.log(`Los datos del Producto son: \n
    Nombre: ${productoNombre}, Tipo de dato <${typeof(productoNombre)}>
    Marca: ${productoMarca}, Tipo de dato <${typeof(productoMarca)}>
    Modelo: ${productoModelo}, Tipo de dato <${typeof(productoModelo)}>
    Precio: ${productoPrecio}, Tipo de dato <${typeof(productoPrecio)}>
    Disponibilidad: ${productoDisponibilidad}, Tipo de dato <${typeof(productoDisponibilidad)}>
    Stock: ${productoStock}, Tipo de dato <${typeof(productoStock)}>
    Barcode: ${productoBarcode}, Tipo de dato <${typeof(productoBarcode)}>
    Imagen: ${productoImagen}, Tipo de dato <${typeof(productoImagen)}>
    Categorias: ${productoCategorias}, Tipo de dato <${typeof(productoCategorias)}>`);
console.log("En el caso del SKU al ser un Symbol, no se puere concatenar a la cadena de impresión anterior");
console.log(productoSKU);
console.log(typeof(productoSKU));

//Ahora lo declaramos como un Objeto
console.log("%c 2.- Objeto ", style_console);

let Producto = {
    ID : 8876,
    Nombre : "Tenis Deportivos",
    Marca : "Nike",
    Modelo : "Air Max",
    Precio : 3499.99,
    Disponibilidad : false,
    Stock : 0,
    SKU : "ARM770-FX76177",
    Imagen : "../assets/products/airmax/model-07.jpg",
    Barcode : null,
    Categorias: ["Deportes", "Juvenil"]
}
//  Ahora leemos el Objeto completo
console.table(Producto);    

console.log("Accediendo a propiedades específicas del PRODUCTO");
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`);
console.log(`Precio: ${Producto.Precio}`);

if (Producto.Disponibilidad == 0)
    console.log(`Estatus: Agotado`);
else
    console.log(`Estatus: ${Producto.Stock} unidades disponibles`);

//Desustructuración de Objetos
console.log("%c 3.- Destructuración de Objetos", style_console);

let Producto2 = {
    Clave : 316,
    Nombre : "Bloqueador Solar",
    Marca : "Solarity",
    Modelo : "HJ-500",
    Precio : 999.99,
    Disponibilidad : true,
    Stock : 20,
    SKU : "OO771OP-66MK",
    Imagen : "../assets/productos/generales/Bloqueador-Solarity.jpg",
    Barcode : 765192773219,
    Categorias : ["Playa", "Bloqueador", "Unisex"]
}

let Comprador = {
    ID : 7712,
    Clave : 230260,
    Nombre : "Jennifer",
    Apellidos : "Bautista Barrios",
    Tipo : "Infrecuente",
    Correo : "jenniferBautistaBarrios@gmail.com",
    PaisOrigen : "Mexico",
    SaldoActual : 27000.00,
}

let Pedido = {
    ID : 7690,
    ProductoClave : 717,
    CompradorClave : 230260,
    Cantidad : 30,
    Estatus : "Carrito de Compra Lleno",
    TipoPago : "Tarjeta de Crédito"
}

//En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con su saldo a favor
let{Precio : ProductoPrecio2} = Producto2
let{Cantidad : PedidoCantidad} = Pedido;
let {SaldoActual : ClienteSaldoActual} = Comprador;
let CostoCompra = ProductoPrecio2 = PedidoCantidad;
console.log(`El cliente ha agregado a su carrito de compras ${PedidoCantidad} unidades, con un costo total de: $${CostoCompra}`);

if (CostoCompra<ClienteSaldoActual)
    console.log("El cliente tiene saldo suficiente.");
else
    console.log("El cliente no cuenta con saldo suficiente.");

//Actualizar el valor de los Objetos
console.log("%c 4.- Actualización de los valores de las propiedades de un Objeto", style_console);
console.log(`El objeto actualmente tiene los siguientes valores`);
console.log(JSON.stringify(Producto2, null, 2));

//Convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6915.50`);

//Para modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada
Producto2.Precio = 6915.50;
console.log(`Los nuevos valores del Producto son: `);
console.log(Producto2);

// ¿Puedo cambiar no solo el valor, sino el tipo de dato de un Objeto en JavaScript?
console.log(`-------------------------------------------------------`);
console.log(`El objeto actualmente tiene los siguientes valores`);
let tipoDisponibilidad = typeof(Producto2.Disponibilidad);
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`);
console.log(JSON.stringify(Producto2, null, 2));
Producto2.Disponibilidad = "Sí";
let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad);
console.log(Producto2);
console.log(`El nuevo tipo de dato de la disponibilidad es: ${typeof nuevoTipoDisponibilidad}`);
//Sí!!

//Agregar nuevas propiedades a un objeto existente
console.log(`%c 5.- Agregación de las propiedades de un Objeto (MUTABLE)`, style_console);
console.log("Objeto antes de ser modificado:");
console.table(Comprador);

//Agregando propiedades
Comprador['Direccion'] = "Av. 05 de Mayo #25, Interior 4A, Huauchinango, Puebla, Mexico";
Comprador['Tipo'] = "Premium";
Comprador['Estatus'] = "Inactivo";
Comprador['TotalCompras'] = 75;
console.log("Objeto después de ser modificado:");
console.table(Comprador);

//Eliminar propiedades de un objeto existentes
console.log(`%c 6.- Eliminar propiedades de un Objeto (MUTABLE)`, style_console);
console.log("Objeto antes de ser modificado:");
console.table(Pedido);

//Eliminamos la propiedad de TipoPago
delete Pedido['TipoPago'];

// delete Pedido.TipoPago;
console.log("Objeto después de ser modificado:");
console.table(Pedido);

console.log(`%c 7.- Métodos para controlar la mutabilidad de los objetos, Congelación (FREEZE)`, style_console);

//Si deseamos no permitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el metodo FREEZE (congelar)
console.log('La estructura actual del objeto Comprador es:');
console.table(Comprador);
Object.freeze(Comprador); //Freeze a objeto Comprador

//Intentaremos agregar, eliminar o modificar los valores d sus propiedades
Comprador.FechaUltimaCompra = "05/09/2024 10:15:25";
delete Comprador.Tipo;
Comprador.Direccion = "Calle 16 de Septiembre #102, Col. Manantiales, Huauchinango, Puebla, México";
console.log("Verificamos si se realizaron los cambios en el Objeto Comprador");
console.table(Comprador);


console.log(`%c 8.- Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL)`, style_console);

//Sin embargo, en el caso de que desearamos poder modificar los valores de las propiedades del Objeto, pero no su estructura, usaremos SEAL
console.log("Objeto antes de ser modificado:");
console.table(Pedido);

//Sellamos el objeto
Object.seal(Pedido);

//Intentamos modificar su estructura
Pedido['FechaPedido'] = "25/09/2024 11:05:03";
delete Pedido['Cantidad'];
console.log('Verificamos si se realizaron los cambios en el Objeto Pedido:');
console.table(Pedido);

//Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad = 5;
console.log('Verificamos si se realizaron los cambios en el Objeto Pedido:');
console.table(Pedido);



//Desestructuración de 2 o más Objetos
console .log(`%c 9.- Desestructuración de 2 o más Objetos`, style_console);
let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador;

//Transformar valores cuantitativos en cualitativos
if (productoPrecio>2000) {
    productoPrecio = "Caro";
} else {
    productoPrecio = "Barato";
}

if (clienteSaldo>0) {
    clienteSaldo = "A favor";
} else if (clienteSaldo<0) {
    clienteSaldo = "En contra";
} else {
    clienteSaldo = "Sin deuda"
}

//Transformar valores cualitativos en cuantitativos
let clienteNivel;
if (clienteTipo == "Premium")
    clienteNivel = 1;
if (clienteTipo == "Freemium")
    clienteNivel = 2;
if (clienteTipo == "No identificado")
    clienteNivel = 3;

//Clasificar al cliente por su País de Origen
if (clientePais == "Mexico") {
    clientePais = "Nacional";
} else {
    clientePais = "Extranjero";
}

//OLE - Object Literal Enhancement
let datosClientesPromociones = {clienteCorreo, clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio};

//El nuevo objeto que creeamos seria un ejemplo de la informacion que enviariamos al area de marketing para la difusión de promociones
console.log("Los datos del cliente y sus hábitos de compra son:");
console.table(datosClientesPromociones);



//Operaciones sobre Objetos
//Unión de Objetos
console.log("%c10.- Unión de Objetos usando el método de asignación (ASSING)", style_console);
console.log("Imprimimos la estructura y valores del objeto PRODUCTO");
console.table(Producto);
console.log("Imprimimos la estructura y valores del Objeto PEDIDO");
console.table(Pedido);

//Suponiendo que el usuarios ya realizó el pago el pedido se convertira en una VENTA que requiere información de ambos objetos
// ! IMPORTANTE: Assign, no solo permite la fusión de 2 o más objetos, tambien muta los objetos originales, perdiendo el valor original del ID en este caso 
let Producto3 = {...Producto};
const Venta = Object.assign(Producto3, Pedido);
console.table(Venta);

//Unión de Objetos usando SPREAD OPERATOR para evitar la perdida de información con objetos que comparten el mismo nombre en sus propiedades
console.log("%c11.- Unión de Objetos usando el SPREAD OPERATOR (...)", style_console);
        //Parchamos el error, reiniciando el valor del producto ID al original
        //Producto.ID = 100;

let Venta2 = {
    comprador : {...Comprador},
    producto : {...Producto},
    pedido : {...Pedido}
}
console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de información.");
console.log(Venta2);
console.table(Venta2);

console.log("%c12.- Mutabilidad POST Unión de Objetos", style_console);
//Vamos a verificar el estatus de mutabilidad de los objetos
console.log("Vamos a verificar el estatus de mutabilidad del objeto PEDIDO");
console.log(`Esta el objeto de Pedido Congelado?: ${Object.isFrozen(Pedido)}`);
console.log(`Esta el objeto de Pedido Sellado?: ${Object.isSealed(Pedido)}`);


console.log("Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR");
console.log(`Esta el objeto de Pedido Congelado?: ${Object.isFrozen(Comprador)}`);
console.log(`Esta el objeto de Pedido Sellado?: ${Object.isSealed(Comprador)}`);


console.log("Vamos a verificar el estatus de mutabilidad del objeto PRODUCTO");
console.log(`Esta el objeto de Pedido Congelado?: ${Object.isFrozen(Producto)}`);
console.log(`Esta el objeto de Pedido Sellado?: ${Object.isSealed(Producto)}`);

//Modificamos la estructura de producto, agregando una nueva propiedad
Producto['isLegacy'] = false;
console.table(Venta2);


 /* const producto1 = {
     Nombre:"Tablet 9\"",
     Marca:"Mac",
     Modelo:"iPad",
     CostoCompra: 11500.25,
     CostoVenta: 15400,
     Disponible: true,
     SKU: Symbol("RICD040330HPLVHGA8"),
     Colores: ["Blanco", "Negro", "Rosa", "Azul","Amarillo"]
 }
 //Imprimir el objeto
 console.log(producto1);
 //Los objetos se pueden imprimir en forma de tabla utilizando la funcion console.table
 console.table(producto1)
 //Acceder a las propiedades de un objeto
 console.warn("Leyendo las propiedades de un Objeto y sus tipos de datos")
 console.log(`Nombre del producto: ${producto1.Nombre}, que es del tipo: ${typeof(producto1.Nombre)}\n`+
 `Marca del producto: ${producto1.Marca}, que es del tipo: ${typeof(producto1.Marca)}`+
 `Marca del producto: ${producto1.Modelo}, que es del tipo: ${typeof(producto1.Modelo)}`+
 `Marca del producto: ${producto1.CostoCompra}, que es del tipo: ${typeof(producto1.CostoCompra)}`+
 `Marca del producto: ${producto1.CostoVenta}, que es del tipo: ${typeof(producto1.CostoVenta)}`+
 `Marca del producto: ${producto1.Disponible}, que es del tipo: ${typeof(producto1.Disponible)}`+
 `Marca del producto: ${String(producto1.SKU)}, que es del tipo: ${typeof(String(producto1.SKU))}`+
 `Marca del producto: ${producto1.Colores}, que es del tipo: ${typeof(producto1.Colores)}`)
 console.warn("--- Separacion ---");
 const producto = {
     nombre : "Tablet",
     precio : 300,
     disponible : true
 }
 console.log(producto);
 console.table(producto)
 console.log(producto.nombre);
 console.log(producto.precio);
 console.log(producto.disponible)
 //Destructuring
 const { nombre, precio, disponible } = producto;
 console.log(nombre);
 console.log(precio);
 console.log(disponible)
 //Object Literal Enhacement
 const autenticado = true;
 const usuario = "juan"
 // const nuevoObjecto = {
 //     autenticado : autenticado,
 //     usuario : usuario
 // }
 const nuevoObjecto = {
     autenticado,
     usuario
 };
 console.table(nuevoObjecto); */
