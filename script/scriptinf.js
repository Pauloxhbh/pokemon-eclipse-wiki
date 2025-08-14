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

// --- CÓDIGO PARA A ANIMAÇÃO DE QUEIMA SUAVE ---
document.addEventListener('DOMContentLoaded', function() {
    const fireTrigger = document.getElementById('fire-trigger');
    const burningOverlay = document.getElementById('burning-overlay');
    const infernalScreen = document.getElementById('infernal-screen');
    const closeInfernalBtn = document.getElementById('close-infernal-screen');
    let isAnimating = false;

    // Só executa se os elementos da animação existirem na página
    if (fireTrigger && burningOverlay && infernalScreen && closeInfernalBtn) {
        
        fireTrigger.addEventListener('click', () => {
            if (isAnimating) return; // Impede múltiplos cliques
            isAnimating = true;

            // 1. Mostra o efeito de queima
            burningOverlay.classList.add('burning');

            // 2. Espera 3 segundos (duração da animação de opacidade no CSS)
            setTimeout(() => {
                // 3. Mostra a tela infernal
                infernalScreen.classList.add('visible');

                // Reseta a camada de queima para o próximo uso
                setTimeout(() => {
                    burningOverlay.classList.remove('burning');
                    isAnimating = false;
                }, 500); // Pequeno delay para a transição ser suave

            }, 3000);
        });

        // Lógica para fechar a tela infernal
        closeInfernalBtn.addEventListener('click', () => {
            infernalScreen.classList.remove('visible');
        });
    }
});
