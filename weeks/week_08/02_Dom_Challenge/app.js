const mainHeading = document.getElementById("mainHeading");

document.getElementById("redButton").addEventListener("click", function () {
  mainHeading.style.color = "#e74c3c";
});

document.getElementById("greenButton").addEventListener("click", function () {
  mainHeading.style.color = "#2ecc71";
});

document.getElementById("blueButton").addEventListener("click", function () {
  mainHeading.style.color = "#3498db";
});

document.getElementById("purpleButton").addEventListener("click", function () {
  mainHeading.style.color = "#9b59b6";
});

document.getElementById("resetButton").addEventListener("click", function () {
  mainHeading.style.color = ""; 
});
