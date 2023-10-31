document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Insertar el header primero
        const headerResponse = await fetch('header/header.html');
        const headerData = await headerResponse.text();
        document.querySelector('body').insertAdjacentHTML('afterbegin', headerData);

        $(".user a svg").removeClass('d-none');

        // Obtener el elemento del header recién insertado
        const headerElement = document.querySelector('#header'); // Reemplaza con el ID o selector correcto

        document.getElementsByClassName[0]
        // Luego, insertar el navMenu después del header
        const navResponse = await fetch('navMenu/nav.html');
        const navData = await navResponse.text();
        headerElement.insertAdjacentHTML('afterend', navData);

        const guiaTallasLink = document.querySelector('#guiaTallas'); // Reemplaza con el ID o selector correcto
        guiaTallasLink.addEventListener('click', abrirModalGuiaTallas);

        $(".producto").addClass('active');
        $(".historia").removeClass('active');

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

//cerrar modales
function cerrarModal(num) {
    
    switch (num) {
        case 1:
        $('#modalGuiaTallas').modal('hide');
            break;
    
        case 2:

            break;    

        default:
            break;
    }
    
}


function actualizarFiltros() {
    var PrecioSeleccionado;
    var GenerSeleccionada = $('#filtroGener').val();
    var ColorSeleccionado = $('#filtroColor').val();
    var EstiloSeleccionado = $('#filtroEstilo').val();

    PrecioSeleccionado = $('input[name="filtroPrecio"]:checked').attr('id');

    var productosFiltrados = $('#productosContainer .col-md-4').hide().filter(function () {
    var cumpleGener = (GenerSeleccionada === 'todos' || $(this).attr('data-Gener') === GenerSeleccionada);
    var cumplePrecio = (PrecioSeleccionado === 'todos' || $(this).attr('data-Precio') === PrecioSeleccionado || !$('input[name="filtroPrecio"]').is(':checked'));
    
    // Manejar múltiples valores en data-Color
    var coloresProducto = $(this).attr('data-Color');
    var colores = coloresProducto ? coloresProducto.split(',').map(color => color.trim()) : [];
    var cumpleColor = (ColorSeleccionado === 'todos' || colores.includes(ColorSeleccionado));

    // Manejar múltiples valores en data-Estilo
    var estilosProducto = $(this).attr('data-Estilo');
    var estilos = estilosProducto ? estilosProducto.split(',').map(estilo => estilo.trim()) : [];
    var cumpleEstilo = (EstiloSeleccionado === 'todos' || estilos.includes(EstiloSeleccionado));

    

    console.log('Seleccionada:', GenerSeleccionada, PrecioSeleccionado, ColorSeleccionado, EstiloSeleccionado);
    console.log('cumpleGener:', cumpleGener, cumplePrecio, cumpleColor, cumpleEstilo);

        return cumpleGener && cumplePrecio && cumpleColor && cumpleEstilo;
    });

    // Mostrar u ocultar productos y mensaje
    if (productosFiltrados.length > 0) {
        $('#productosContainer .col-md-4').hide();
        productosFiltrados.show(600);
        // Obtiene el offset después de mostrar el mensaje
        var offset1 = $('#productosContainer').offset().top;
        // Desplazamiento suave
        $('html, body').scrollTop(offset1);
        
        $('#mensajeNoResultados').hide();
    } else {
        
        $('#productosContainer .col-md-4').hide();
        

        $('#mensajeNoResultados').show(600);
            // Obtiene el offset después de mostrar el mensaje
            var offset = $('#mensajeNoResultados').offset().top;
        
            // Desplazamiento suave
            $('html, body').scrollTop(offset);
        
            // efecto de escritura y animacion después
            var mensajeTexto = document.getElementById('mensajeTexto');
            var palabras = mensajeTexto.innerText.split(' ');  // Reemplaza con tus palabras reales
        
            if (mensajeTexto) {
                // Limpia el texto existente
                mensajeTexto.textContent = "";
        
                // Muestra cada palabra con un retraso de 100 milisegundos
                palabras.forEach(function (palabra, index) {
                    setTimeout(function () {
                        mensajeTexto.textContent = mensajeTexto.textContent + ' ' + palabra;
                    }, index * 100);
                });
            } else {
                console.error("El elemento 'mensajeTexto' no se encontró.");
            }
        
            // Después de la animación de escritura, muestra el botón de WhatsApp
            setTimeout(function () {
                $('#btnWhatsappContainer').addClass('on');
            }, palabras.length * 100);
        

    }
}

