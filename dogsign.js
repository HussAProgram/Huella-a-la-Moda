const IVA = 1.21;
let TotalCarrito = 36300;
const Carrito = [];

const productos = [
    { nombre: "Rojo", precio: 5000, imagen: "https://imgs.search.brave.com/Da2GrUQw9ukKUwWuDTzdupVt2XgxPcYy5svkh8aOdrw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLXByZW1p/dW0vZm9uZG8tcm9q/by1yYXlvcy1zb2xf/MzIyOTU4LTQxMzYu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA", categoria: "colores" },
    { nombre: "Azul", precio: 5000, imagen: "https://imgs.search.brave.com/qdwV_oSXx0hNYq4V5tcW3NRTuMg2wFbQX0qXDrAwQqM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/Z3J1bmdlLWFic3Ry/YWN0by10ZXh0dXJh/LWRlY29yYXRpdmEt/YXp1bC1wYXJlZC1v/LWZvbmRvLXBhdHJv/bl84NDQ0My0zNzAw/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA", categoria: "colores" },
    { nombre: "Verde", precio: 5000, imagen: "https://imgs.search.brave.com/DnQXkEu1Q5Mq6uYWyX2r9kiDe7--XPirwRTcNS7GkXY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc1/NzM1MzU4L3B0L2Zv/dG8vZnVuZG8tdmVy/ZGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU44NVVaMUE4/cVNUZ2pBMGJXcDhO/U0NHLVBzb0xwNG84/bGYxZUNqcDZJZ2M9", categoria: "colores" },
    { nombre: "Forma Huella", precio: 800, imagen: "/images/HebillaHuella.jpeg", categoria: "hebillas" },
    { nombre: "Forma Hueso", precio: 800, imagen: "/images/HebillaHueso.jpeg", categoria: "hebillas" },
    { nombre: "Forma Pelota", precio: 800, imagen: "/images/HebillaPelota.jpeg", categoria: "hebillas" },
    { nombre: "Rayas", precio: 5000, imagen: "https://imgs.search.brave.com/g4Z4rpy95yAz-bT7C7pZYEaCjnNT3VQ3DoZNkdAgYKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxOWxKUVB4Y2NM/LmpwZw", categoria: "estampados" },
    { nombre: "Lunares", precio: 5000, imagen: "https://imgs.search.brave.com/SHTCYrL5XTJM74oHBnZF_j7noVcrVNwAJp4R7H7fq3I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFuUlc4ZDRmTkwu/anBn", categoria: "estampados" },
    { nombre: "Huellitas", precio: 5000, imagen: "https://imgs.search.brave.com/k6flvUWmzdriuWkVbgkYVDHr9hb3ZLqr8wcHAfM2qU0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxWms2Nm1vV1ZM/LmpwZw", categoria: "estampados" },
    { nombre: "Cierre Largo", precio: 2000, imagen: "https://imgs.search.brave.com/ZjUHcdUQt9RLZqaXzIDAwCX5Po8qsVnxSv1pe9brZao/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/Mjg3NTktTUxBNDgx/MTk3ODM1NTdfMTEy/MDIxLVcud2VicA", categoria: "cierres" },
    { nombre: "Cierre Corto", precio: 2000, imagen: "https://imgs.search.brave.com/NPn97O4JBXI06GMRcIKze7bhGVLEo3lKmyIu5_xo8aA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY0Mzc1Ny1NTEE3/MTg3MTkxNTY0OF8w/OTIwMjMtRS53ZWJw", categoria: "cierres" },
    { nombre: "Hueso", precio: 1500, imagen: "/images/ParcheHueso.jpeg", categoria: "parches" },
    { nombre: "Huella", precio: 1500, imagen: "/images/ParcheHuella.jpeg", categoria: "parches" },
    { nombre: "Pelota", precio: 1500, imagen: "/images/ParchePelota.jpeg", categoria: "parches" },
    { nombre: "Boton Grande", precio: 500, imagen: "/images/BotonGrande.png", categoria: "botones" },
    { nombre: "Boton Mediano", precio: 500, imagen: "/images/BotonMediano.png", categoria: "botones" },
    { nombre: "Boton Chico", precio: 500, imagen: "/images/BotonChico.png", categoria: "botones" },
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
            text: `${producto.nombre} añadido a su personalización`,
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
        text: `Su personalización cuesta: $${TotalCarrito.toFixed(2)}
        Productos: Plantilla de Vestimenta, ${nombres}`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Comprar",
            denyButtonText: `Reiniciar Personalización`,
            cancelButtonText: "Cancelar"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Muchas gracias por su compra! Su personalización comenzara su producción en breve", "", "success");
            TotalCarrito = 0;
            Carrito.length = 0;
            document.getElementById("contadorCarrito").textContent = "0";
        } else if (result.isDenied) {
            Swal.fire("Personalización reiniciada con éxito, añade nuevas personalizaciones", "", "warning");
            TotalCarrito = 0;
            Carrito.length = 0;
            document.getElementById("contadorCarrito").textContent = "0";
        }
    })
});




