// main.js

// FUNCIÓN PARA ABRIR WHATSAPP
document.getElementById("btn-whatsapp").addEventListener("click", function() {
  const numero = "5218135092997"; // número de México con formato correcto
  const url = "https://wa.me/" + numero;
  
  // Abrir en nueva pestaña, si falla, redirigir en la misma
  const nuevaPestana = window.open(url, "_blank");
  if (!nuevaPestana) {
    window.location.href = url;
  }
});

// SCROLL SUAVE PARA EL MENÚ
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// EFECTO AL HACER SCROLL (NAVBAR)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.backgroundColor = window.scrollY > 50 ? "#020617" : "transparent";
});