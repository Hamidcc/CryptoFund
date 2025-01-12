document.addEventListener("DOMContentLoaded", () => {
  const sliderSection = document.getElementById("slider-section");
  const hardwareSection = document.getElementById("hardware-section");
  const mineSection = document.getElementById("mine-section");
  const loadingSection = document.getElementById("loading-section");

  const donationSlider = document.getElementById("donation-slider");
  const youPercent = document.getElementById("you-percent");
  const charityPercent = document.getElementById("charity-percent");

  const mineBtn = document.getElementById("mine-btn");
  const progressBar = document.querySelector(".progress");
  const totalMined = document.getElementById("total-mined");
  const totalUSD = document.getElementById("total-usd");

  let totalCrypto = 0;

  // Update percentages dynamically
  donationSlider.addEventListener("input", () => {
    const youValue = donationSlider.value;
    youPercent.textContent = `${youValue}%`;
    charityPercent.textContent = `${100 - youValue}%`;
  });

  // Continue from slider to hardware section
  document.getElementById("continue-slider").addEventListener("click", () => {
    sliderSection.classList.add("hidden");
    mineSection.classList.remove("hidden");
  });

  // Hardware selection
  document.querySelectorAll(".hardware-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      hardwareSection.classList.add("hidden");
      mineSection.classList.remove("hidden");
    });
  });

 
});
