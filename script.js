document.addEventListener("DOMContentLoaded", () => {
  const pacman = document.querySelector(".pacman");
  const foods = document.querySelectorAll(".food");
  let eatenFoodCount = 0;

  function resetGame() {
    foods.forEach((food) => (food.style.visibility = "visible"));
    eatenFoodCount = 0;
    pacman.style.left = "-50px"; // Make sure this is consistent with your CSS
  }

  function eatFood() {
    const pacmanRect = pacman.getBoundingClientRect();
    foods.forEach((food) => {
      const foodRect = food.getBoundingClientRect();
      if (
        pacmanRect.right > foodRect.left &&
        pacmanRect.left < foodRect.right &&
        food.style.visibility !== "hidden"
      ) {
        food.style.visibility = "hidden";
        eatenFoodCount++;
        if (eatenFoodCount === foods.length) {
          setTimeout(resetGame, 300); // Reset after a delay to see the effect
        }
      }
    });
  }

  let pacmanLeft = -50;
  const movePacman = () => {
    pacmanLeft += 10; // Adjust speed as necessary
    pacman.style.left = `${pacmanLeft}px`;
    if (pacmanLeft > window.innerWidth) {
      pacmanLeft = -50; // Reset to start if it goes off screen
    }
    eatFood();
  };

  setInterval(movePacman, 30); // Adjust interval as necessary for smoother movement
});
