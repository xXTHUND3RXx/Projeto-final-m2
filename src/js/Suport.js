let audioEnabled = false;
let currentAudio = null;

const toggleButton = document.getElementById("toggle-audio");
const elementsWithAudio = document.querySelectorAll("[data-audio]");
const articleSobre = document.getElementById("frame")
const sectionSobre = document.getElementById("container-painel")

toggleButton.addEventListener("click", () => {
    audioEnabled = !audioEnabled;

    toggleButton.textContent = audioEnabled ? "Desativar Áudio" : "Ativar Áudio";

    if (!audioEnabled && currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    if (audioEnabled) {
        articleSobre.style.display = "none";
        sectionSobre.style.height = "30rem";
    } else {
        articleSobre.style.display = "flex";
        sectionSobre.style.height = "auto";
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
