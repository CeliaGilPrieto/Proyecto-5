// esto es lo que estaba en el admin:
// Definir el usuario y contraseña correctos
const usuarioCorrecto = "Celia";
const contrasenaCorrecta = "1234";

// Obtener el formulario y agregar un evento de envío
const form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener el valor de usuario y contraseña ingresados
    const usuario = document.getElementById("username").value;
    const contrasena = document.getElementById("password").value;

    // Verificar si las credenciales son correctas
    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        // Si son correctas, redirigir al área de administración
        window.location.href = "add.html";
        form.style.display="none"
        // alert("Iniciaste sesión Doña pendeja");
    } else {
        // Si son incorrectas, mostrar un mensaje de error
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});