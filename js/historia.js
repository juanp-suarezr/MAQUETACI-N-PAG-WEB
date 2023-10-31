document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Insertar el header primero
        const headerResponse = await fetch('header/header.html');
        const headerData = await headerResponse.text();
        document.querySelector('body').insertAdjacentHTML('afterbegin', headerData);

        $(".user a svg").removeClass('d-none');
        // Obtener el elemento del header recién insertado
        const headerElement = document.querySelector('#header'); // Reemplaza con el ID o selector correcto

        // Luego, insertar el navMenu después del header
        const navResponse = await fetch('navMenu/nav.html');
        const navData = await navResponse.text();
        headerElement.insertAdjacentHTML('afterend', navData);

        const guiaTallasLink = document.querySelector('#guiaTallas'); // Reemplaza con el ID o selector correcto
        guiaTallasLink.addEventListener('click', abrirModalGuiaTallas);

        $(".producto").removeClass('active');
        $(".historia").addClass('active');

    } catch (error) {
        console.error('Error fetching:', error);
    }
});

function loginNav() {
    var user = localStorage.getItem("currentUser");

    
    if (user) {
        var userData = JSON.parse(user);
        console.log(userData.rol);
        alert("usuario:" + userData.correo);
    } else {
        window.location.href = "login.html";
    }
}

// Función para abrir el modal de Guía de Tallas
function abrirModalGuiaTallas(event) {
    event.preventDefault(); // Evitar que el enlace realice la acción predeterminada (navegar a otra página)

    $('#modalGuiaTallas').modal('show');
}

function cerrarModal() {
    
    $('#modalGuiaTallas').modal('hide');
}

function mostrarinicio() {
    $(".inicio").addClass('on')
}

// Esperar 5 segundos antes de llamar a la función mostrarinicio
setTimeout(mostrarinicio, 1000);

function cardChange(num) {
    
    switch (num) {
        case 1:
        $(".card-back1").show(600);
        $(".card-front1").hide();
            break;
    
        case 2:
        $(".card-front1").show(600);
        $(".card-back1").hide();
            break;

        case 3:
        $(".card-back2").show(600);
        $(".card-front2").hide();
            break;
    
        case 4:
        $(".card-front2").show(600);
        $(".card-back2").hide();
            break;

        default:
            break;
    }
}

var parte1 = document.getElementById("parte1");
var parte2 = document.getElementById("parte2");
var parte3 = document.getElementById("parte3");
var parte4 = document.getElementById("parte4");
var parte5 = document.getElementById("parte5");
var parte6 = document.getElementById("parte6");
var parte7 = document.getElementById("parte7");


window.onscroll = function() {
    // Función que se ejecutará cuando ocurra un evento de desplazamiento
    // Puedes agregar aquí las acciones que deseas realizar al hacer scroll

    // Ejemplo: Obtener la posición de desplazamiento vertical
    var scrollTop = window.scrollY;
    // Calcula la posición del elemento en la página
    var rect = parte1.getBoundingClientRect();
    var rect2 = parte2.getBoundingClientRect();
    var rect3 = parte3.getBoundingClientRect();
    var rect4 = parte4.getBoundingClientRect();
    var rect5 = parte5.getBoundingClientRect();
    var rect6 = parte6.getBoundingClientRect();
    var rect7 = parte7.getBoundingClientRect();

    // Ejemplo: Imprimir la posición en la consola
    console.log("Posición de desplazamiento: " + scrollTop);
    

    switch (true) {
        case rect.top <= window.innerHeight && rect.bottom >= 0:
            // Mostrar el elemento si está en la vista
            $("#parte1").addClass('on');
            break;
        case rect2.top <= window.innerHeight && rect2.bottom >= 0:
            // Mostrar el elemento si está en la vista
            $("#parte2").addClass('on');
            break;
        case rect3.top <= window.innerHeight && rect3.bottom >= 0:
            // Mostrar el elemento si está en la vista
            $("#parte3").addClass('on');
            break;
        case rect4.top <= window.innerHeight && rect4.bottom >= 0:
            // Mostrar el elemento si está en la vista
            $("#parte4").addClass('on');
            break;
        case rect5.top <= window.innerHeight && rect5.bottom >= 0:
            // Mostrar el elemento si está en la vista
            $("#parte5").addClass('on');
            break;
        case rect6.top <= window.innerHeight && rect6.bottom >= 0:
            // Mostrar el elemento si está en la vista
            $("#parte6").addClass('on');
            break;
        case rect7.top <= window.innerHeight && rect7.bottom >= 0:
            // Mostrar el elemento si está en la vista
            $("#parte7").addClass('on');
            break;
        default:
            // Ocultar el elemento si no está en la vista
            $("#parte1").removeClass('on');
            $("#parte2").removeClass('on');
            $("#parte3").removeClass('on');
            $("#parte4").removeClass('on');
            $("#parte5").removeClass('on');
            $("#parte6").removeClass('on');
            $("#parte7").removeClass('on');
            break;
    }
    
};





