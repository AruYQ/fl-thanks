const gratitudeButton = document.querySelector("[data-gratitude-button]");
const sparkleLayer = document.querySelector("[data-sparkle-layer]");

gratitudeButton?.addEventListener("click", () => {
  const buttonBox = gratitudeButton.getBoundingClientRect();
  const layerBox = sparkleLayer.getBoundingClientRect();

  for (let index = 0; index < 18; index += 1) {
    const sparkle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 18 + Math.random() * 0.3;
    const distance = 75 + Math.random() * 145;

    sparkle.className = "sparkle";
    sparkle.textContent = index % 3 === 0 ? "✧" : "✦";
    sparkle.style.left = `${buttonBox.left - layerBox.left + buttonBox.width / 2}px`;
    sparkle.style.top = `${buttonBox.top - layerBox.top + buttonBox.height / 2}px`;
    sparkle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    sparkleLayer.append(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
  }
});
