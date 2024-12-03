start.addEventListener("click", () => {
  one.style.opacity = "1";
  one.style.transform = "none";
});

next1.addEventListener("click", () => {
  if (input1.value === "Fatigué") {
    two.style.opacity = "1";
    two.style.transform = "none";
  }
});

next2.addEventListener("click", () => {
  if (input2.value === "Téo") {
    three.style.opacity = "1";
    three.style.transform = "none";
  }
});

next3.addEventListener("click", () => {
  if (input3.value === "Nekfeu") {
    four.style.opacity = "1";
    four.style.transform = "none";
  }
});
