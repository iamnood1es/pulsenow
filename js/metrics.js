/* =========================
   metrics.js - Fake Metrics Simulation
========================= */

const imp = document.getElementById("imp");
const ctr = document.getElementById("ctr");
const win = document.getElementById("win");
const fall = document.getElementById("fall");

// Function to update metrics randomly
function updateMetrics() {
  if(imp) imp.textContent = (+imp.textContent.replace(/,/g,'') + Math.floor(Math.random()*30 + 10)).toLocaleString();
  if(ctr) ctr.textContent = (Math.random()*10).toFixed(1) + "%";
  if(win) win.textContent = (+win.textContent.replace(/,/g,'') + Math.floor(Math.random()*5 + 1)).toLocaleString();
  if(fall) fall.textContent = (+fall.textContent.replace(/,/g,'')).toLocaleString(); // updated via ad.js
}

// Update metrics every 3 seconds
setInterval(updateMetrics, 3000);

// Optional: initial update on page load
document.addEventListener("DOMContentLoaded", updateMetrics);
