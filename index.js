const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});
// eval est une méthode js pour calculer
equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});
// pour vider le h3
clear.addEventListener("click", () => {
  result.textContent = "";
});
