// Confetti Animation
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed

    const confettiColors = ['#ff4d4d', '#ffcc00', '#66ff66', '#00ccff', '#ff66cc']; // Different colors
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)]; // Random color

    document.body.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
        confetti.remove();
    }, 5000); // Duration of the confetti fall
}

// Generate multiple confetti at intervals
setInterval(createConfetti, 300); // Create confetti every 300ms
