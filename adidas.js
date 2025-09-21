const IVA = 1.21;
let TotalCarrito = 0;
const Carrito = [];

const productos = [
    { 
        nombre: "Campera Impermeable Adidas", 
        precio: 50000, 
        imagen: "/images/camperaadidas.png", 
        categoria: "adidas",
    },
];

function crearProducto(producto) {
    const contenedor = document.getElementById(producto.categoria.toLowerCase());
    if (!contenedor) {
        console.warn("No se encontró contenedor para", producto.categoria);
        return;
    }

    const div = document.createElement("div");
    div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <img src="${producto.imagen}" class="rounded img-fluid" alt="${producto.nombre}">
        <button class="btn btn-primary buttons">AÑADIR $${producto.precio}</button>
    `;
    const boton = div.querySelector("button");
    boton.addEventListener("click", () => {
        Carrito.push({ nombre: producto.nombre });
        TotalCarrito += producto.precio * IVA;
        document.getElementById("contadorCarrito").textContent = Carrito.length;
        const contador = document.getElementById("contadorCarrito");
        contador.classList.add("animado");
        setTimeout(() => contador.classList.remove("animado"), 200);
        boton.classList.add("boton-flash");
        setTimeout(() => boton.classList.remove("boton-flash"), 400);
        Toastify({
            text: `${producto.nombre} añadido al carrito`,
            duration: 3000,
            avatar: `${producto.imagen}`,
            style: {
                background: "#12709e",
            }
        }).showToast();
    });

    contenedor.appendChild(div);
    setTimeout(() => div.classList.add("visible"), 50);
}

productos.forEach(crearProducto);

// Botón del carrito
document.getElementById("BotonCarrito").addEventListener("click", function () {
    if (Carrito.length === 0) {
        Swal.fire({
            text: "El carrito está vacío, por favor añade productos",
            icon: "error",
        });
        return;
}

// Agrupar productos por nombre
    const resumen = {};
    Carrito.forEach(item => {
    if (resumen[item.nombre]) {
        resumen[item.nombre]++;
    } else {
        resumen[item.nombre] = 1;
    }
    });

// Convertir a string: Producto x cantidad
    const nombres = Object.entries(resumen)
        .map(([nombre, cantidad]) => {
        return cantidad > 1 ? `${nombre} x${cantidad}` : nombre;
    })
    .join(", ");

    Swal.fire({
        title: "🛒",
        text: `El total de su carrito es: $${TotalCarrito.toFixed(2)}
        Productos: ${nombres}`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Comprar",
            denyButtonText: `Vaciar Carrito`,
            cancelButtonText: "Cancelar"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Muchas gracias por su compra! Que su perro se abrigue a la moda", "", "success");
            TotalCarrito = 0;
            Carrito.length = 0;
            document.getElementById("contadorCarrito").textContent = "0";
        } else if (result.isDenied) {
            Swal.fire("Carrito vaciado con éxito, añade nuevos productos", "", "warning");
            TotalCarrito = 0;
            Carrito.length = 0;
            document.getElementById("contadorCarrito").textContent = "0";
        }
    })
});