/* =========================
   ad.js - Scam Ad Simulation
========================= */

const overlay = document.getElementById("overlay");
const prizeG = document.getElementById("prizeG");
const warnG = document.getElementById("warnG");
const timerEl = document.getElementById("timer");
const fall = document.getElementById("fall");

// Array of prizes (funny + realistic)
const prizes = [
  "a bag of Chipsy 🍟",
  "a waterproof towel 🧻💦",
  "a hidden diet fridge 🥶🥗",
  "a PlayStation 5 🎮",
  "100 million dollars 💰",
  "24 Lamborghini cars 🚗🚗",
  "Dinner with Michael Jackson 🕺🍽️",
  "Golden rubber duck 🦆",
  "Flying spaghetti dinner 🍝",
  "Invisible sunglasses 🕶️"
];

let countdown = 179; // 2:59 minutes
let intv;

// Start countdown timer
function startTimer() {
  clearInterval(intv);
  countdown = 179;
  intv = setInterval(() => {
    const m = String(Math.floor(countdown / 60)).padStart(2, '0');
    const s = String(countdown % 60).padStart(2, '0');
    timerEl.textContent = `${m}:${s}`;
    if (--countdown < 0) clearInterval(intv);
  }, 1000);
}

// Show ad
function showAd() {
  overlay.style.display = 'flex';
  prizeG.innerHTML = "You won <strong>" + prizes[Math.floor(Math.random() * prizes.length)] + "</strong>!";
  startTimer();
}

// Reveal warning when user focuses input
function reveal() {
  warnG.style.display = 'block';
  fall.textContent = (+fall.textContent + 1).toLocaleString();
}

// Close ad
function closeAd() {
  overlay.style.display = 'none';
}

// Report ad
function reportAd() {
  alert("Reported. Stay alert!");
}

// Show ad after short delay to ensure visibility
window.addEventListener('load', () => {
  setTimeout(showAd, 3000);
});
