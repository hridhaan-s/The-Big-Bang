const btn = document.getElementById('start-button');
const music = document.getElementById('bg-music');
const intro = document.getElementById('intro-screen');

btn.addEventListener('click', () => {
    music.volume = 1.0;
    music.play();
    intro.style.display = 'none';
}); 

const chapters = document.querySelectorAll('.chapter');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

chapters.forEach(chapter => {
    observer.observe(chapter);
});

const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
}

);




