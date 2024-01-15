
// Funciones para calcular magnitud y ángulo, y para calcular componentes x e y.
function calcularMagnitud(x, y) {
    return Math.sqrt(x * x + y * y);
}

function calcularAngulo(x, y) {
    return Math.atan2(y, x) * (180 / Math.PI); // Conversión a grados
}

function calcularComponentes(magnitud, angulo) {
    var radianes = angulo * (Math.PI / 180); // Conversión a radianes
    var x = magnitud * Math.cos(radianes);
    var y = magnitud * Math.sin(radianes);
    return { x: x, y: y };
}

// Función que se llama cuando el usuario hace clic en el botón calcular.
function calculate() {
    // Obtiene los valores ingresados por el usuario
    var magnitud = parseFloat(document.getElementById('magnitude').value);
    var angulo = parseFloat(document.getElementById('angle').value);
    var componentX = parseFloat(document.getElementById('componentX').value);
    var componentY = parseFloat(document.getElementById('componentY').value);

    var resultado = '';

    if (!isNaN(magnitud) && !isNaN(angulo)) {
        // Calcula componentes basado en magnitud y ángulo
        var componentes = calcularComponentes(magnitud, angulo);
        resultado += 'Componente x: ' + componentes.x.toFixed(2) + '\n';
        resultado += 'Componente y: ' + componentes.y.toFixed(2) + '\n';
    } else if (!isNaN(componentX) && !isNaN(componentY)) {
        // Calcula magnitud y ángulo basado en componentes
        resultado += 'Magnitud: ' + calcularMagnitud(componentX, componentY).toFixed(2) + '\n';
        resultado += 'Ángulo: ' + calcularAngulo(componentX, componentY).toFixed(2) + ' grados\n';
    } else {
        alert('Por favor ingrese valores válidos para calcular.');
        return;
    }

    // Muestra el resultado en el área de resultados
    document.getElementById('result').innerText = resultado;
}

// Asegurar de que el DOM esté completamente cargado antes de asignar eventos a los elementos
document.addEventListener('DOMContentLoaded', function() {
    // Agregar el evento de clic al botón calcular
    document.getElementById('calculate-button').addEventListener('click', calculate);
    });
