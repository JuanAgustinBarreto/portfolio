let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("conocimientos");
    var distancia_conocimientos = window.innerHeight - conocimientos.getBoundingClientRect().top;
    if (distancia_conocimientos >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

// Función para manejar el envío del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contacto");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevenir comportamiento por defecto (recarga)

            const datos = {
                nombre: form.nombre.value,
                telefono: form.telefono.value,
                correo: form.correo.value,
                asunto: form.asunto.value,
                mensaje: form.mensaje.value
            };

            console.log("Formulario enviado:", datos);

            alert("¡Gracias por tu mensaje, " + datos.nombre + "!");
            form.reset(); // Limpiar el formulario
        });
    }
});