function resetFiltros() {
    // Deselecciona todos los radio buttons
    $('input[name="filtroPrecio"]').prop('checked', false);
    $('input[name="filtroGener"]').prop('checked', false);
    $('input[name="filtroColor"]').prop('checked', false);
    $('input[name="filtroEstilo"]').prop('checked', false);


    // Restablece los valores de los selectores
    $('#filtroGener').val('todos');
    $('#filtroColor').val('todos');
    $('#filtroEstilo').val('todos');

    // Llama a la función actualizarFiltros para mostrar todos los productos nuevamente
    actualizarFiltros();
}



$(document).ready(function () {

    
    // $('input[name="filtroPrecio"]').on('change', function () {
    //     // Obtener el valor del atributo 'for' del botón de radio seleccionado
    //     PrecioSeleccionado = $('input[name="filtroPrecio"]:checked').attr('id');
    // });

    

    // $('#filtroGener, #filtroPrecio, #filtroColor, #filtroEstilo').on('change', function () {
        
    // });


    $(window).on('hashchange', function () {
        // Capturar el valor de hash
        var targetSection = window.location.hash;
        console.log(targetSection);
        var targetSection1 = targetSection.substring(1);

        // Si hay un hash y corresponde a una sección, ocultar todas las secciones y mostrar la sección específica
        if (targetSection && $(targetSection).length) {
            $('.productos').removeClass('on');
            $(targetSection).addClass('on');
            $(".productosNav .nav-item").removeClass('active1');

            console.log(targetSection1);
            $('.'+targetSection1).addClass('active1');
        }
    });

    // Simular el evento hashchange al cargar la página para mostrar la sección inicial
    $(window).trigger('hashchange');

    // Maneja el clic en los elementos del menú de navegación
    $('.navbar-nav a').on('click', function (e) {
        
        

        var productSelect = $(this).attr('href');

        productSelect1 = productSelect.substring(1);

        console.log(productSelect);

        $('.productos').removeClass('on');
        $(productSelect).addClass('on');
        $(".productosNav .nav-item").removeClass('active1');

            console.log(productSelect1);
            $('.'+productSelect1).addClass('active1');

    });
    
});






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
    // var rect2 = parte2.getBoundingClientRect();
    // var rect3 = parte3.getBoundingClientRect();
    // var rect4 = parte4.getBoundingClientRect();
    // var rect5 = parte5.getBoundingClientRect();
    // var rect6 = parte6.getBoundingClientRect();
    // var rect7 = parte7.getBoundingClientRect();

    // Ejemplo: Imprimir la posición en la consola
    console.log("Posición de desplazamiento: " + scrollTop);
    

    switch (true) {
        case rect.top <= window.innerHeight && rect.bottom >= 0:
            // Mostrar el elemento si está en la vista
            $("#parte1").addClass('on');
            break;
        // case rect2.top <= window.innerHeight && rect2.bottom >= 0:
        //     // Mostrar el elemento si está en la vista
        //     $("#parte2").addClass('on');
        //     break;
        // case rect3.top <= window.innerHeight && rect3.bottom >= 0:
        //     // Mostrar el elemento si está en la vista
        //     $("#parte3").addClass('on');
        //     break;
        // case rect4.top <= window.innerHeight && rect4.bottom >= 0:
        //     // Mostrar el elemento si está en la vista
        //     $("#parte4").addClass('on');
        //     break;
        // case rect5.top <= window.innerHeight && rect5.bottom >= 0:
        //     // Mostrar el elemento si está en la vista
        //     $("#parte5").addClass('on');
        //     break;
        // case rect6.top <= window.innerHeight && rect6.bottom >= 0:
        //     // Mostrar el elemento si está en la vista
        //     $("#parte6").addClass('on');
        //     break;
        // case rect7.top <= window.innerHeight && rect7.bottom >= 0:
        //     // Mostrar el elemento si está en la vista
        //     $("#parte7").addClass('on');
        //     break;
        default:
            // Ocultar el elemento si no está en la vista
            $("#parte1").removeClass('on');
            // $("#parte2").removeClass('on');
            // $("#parte3").removeClass('on');
            // $("#parte4").removeClass('on');
            // $("#parte5").removeClass('on');
            // $("#parte6").removeClass('on');
            // $("#parte7").removeClass('on');
            break;
    }
    
};









