
let mates = {
  pampaAbierto: {precio: 2500},
  pampaCerrado: {precio: 2500},
  pampaXL: {precio: 6500},
  pampaAFA: {precio: 8500},
  mateSeleccionado :null,
};

// obtener datos del dom
let pampaAbierto = document.getElementById("pampaAbierto");
let pampaCerrado = document.getElementById("pampaCerrado");
let pampaXL = document.getElementById("pampaXL");
let pampaAFA = document.getElementById("pampaAFA");

// botón de tipo de mate
pampaAbierto.addEventListener("click", function() {
  document.getElementById("precio").innerHTML = mates.pampaAbierto.precio;
});
pampaCerrado.addEventListener("click", function() {
  document.getElementById("precio").innerHTML = mates.pampaCerrado.precio;
});
pampaXL.addEventListener("click", function() {
  document.getElementById("precio").innerHTML = mates.pampaXL.precio;
});
pampaAFA.addEventListener("click", function() {
  document.getElementById("precio").innerHTML = mates.pampaAFA.precio;
});

// // Obtener los botones de color por su ID
let rojo = document.getElementById("rojo");
let negro = document.getElementById("negro");
let blanco = document.getElementById("blanco");
let lila = document.getElementById("lila");

// Agregar un event listener para cada botón de color
rojo.addEventListener("click", function() {
  mates.mateSeleccionado.color = "rojo";
});
negro.addEventListener("click", function() {
  mates.mateSeleccionado.color = "negro";
});
blanco.addEventListener("click", function() {
  mates.mateSeleccionado.color = "blanco";
});
lila.addEventListener("click", function() {
  mates.mateSeleccionado.color = "lila";
});

let enviarPedido = document.getElementById("enviarPedido")
enviarPedido.addEventListener("click", function(){
  Swal.fire({
    title: 'envio de pedido',
    text: 'felicidades a enviado su pedido de mates',
    imageWidth: 400,
    imageHeight: 200,
  })
})