// Cookies
let Cookies = localStorage.getItem("Cookies");
if (!Cookies) {
    Cookies = Swal.fire({
        title: "¿Aceptar las cookies?",
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Gracias, nos ayudas a mejorar tu experiencia!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Lamentamos que no te unas a nuestra base de datos :(", "", "error");
        }
    });
    if (Cookies) {
        localStorage.setItem("Cookies", Cookies);
    }
}

const IVA = 1.21;
let TotalCarrito = 0;
const Carrito = [];

// Cargar productos asincrónicamente
fetch("productos.json")
    .then(response => response.json())
    .then(productos => {
        productos.forEach(crearProducto);

        // Buscador: Se activa DESPUÉS de que los productos se agregan al DOM
        const buscadorInput = document.getElementById("buscador");
        buscadorInput.addEventListener("input", () => {
            const texto = buscadorInput.value.toLowerCase();
            const cards = document.querySelectorAll("section.imagesFlex div");

            cards.forEach(card => {
                const titulo = card.querySelector("h3").textContent.toLowerCase();
                if (titulo.includes(texto)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    })
    .catch(error => {
        console.error("Error al cargar productos:", error);
        Swal.fire("Error", "No se pudieron cargar los productos.", "error");
    });

// Función crear producto
function crearProducto(producto) {
    const contenedor = document.getElementById(producto.categoria.toLowerCase());

    const div = document.createElement("div");
    div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <img src="${producto.imagen}" class="rounded img-fluid" alt="${producto.nombre}">
        <button class="btn btn-primary buttons">COMPRAR $${producto.precio}</button>
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
        text: `El total del carrito es: $${TotalCarrito.toFixed(2)}
        Productos: ${nombres}`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Comprar",
            denyButtonText: `Vaciar Carrito`,
            cancelButtonText: "Cancelar"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Muchas gracias por su compra! Que su perro vista a la moda", "", "success");
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
