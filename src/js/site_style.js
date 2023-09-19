// todo site_style.js

const btnSiteStyles = document.querySelectorAll(".btn-site-style");
const bodyStyle = document.querySelector(".body");
const styleIcons = document.querySelectorAll(".btn-site-style__icon");

btnSiteStyles.forEach((btnSiteStyle) => {
    btnSiteStyle.addEventListener("click", () => {
        bodyStyle.classList.toggle("body--dark");
        bodyStyle.classList.toggle("body--light");

        styleIcons.forEach((icon) => {
            icon.classList.toggle("show");
            icon.classList.toggle("hide");
        });
    });
});
