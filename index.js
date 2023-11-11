// todo  index.js

import "./src/js/site_style.js";
import "./src/js/entr.js";
import "./src/js/animation.js";

const json_site = "./src/json/sites.json";

const mainExamples = document.querySelector(".sites");

function FetchRequest(data, funct, divBlock) {
  fetch(data)
    .then((response) => response.json())
    .then((jsonData) => {
      funct(jsonData, divBlock);
    })
    .catch((error) => {
      console.error("Ошибка загрузки файла:", error);
    });
}

// отрисовка примера сайта
function siteRender(data, divBlock) {
  //   console.log(data[0]);
  data.map((val) => {
    console.log(val.guideLink);
    // создание элементов
    const site_Div = document.createElement("div"); // блок сайта
    site_Div.classList.add("site");
    //   site_Div.classList.add("examples-wind");

    const gitVisit_Div = document.createElement("div"); // блок - кнопки
    gitVisit_Div.classList.add("git-visit");

    const siteLinkGit_A = document.createElement("a"); //ссылка на git а
    siteLinkGit_A.href = val.guideLink;
    siteLinkGit_A.target = "_blank";
    const siteLinkGit_Img = document.createElement("img"); //иконка для git
    siteLinkGit_Img.src = "./src/image/git_icon.png";
    siteLinkGit_A.appendChild(siteLinkGit_Img);

    const siteLinkSite_A = document.createElement("a"); //ссылка на git а
    siteLinkSite_A.href = val.siteLink;
    siteLinkSite_A.target = "_blank";
    const siteLinkSite_Img = document.createElement("img"); //иконка для git
    siteLinkSite_Img.src = "./src/image/veb-sajt_fzqdhnkflxc6_128.png";
    siteLinkSite_A.appendChild(siteLinkSite_Img);

    // siteLinkGit_A
    // siteLinkSite_A
    gitVisit_Div.appendChild(siteLinkGit_A);
    gitVisit_Div.appendChild(siteLinkSite_A);

    const site_Iframe = document.createElement("iframe"); //создание фрейма
    site_Iframe.src = val.siteLink; //контент фрейма

    // gitVisit_Div
    //  site_Iframe
    site_Div.appendChild(gitVisit_Div);
    site_Div.appendChild(site_Iframe);

    divBlock.appendChild(site_Div);
  });
}

// запуск функции для рендеринга примеров
//* json_site - ссылка на json
//* siteRender - функция сборки примера
//* mainExamples - div где отрисовывать
FetchRequest(json_site, siteRender, mainExamples); //сайты
