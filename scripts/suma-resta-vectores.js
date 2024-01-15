function sumarVectores() {
    var ax = parseFloat(document.getElementById('vectorAX').value);
    var ay = parseFloat(document.getElementById('vectorAY').value);
    var bx = parseFloat(document.getElementById('vectorBX').value);
    var by = parseFloat(document.getElementById('vectorBY').value);

    var resultadoX = ax + bx;
    var resultadoY = ay + by;

    mostrarResultado(resultadoX, resultadoY, 'suma');
}

function restarVectores() {
    var ax = parseFloat(document.getElementById('vectorAX').value);
    var ay = parseFloat(document.getElementById('vectorAY').value);
    var bx = parseFloat(document.getElementById('vectorBX').value);
    var by = parseFloat(document.getElementById('vectorBY').value);

    var resultadoX = ax - bx;
    var resultadoY = ay - by;

    mostrarResultado(resultadoX, resultadoY, 'resta');
}

function mostrarResultado(x, y, operacion) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h2>Resultado de la ${operacion}:</h2><p>Componente x: ${x.toFixed(2)}, Componente y: ${y.toFixed(2)}</p>`;
}

// Manejador de eventos para cargar el script después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Puedes agregar manejadores de eventos para los botones si prefieres no usar el atributo 'onclick' en el HTML
});
