function showSection(id) {
  const sections = document.querySelectorAll('.section');
  const hero = document.querySelector('.home-hero');

  
  sections.forEach(section => section.classList.remove('active'));

  
  document.getElementById(id).classList.add('active');

 
  if (id === 'home') {
    hero.style.display = 'flex';
  } else {
    hero.style.display = 'none';
  }
}
window.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});