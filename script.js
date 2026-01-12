// Seleccionar todas las tarjetas del menú
const menuCards = document.querySelectorAll('.menu-card');
const exitBtn = document.getElementById('exitBtn');

// Agregar evento click a cada tarjeta
menuCards.forEach(card => {
    card.addEventListener('click', function() {
        const option = this.getAttribute('data-option');
        handleOptionClick(option);
    });
});

// Función para manejar el click en las opciones
function handleOptionClick(option) {
    switch(option) {
        case '1':
            alert('Has seleccionado: Gestión de reportes y análisis');
            console.log('Opción 1 seleccionada');
            break;
        case '2':
            alert('Has seleccionado: Configuración del sistema');
            console.log('Opción 2 seleccionada');
            break;
        case '3':
            alert('Has seleccionado: Gestión de usuarios');
            console.log('Opción 3 seleccionada');
            break;
        default:
            console.log('Opción no reconocida');
    }
}

// Evento para el botón de salir
exitBtn.addEventListener('click', function() {
    const confirmExit = confirm('¿Estás seguro que deseas salir?');
    if (confirmExit) {
        alert('Gracias por usar el portal. ¡Hasta pronto!');
        // En un escenario real, aquí se cerraría la sesión o se redirigiría
        console.log('Saliendo del sistema...');
    }
});

// Efecto de bienvenida
window.addEventListener('load', function() {
    console.log('Portal de Servicios cargado correctamente');
});
