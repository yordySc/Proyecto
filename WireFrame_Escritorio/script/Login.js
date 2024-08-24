document.addEventListener('DOMContentLoaded', function() {
    // Selecciona los elementos de email y contraseña
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    // Agrega un evento de clic al botón de "Iniciar Sesion"
    loginButton.addEventListener('click', function() {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (email && password) {
            alert(`Iniciando sesión con:\nEmail: ${email}\nContraseña: ${password}`);
            // Aquí puedes añadir la lógica de autenticación
        } else {
            alert('Por favor, completa ambos campos.');
        }
    });

    // Puedes agregar más funcionalidades como mostrar/ocultar la contraseña
    const eyeIcon = document.querySelector('.eye');
    eyeIcon.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});
