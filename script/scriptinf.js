
// --- CÓDIGO DA TELA DE ABERTURA (SPLASH SCREEN) ---
window.addEventListener('load', function() {
  const splashScreen = document.getElementById('splash-screen');
  if (splashScreen) {
    setTimeout(() => {
      splashScreen.classList.add('hidden');
    }, 3000); 
  }
});

// --- CÓDIGO PARA A ANIMAÇÃO DE PARTÍCULAS ---
if (typeof particlesJS !== 'undefined') {
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
      "color": { "value": "#FFD700" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#FFD700", "opacity": 0.2, "width": 1 },
      "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
      "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }},
      "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
  });
}

// --- CÓDIGO PARA A ANIMAÇÃO INFERNAL ---
document.addEventListener('DOMContentLoaded', function() {
    const fireTrigger = document.getElementById('fire-trigger');
    const fireOverlay = document.getElementById('fire-overlay');
    const infernalScreen = document.getElementById('infernal-screen');
    const closeInfernalBtn = document.getElementById('close-infernal-screen');

    // Só executa se os elementos existirem na página atual
    if (fireTrigger && fireOverlay && infernalScreen && closeInfernalBtn) {
        
        // Ativa a animação
        fireTrigger.addEventListener('click', () => {
            // 1. Mostra o fogo
            fireOverlay.classList.add('active');

            // 2. Espera 2 segundos
            setTimeout(() => {
                // 3. Mostra a tela infernal
                infernalScreen.classList.add('visible');
            }, 2000);

            // 4. Esconde o fogo depois de 3 segundos para não ficar tocando para sempre
            setTimeout(() => {
                fireOverlay.classList.remove('active');
            }, 3000);
        });

        // Fecha a tela infernal
        closeInfernalBtn.addEventListener('click', () => {
            infernalScreen.classList.remove('visible');
        });
    }
});
