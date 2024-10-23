// Countdown Timer Script
const countdownElement = document.getElementById('countdown');

// Set the date for the countdown (4th November 2024 at 00:00:00)
const countdownDate = new Date("November 4, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        countdownElement.innerHTML = "EXAMS START NOW!";
    }
}, 1000); // Update the countdown every second