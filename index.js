// todo  index.js

import "./src/js/site_style.js";
import "./src/js/entr.js";
import "./src/js/animation.js";
import "./src/js/about.js";
import "./src/js/key_skills.js";

// const json_site = "./src/json/sites.json";

const sitesExamples = document.querySelector(".sites");
const miscellaneousExamples = document.querySelector(".miscellaneous");
const slidersExamples = document.querySelector(".sliders");

const g_sites = "sites";
const g_miscellaneous = "mini_game";
const g_sliders = "slider";

// !=================== получаем данные с github
const username = "1351618"; // Замените на имя пользователя, которое вам нужно

const apiUrl = `https://api.github.com/users/${username}/starred`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((starredRepos) => {
    // Здесь starredRepos содержит информацию о звездированных репозиториях пользователя
    // console.log(starredRepos);
    cartBlock(starredRepos);
  })
  .catch((error) => console.error("Ошибка загрузки данных:", error));

function cartBlock(massiv) {
  massiv.map((val) => {
    let fullName = val.full_name;
    if (fullName.includes(g_sites)) {
      raktaStructure(val, sitesExamples);
    }
    if (fullName.includes(g_miscellaneous)) {
      raktaStructure(val, miscellaneousExamples);
    }
    if (fullName.includes(g_sliders)) {
      raktaStructure(val, slidersExamples);
    }
  });
}

function raktaStructure(objData, divBlock) {
  // console.log(objData.homepage);
  let blockArchitecture = `
    <div class="site">
      <div class="git-visit">
        <a href="${objData.html_url}" target="_blank">
          <img src="./src/image/git_icon.png">
        </a>
        <a href="${objData.homepage}" target="_blank">
          <img src="./src/image/veb-sajt_fzqdhnkflxc6_128.png">
        </a>
      </div>
      <iframe src="${objData.homepage}"></iframe>
    </div>
  `;
  divBlock.insertAdjacentHTML("beforeend", blockArchitecture);
}
