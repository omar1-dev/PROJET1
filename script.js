let currentPage = 1;
const totalPages = 60;

// Fonction pour afficher une page spécifique
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`).classList.add('active');
}

// Fonction pour passer à la page suivante
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// Fonction pour revenir à la page précédente
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Fonction pour lire l'audio
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

// Fonction pour mettre l'audio en pause
function pauseAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.pause();
}

// Fonction pour changer la langue des fichiers audio
function changeLanguage() {
    const language = document.getElementById('language').value;
    document.getElementById('audio-page1').src = `audio/page1_${language}.mp3`;
    document.getElementById('audio-page2').src = `audio/page2_${language}.mp3`;
    alert("Langue changée en " + language);
}

// Initialisation : Afficher la première page au chargement
showPage(currentPage);