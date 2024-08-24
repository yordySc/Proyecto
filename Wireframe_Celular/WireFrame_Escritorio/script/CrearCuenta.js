document.addEventListener('DOMContentLoaded', function() {
    // Selecciona los elementos de email y contraseña
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const createAccountButton = document.getElementById('createAccountButton');

    // Agrega un evento de clic al botón "Crear Cuenta"
    createAccountButton.addEventListener('click', function() {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (email && password) {
            alert(`Cuenta creada con:\nEmail: ${email}\nContraseña: ${password}`);
            // Aquí puedes añadir la lógica de registro de cuenta
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
