
//Variables y arrays
const productos = ["Auriculares", "Mouse", "Teclado", "Monitor"];
const precios = [5000, 4000, 8000, 25000];
let carrito = [];


function mostrarProductos() {
  console.log("Lista de productos disponibles:");
  for (let i = 0; i < productos.length; i++) {
    console.log(`${i + 1}. ${productos[i]} - $${precios[i]}`);
  }
}

function agregarProducto() {
  let continuar = true;
  while (continuar) {
    let opcion = parseInt(prompt("Ingrese el número del producto que desea agregar (1-4):"));
    if (opcion >= 1 && opcion <= productos.length) {
      carrito.push(precios[opcion - 1]);
      alert(`${productos[opcion - 1]} agregado al carrito.`);
    } else {
      alert("Opción inválida.");
    }
    continuar = confirm("¿Desea agregar otro producto?");
  }
}

//Función para calcular el total
function calcularTotal() {
  let total = 0;
  for (let precio of carrito) {
    total += precio;
  }

  if (total > 20000) {
    alert("Se aplica un 10% de descuento por superar $20000!");
    total *= 0.9;
  }

  console.log("Carrito:", carrito);
  alert("El total de su compra es: $" + total);
}

alert("Bienvenido al simulador de compra online 🛍️");
mostrarProductos();
agregarProducto();
calcularTotal();

alert("Gracias por utilizar el simulador.");
