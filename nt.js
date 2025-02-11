// Evento 1: Mostrar mensaje al hacer clic en el hobby
function showMessage(message) {
    alert(message);
}

// Evento 2: Cambiar texto al pasar el ratón por encima de la comida favorita
function changeText(message) {
    const foodElement = document.getElementById('food');
    foodElement.querySelector('p').innerText = message;
}

// Evento 3: Resaltar el área de la película al poner el foco
function highlightSection(element) {
    element.style.backgroundColor = '#f39c12';  // Cambia el color de fondo al poner foco
}

// Evento 4: Restaurar el color original al quitar el foco
function resetColor(element) {
    element.style.backgroundColor = '';  // Vuelve al fondo original
}

// Evento 5: Mostrar información sobre el artista o deportista al hacer doble clic
function showArtistInfo() {
    alert("Mi artista favorito es Beethoven.");
}

// Evento 6: Mostrar información del país al presionar una tecla
function displayCountryInfo(event) {
    if (event.key === 'Enter') {
        alert("Me gustaría visitar Japón, su cultura y tecnología me fascinan.");
    }
}
