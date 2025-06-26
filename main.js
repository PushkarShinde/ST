onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};

  let confettiInterval = null;
  let crackersInterval = null;
  let confettiActive = false;
  let crackersActive = false;

  function toggleConfetti() {
    const btn = document.getElementById('confettiBtn');

    if (confettiActive) {
      clearInterval(confettiInterval);
      confettiActive = false;
      btn.textContent = '🎊 Confetti';
    } else {
      confettiInterval = setInterval(() => {
        confetti({
          particleCount: 50,
          angle: 90,
          spread: 100,
          origin: { x: 0.5, y: 0 },
          gravity: 1,
          colors: ['#ff69b4', '#ffc0cb', '#ffffff'],
        });
      }, 400);

      confettiActive = true;
      btn.textContent = '⛔ Stop Confetti';
    }
  }

  function toggleCrackers() {
    const btn = document.getElementById('crackerBtn');

    if (crackersActive) {
      clearInterval(crackersInterval);
      crackersActive = false;
      btn.textContent = '🎆 Crackers';
    } else {
      crackersInterval = setInterval(() => {
        // Firework-style burst from bottom
        confetti({
          particleCount: 80,
          angle: Math.random() * 60 + 60,
          spread: 360,
          startVelocity: 55,
          origin: { x: Math.random(), y: 1 },
          colors: ['#ffd700', '#ff0000', '#ffa500'],
        });
      }, 1000);

      crackersActive = true;
      btn.textContent = '⛔ Stop Crackers';
    }
  }