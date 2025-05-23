bodymovin.loadAnimation({
  container: document.getElementById('loading'), // Required
  path: 'lottie/Loading.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Loading animation", // Name for future reference. Optional.
})

bodymovin.loadAnimation({
  container: document.getElementById('background1'), // Required
  path: 'lottie/abajo_izquierda.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Background1 animation", // Name for future reference. Optional.
  rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
  }
})

bodymovin.loadAnimation({
container: document.getElementById('background2'), // Required
path: 'lottie/arriba_derecha.json', // Required
renderer: 'svg', // Required
loop: true, // Optional
autoplay: true, // Optional
name: "Background2 animation", // Name for future reference. Optional.
rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
}
})

setTimeout(() => {
  document.getElementById('loading').style.display = 'none';
  document.body.style.overflow = 'auto'; // Barra de scroll
  //document.querySelectorAll('section').forEach(el => {el.style.display = 'flex'});
  document.getElementById('background1').style.visibility = 'visible';  // Mostrar el fondo
  document.getElementById('background1').style.opacity = 1;
  document.getElementById('background2').style.visibility = 'visible';  // Mostrar el fondo
  document.getElementById('background2').style.opacity = 1;
}, 2000); // Tiempo en milisegundos

let lastScroll = 0;
const headbar = document.querySelector('.headbar');

window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset;

if (currentScroll > lastScroll) {
  // Scroll hacia abajo → ocultar
  headbar.classList.add('hide');
} else {
  // Scroll hacia arriba → mostrar
  headbar.classList.remove('hide');
}

lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
  }
});
}, {
threshold: 0.4, // 40% visible para activar
});

const elements = document.querySelectorAll('.about-me-title, .about-me-text');
elements.forEach(el => observer.observe(el));

function copiarTexto() {
const texto = "alexander.pr.dev@gmail.com";
navigator.clipboard.writeText(texto).then(() => {
  alert("Correo electrónico copiado al portapapeles!");
}).catch(err => {
  console.error("Error al copiar el gmail: ", err);
});
}

const toggle = document.getElementById('theme-toggle');
const body = document.body;
const intro = document.querySelector('.introduction');
const about = document.querySelector('.content-section-about');
const habilities = document.querySelector('.content-section-habilities');
const separatorSection = document.querySelector('.content-section-separator');
const separator = document.querySelector('.separator');
const projects = document.querySelector('.content-section-projects');
const contact = document.querySelector('.content-section-contact');  // <- NUEVO

// Aplicar tema desde localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  body.classList.remove('light');

  intro.classList.add('dark');
  intro.classList.remove('light');

  about.classList.add('dark');
  about.classList.remove('light');

  habilities.classList.add('dark');
  habilities.classList.remove('light');

  separatorSection.classList.add('dark');
  separatorSection.classList.remove('light');

  separator.classList.add('dark');
  separator.classList.remove('light');

  projects.classList.add('dark');
  projects.classList.remove('light');

  contact.classList.add('dark');
  contact.classList.remove('light');
} else {
  body.classList.add('dark'); // por defecto
  body.classList.remove('light');

  intro.classList.add('dark');
  intro.classList.remove('light');

  about.classList.add('dark');
  about.classList.remove('light');

  habilities.classList.add('dark');
  habilities.classList.remove('light');

  separatorSection.classList.add('dark');
  separatorSection.classList.remove('light');

  separator.classList.add('dark');
  separator.classList.remove('light');

  projects.classList.add('dark');
  projects.classList.remove('light');

  contact.classList.add('dark');
  contact.classList.remove('light');
}

// Al hacer clic en el botón
toggle.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');

  intro.classList.toggle('light');
  intro.classList.toggle('dark');

  about.classList.toggle('light');
  about.classList.toggle('dark');

  habilities.classList.toggle('light');
  habilities.classList.toggle('dark');

  separatorSection.classList.toggle('light');
  separatorSection.classList.toggle('dark');

  separator.classList.toggle('light');
  separator.classList.toggle('dark');

  projects.classList.toggle('light');
  projects.classList.toggle('dark');

  contact.classList.toggle('light');
  contact.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});