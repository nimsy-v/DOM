element.addEventListener("click", function () {
  element
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      agregarComentario();
    });
});

function agregarComentario() {
  let comentario = document.getElementById("coment").value.trim();
  if (!comentario) return;

  // Crear un nuevo elemento para agregar el comentario del usuario
  let nuevoComentario = document.createElement("div");
  nuevoComentario.className = "comentariodiv";

  //Agregamos la fecha y hora actual
  let fecha = new Date();
  let fechaTexto = fecha.toLocaleString();

  // Agregar el comentario del usuario en pantalla
  nuevoComentario.innerHTML = `
    <p>${comentario}</p>
    <p class="fecha">${fechaTexto}</p>
    <button class="eliminar" onclick="eliminarComentario(this)">Eliminar</button>
  `;
  console.log("Se agrega comentario");

  document.getElementById("comentarios").appendChild(nuevoComentario);
  document.getElementById("coment").value = "";
}

function eliminarComentario(element) {
  element.parentElement.remove();
  console.log("Se elimina comentario");
}
