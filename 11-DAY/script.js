const lights = document.querySelectorAll(".cls-3");

lights.forEach((light) => {
  light.addEventListener("click", () => {
    light.classList.toggle("cls-1");
  });
});
