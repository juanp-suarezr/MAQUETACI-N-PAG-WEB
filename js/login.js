// Variables globales
let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
let newUser;
let user;
let newAdmin;
// Enum de roles
const roles = {
    BASIC: 'basic',
    CLIENTE_FIEL: 'cliente fiel',
    CLIENTE_MASTER: 'cliente master',
    ADMIN: 'admin'
};

document.addEventListener('DOMContentLoaded', async function () {
    
    initializeAdmin();

    if (window.location.pathname.includes('login.html')) {
        console.log('Estás en el archivo login');
        $(".user a svg").addClass('d-none');
        
    }
});


function mostrarLogin() {
    $('#loginSection').removeClass('d-none');
    $('#signInSection').addClass('d-none');
}

function mostrarSignIn() {
    $('#loginSection').addClass('d-none');
    $('#signInSection').removeClass('d-none');
}



function login() {
    var correo = document.getElementById('login-correo').value;
    var password = document.getElementById('login-password').value;

    // Validación simple
    if (!correo || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Verificar si el usuario existe
    user = existingUsers.find(user => user && user.correo === correo);
    user = existingUsers.find(user => user && user.password === password);


    console.log('Usuario encontrado:', user);
    
    if (user) {
        console.log('Rol del usuario:', user.rol);
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('rol', JSON.stringify(user.rol));

        

        // Realizar acciones según el rol
        handleRoleActions(user.rol);
        alert('¡Inicio de sesión exitoso! ¡Bienvenido, ' + correo);

        window.location.href = '../index.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
}

function initializeAdmin() {
    newAdmin = {
        name: "AdminTaysu",
        telefono: "3054025529",
        correo: "taysuaccesorios@gmail.com",
        cedula: "1004734004",
        direccion: "Pereira",
        rol: 'admin',
        password: "taysuAdmin01"
        
    };
    console.log(roles.ADMIN);
    console.log(newAdmin.rol);

    // Agregar nuevo usuario
    registerUser(newAdmin);
}

function registerUser(user) {
    existingUsers.push(user);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    localStorage.setItem('rol', JSON.stringify(existingUsers.rol));
}


function isValidEmail(email) {
    // Utiliza una expresión regular simple para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Valida que la contraseña tenga al menos 8 caracteres
    return password.length >= 8;
}


function registro() {
    var name = document.getElementById('signup-name').value;
    var telefono = document.getElementById('signup-telefono').value;
    var correo = document.getElementById('signup-correo').value;
    var cedula = document.getElementById('signup-cedula').value;
    var direccion = document.getElementById('signup-direccion').value;
    var password = document.getElementById('signup-password').value;
    var rol = roles.BASIC;

    // Validación
    if (!name || !telefono || !correo || !cedula || !direccion || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!isValidEmail(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    if (!isValidPassword(password)) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    user = existingUsers.find(user => user && user.correo === correo);

    if (user) {
        alert('Este usuario ya existe. Por favor, elige otro nombre de usuario.');
        console.log('Usuario encontrado:', user);
        return;
    }

    // Asignar valores a la variable global newUser
    newUser = { name, telefono, correo, cedula, direccion, password, rol };

    // Agregar nuevo usuario
    registerUser(newUser);
    
    alert('¡Registro exitoso! Puedes iniciar sesión ahora.');

    window.location.href = '../index.html';
}

// Otras funciones y lógica de tu aplicación...


function mostrarinicio() {
    $(".inicio").addClass('on')
}

// Esperar 5 segundos antes de llamar a la función mostrarinicio
setTimeout(mostrarinicio, 1000);


function handleRoleActions(rol) {
    switch (rol) {
        case roles.BASIC:
            // Acciones específicas para usuarios con rol básico
            // Habilitar o deshabilitar funciones según sea necesario
            console.log('Usuario con rol básico. Habilitar funciones básicas.');
            break;
        case roles.CLIENTE_FIEL:
            // Acciones específicas para usuarios con rol cliente fiel
            console.log('Usuario con rol cliente fiel. Realizar acciones específicas.');
            break;
        case roles.CLIENTE_MASTER:
            // Acciones específicas para usuarios con rol cliente master
            console.log('Usuario con rol cliente master. Realizar acciones específicas.');
            break;
        case roles.ADMIN:
            // Acciones específicas para usuarios con rol de administrador
            console.log('Usuario con rol de administrador. Realizar acciones de administrador.');
            break;
        default:
            // Acciones predeterminadas para otros roles o casos no manejados
            console.log('Usuario con rol desconocido. Realizar acciones predeterminadas.');
    }
}








