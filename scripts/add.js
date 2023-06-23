function enviarFormulario() {
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var imagen = document.getElementById("imagen").value;
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor o almacenarlos en una base de datos
    // Mostrar la información en la página principal
   
    var nuevaEntrada = document.createElement("div");
    nuevaEntrada.innerHTML = "<h2>" + titulo + "</h2><p>" + descripcion + "</p><img src='" + imagen + "'>";
    document.getElementById("entradas").appendChild(nuevaEntrada);
}