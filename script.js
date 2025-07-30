
const timelineItems = document.querySelectorAll('.timeline-item');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  timelineItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.style.opacity = 1;
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
