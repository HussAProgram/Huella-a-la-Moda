function InicioDeSesion() {
    let NombreApellidoyCorreo = prompt("Brinde su nombre,apellido y su correo separado por una coma del nombre");
        alert("Los datos ingresados son:" + NombreApellidoyCorreo)
        console.log (NombreApellidoyCorreo);
}
InicioDeSesion();
const Carrito = [];
const Productos = {
    Prod1:"Campera de Invierno",
    Prod2:"Sombrero de Verano",
    Prod3:"Camiseta de Primavera",
    Prod4:"Zapatillas"
}
const IVA = 1.21;
const resultadoConIVA = (precio) => precio * IVA;
let TotalCarrito = 0
let ContinuarEnTienda = true
while (ContinuarEnTienda) {
    let Bienvenida = prompt(
        `Bienvenido a Huella a la Moda Virtual, eliga una de las siguientes opciones: 
        1-Ver productos 
        2-Ver carrito 
        ESC-Salir`
    );
    if (Bienvenida == 1) {
        let continuar = true;
        while (continuar) {
            let ElegirProducto = prompt(
                `Eliga que producto decide añadir al carrito:
                    1-Campera de Invierno $24.000 
                    2-Sombrero de Verano $15.000
                    3-Camiseta de Primavera $20.000 
                    4-Zapatillas $10.000
                    5-Volver al Menu
                    Recuerda que nuestros productos tienen IVA, este se vera reflejado en el carrito !`
            );
            if (ElegirProducto == 1) {
                Carrito.push ({ Prod1: "Campera de Invierno" });
                TotalCarrito += resultadoConIVA(24000);
            }  switch (ElegirProducto) {
                case "2":
                    Carrito.push ({ Prod2: "Sombrero de Verano" });
                    TotalCarrito += resultadoConIVA(15000)
                    break;
                case "3":
                    Carrito.push ({ Prod3: "Camiseta de Primavera" });
                    TotalCarrito += resultadoConIVA(20000)
                    break;
                case "4":
                    Carrito.push ({ Prod4: "Zapatillas" });
                    TotalCarrito += resultadoConIVA(10000)
                    break;
                case "5":
                    continuar = false
                    break;
            } 
        }
    } else if (Bienvenida == 2) {
        alert("El total del carrito es: $" + TotalCarrito);
        console.log (TotalCarrito);
        console.log(Carrito);
    } else if (Bienvenida.toLowerCase() == "esc" ) {
        alert ("Muchisimas gracias por su compra ! Que su perro vista a la moda !");
        ContinuarEnTienda = false;
    }
}

