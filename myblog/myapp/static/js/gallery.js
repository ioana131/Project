let currentIndex = 0;
function showSlide(n) {
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) { currentIndex = 0; }
    if (n < 0) { currentIndex = slides.length - 1; }
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}
showSlide(currentIndex);
