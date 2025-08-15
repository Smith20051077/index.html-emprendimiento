// Menú hamburguesa
document.getElementById('menu-btn').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));



  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Abrir / cerrar menú
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Cerrar el menú si se hace clic en un enlace
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });

