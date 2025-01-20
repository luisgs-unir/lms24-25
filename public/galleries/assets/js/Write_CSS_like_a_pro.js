const images = [
    'assets/images/Write_CSS_like_a_pro/000.png',
    'assets/images/Write_CSS_like_a_pro/001.png',
    'assets/images/Write_CSS_like_a_pro/002.png',
    'assets/images/Write_CSS_like_a_pro/003.png',
    'assets/images/Write_CSS_like_a_pro/004.png',
    'assets/images/Write_CSS_like_a_pro/005.png',
    'assets/images/Write_CSS_like_a_pro/006.png',
    'assets/images/Write_CSS_like_a_pro/007.png',
    'assets/images/Write_CSS_like_a_pro/008.png'
];

let currentIndex = 0;

const slide = document.getElementById('slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateSlide() {
    slide.src = images[currentIndex];
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlide();
    }
});

// Initialize the gallery with the first image
updateSlide();