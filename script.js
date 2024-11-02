// Función para mostrar el video al seleccionar una categoría
function showVideo(category) {
    const videoContainer = document.getElementById("video-container");
    const video = document.getElementById("video-loop");

    // Muestra el contenedor del video
    videoContainer.style.display = "block";

    // Reproduce el video desde el inicio
    video.currentTime = 0;
    video.play();
}

// Función para pausar o reanudar el video
function togglePlay() {
    const video = document.getElementById("video-loop");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
