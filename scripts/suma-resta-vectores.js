
function obtenerComponentes(magnitud, angulo) {
    let radianes = angulo * Math.PI / 180; // Conversión de grados a radianes
    let x = magnitud * Math.cos(radianes);
    let y = magnitud * Math.sin(radianes);
    return { x, y };
}

function operarVectores(operacion) {
    let vectorAMagnitud = parseFloat(document.getElementById('vectorAMagnitude').value);
    let vectorAAngulo = parseFloat(document.getElementById('vectorAAngle').value);
    let vectorBMagnitud = parseFloat(document.getElementById('vectorBMagnitude').value);
    let vectorBAngulo = parseFloat(document.getElementById('vectorBAngle').value);

    let vectorA = obtenerComponentes(vectorAMagnitud, vectorAAngulo);
    let vectorB = obtenerComponentes(vectorBMagnitud, vectorBAngulo);

    let resultadoX, resultadoY;

    if (operacion === 'sumar') {
        resultadoX = vectorA.x + vectorB.x;
        resultadoY = vectorA.y + vectorB.y;
    } else if (operacion === 'restar') {
        resultadoX = vectorA.x - vectorB.x;
        resultadoY = vectorA.y - vectorB.y;
    }

    mostrarResultado(resultadoX, resultadoY);
}

function mostrarResultado(x, y) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h2>Resultado:</h2><p>Componente x: ${x.toFixed(2)}, Componente y: ${y.toFixed(2)}</p>`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Event listeners para botones pueden ser agregados aquí si se desea.
});
