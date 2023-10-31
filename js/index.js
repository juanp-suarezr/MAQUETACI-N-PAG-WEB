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

    } catch (error) {
        console.error('Error fetching:', error);
    }

    
});




// Función para abrir el modal de Guía de Tallas
function abrirModalGuiaTallas(event) {
    event.preventDefault(); // Evitar que el enlace realice la acción predeterminada (navegar a otra página)

    $('#modalGuiaTallas').modal('show');
}

function cerrarModal() {
    
    $('#modalGuiaTallas').modal('hide');
}


if (window.location.pathname.includes('index.html')) {
    console.log('Estás en el archivo index.html');

    function mostrarDescuentos() {
        $(".descuentos").addClass('on')
    }
    
    var parte1 = document.getElementById("parte1");
    var parte2 = document.getElementById("parte2");
    var parte4 = document.getElementById("parte4");
    var parte5 = document.getElementById("parte5");
    
    // Esperar 5 segundos antes de llamar a la función mostrarDescuentos
    setTimeout(mostrarDescuentos, 2000);
    
    window.onscroll = function() {
        // Función que se ejecutará cuando ocurra un evento de desplazamiento
        // Puedes agregar aquí las acciones que deseas realizar al hacer scroll
    
        // Ejemplo: Obtener la posición de desplazamiento vertical
        var scrollTop = window.scrollY;
        // Calcula la posición del elemento en la página
        var rect = parte1.getBoundingClientRect();
        var rect2 = parte2.getBoundingClientRect();
        var rect4 = parte4.getBoundingClientRect();
        var rect5 = parte5.getBoundingClientRect();
    
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
            case rect4.top <= window.innerHeight && rect4.bottom >= 0:
                // Mostrar el elemento si está en la vista
                $("#parte4").addClass('on');
                break;
            case rect5.top <= window.innerHeight && rect5.bottom >= 0:
                // Mostrar el elemento si está en la vista
                $("#parte5").addClass('on');
                break;
            default:
                // Ocultar el elemento si no está en la vista
                $("#parte1").removeClass('on');
                $("#parte2").removeClass('on');
                $("#parte4").removeClass('on');
                $("#parte5").removeClass('on');
                break;
        }
        
    };
} 




