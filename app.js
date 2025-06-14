let Cookies = localStorage.getItem("Cookies");
if (!Cookies) {
    Cookies = prompt(`¿Aceptar cookies? (Si / No)`);
    if (Cookies) {
        localStorage.setItem("Cookies", Cookies);
    }
}
const Carrito = [];
const Productos = {
    Prod1:"Campera", Valor1:24000,
    Prod2:"Sombrero", Valor2:15000,
    Prod3:"Zapatilla", Valor3:10000
}
const IVA = 1.21;
const resultadoConIVA = (precio) => precio * IVA;
let TotalCarrito = 0;

let BotonDeTotal = document.getElementById("BotonCarrito");
BotonDeTotal.addEventListener("click",function MostrarCarrito(){
        if (Carrito.length === 0) {
            alert("Tu carrito está vacío. Agregá productos antes de comprar.");
            return;
        } else {
            alert ("El contenido del carrito es:" + Carrito) 
            alert("El total de su carrito es: $" + TotalCarrito);
        }
    })

let Campera = document.getElementsByClassName("ComprarCampera");
Campera[0].addEventListener("click", function ComprarCampera(){
    Carrito.push ({ Prod1: "Campera" });
    TotalCarrito += resultadoConIVA(24000);
})
Campera[1].addEventListener("click", function ComprarCampera(){
    Carrito.push ({ Prod1: "Campera" });
    TotalCarrito += resultadoConIVA(24000);
})
Campera[2].addEventListener("click", function ComprarCampera(){
    Carrito.push ({ Prod1: "Campera" });
    TotalCarrito += resultadoConIVA(24000);
})

let Zapatilla = document.getElementsByClassName("ComprarZapatilla");
Zapatilla[0].addEventListener("click", function ComprarZapatilla(){
    Carrito.push ({ Prod2: "Zapatilla" });
    TotalCarrito += resultadoConIVA(10000);
})
Zapatilla[1].addEventListener("click", function ComprarZapatilla(){
    Carrito.push ({ Prod2: "Zapatilla" });
    TotalCarrito += resultadoConIVA(10000);
})
Zapatilla[2].addEventListener("click", function ComprarZapatilla(){
    Carrito.push ({ Prod2: "Zapatilla" });
    TotalCarrito += resultadoConIVA(10000);
})

let Sombrero = document.getElementsByClassName("ComprarSombrero");
Sombrero[0].addEventListener("click", function ComprarSombrero(){
    Carrito.push ({ Prod3: "Sombrero" });
    TotalCarrito += resultadoConIVA(15000);
})
Sombrero[1].addEventListener("click", function ComprarSombrero(){
    Carrito.push ({ Prod3: "Sombrero" });
    TotalCarrito += resultadoConIVA(15000);
})
Sombrero[2].addEventListener("click", function ComprarSombrero(){
    Carrito.push ({ Prod3: "Sombrero" });
    TotalCarrito += resultadoConIVA(15000);
})

const productosDisponibles = [
    { nombre: "Campera de Invierno", precio: 24000 },
    { nombre: "Botas de Invierno", precio: 10000 },
    { nombre: "Gorro de Invierno", precio: 15000 },
    { nombre: "Campera de Primavera", precio: 24000 },
    { nombre: "Zapatillas de Primavera", precio: 10000 },
    { nombre: "Gorro de Primavera", precio: 15000 },
    { nombre: "Campera de Verano", precio: 24000 },
    { nombre: "Ojotas de Verano", precio: 10000 },
    { nombre: "Sombrero de Verano", precio: 15000 },
];

const buscadorInput = document.getElementById("buscador");

buscadorInput.addEventListener("input", () => {
    const texto = buscadorInput.value.toLowerCase();
    const productos = document.querySelectorAll("section.imagesFlex div");

    productos.forEach(producto => {
        const titulo = producto.querySelector("h3").textContent.toLowerCase();
        if (titulo.includes(texto)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
});

const btnSesion = document.getElementById("btnIniciarSesion");
const formularioSesion = document.getElementById("formularioSesion");
const btnEnviarSesion = document.getElementById("btnEnviarSesion");

btnSesion.addEventListener("click", () => {
    formularioSesion.style.display = formularioSesion.style.display === "none" ? "block" : "none";
});

btnEnviarSesion.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (nombre && apellido && correo) {
        const usuario = { nombre, apellido, correo };
        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert(`Bienvenido/a ${nombre} ${apellido}\nCorreo: ${correo}`);
        console.log("Usuario guardado:", usuario);
        formularioSesion.style.display = "none";
    } else {
        alert("Por favor completá todos los campos.");
    }
});
