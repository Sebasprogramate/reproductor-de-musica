function actualizarReloj() {
    const ahora = new Date();

    const hora = ahora.getHours().toString().padStart(2, '0');
    const minuto = ahora.getMinutes().toString().padStart(2, '0');
    const segundo = ahora.getSeconds().toString().padStart(2, '0');

    document.getElementById('hora').textContent = hora;
    document.getElementById('minuto').textContent = minuto;
    document.getElementById('segundo').textContent = segundo;
}

// Actualiza el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llama a la función para mostrar la hora actual de inmediato
actualizarReloj();
