let audioEnabled = false;
let currentAudio = null;

const toggleButton = document.getElementById("toggle-audio");
const elementsWithAudio = document.querySelectorAll("[data-audio]");

toggleButton.addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    toggleButton.textContent = audioEnabled ? "Desativar Áudio" : "Ativar Áudio";

    if (!audioEnabled && currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
});


elementsWithAudio.forEach((element) => {
    const audioSrc = element.getAttribute("data-audio");

    element.addEventListener("mouseenter", () => {
        if (audioEnabled && audioSrc) {
            if (currentAudio) currentAudio.pause(); 
            currentAudio = new Audio(audioSrc);
            currentAudio.play();
        }
    });
});
