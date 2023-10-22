// анимация для линии

const horizontal_lines = document.querySelectorAll(".horizontal-line p");

horizontal_lines.forEach((line) => {
  line.addEventListener("mouseover", () => {
    setTimeout(() => {
      line.style.width = "80%";

      setTimeout(() => {
        line.style.width = "50%";
        setTimeout(() => {
          line.style.width = "80%";
          setTimeout(() => {
            line.style.width = "50%";
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  });
});
