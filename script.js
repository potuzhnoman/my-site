// Запрет на копирование
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('copy', event => event.preventDefault());
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === "u"  event.key === "s"  event.key === "c" || event.key === "p")) {
        event.preventDefault();
    }
});

// Запуск фонового звука при загрузке
window.onload = function() {
    let audio = document.getElementById('bg-audio');
    audio.volume = 0.3;
    audio.play();
};

// Эффект случайного мерцания текста
let title = document.querySelector('h1');
setInterval(() => {
    title.style.opacity = Math.random() * (1 - 0.7) + 0.7;
}, 700);