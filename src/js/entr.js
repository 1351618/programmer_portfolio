// src/js/entr.js

const btn_entr = document.querySelector(".wind-entr__btn");
const btn_div = document.querySelector(".wind-entr__div");

btn_entr.addEventListener("click", () => {
  btn_div.classList.toggle("show");
});
