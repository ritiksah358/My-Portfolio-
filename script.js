// Typing effect
document.addEventListener('DOMContentLoaded', () => {
  new Typed('.typing-effect', {
      strings: ['Innovative Solutions', 'Creative Designs', 'Seamless User Experience'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
  });
});

// Hamburger menu toggle
function toggleMenu() {
  document.querySelector('.hamburger-menu').classList.toggle('open');
}
