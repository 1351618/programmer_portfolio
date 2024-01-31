const keySkills_div = document.querySelector(".key-skills");
console.log("llllllllllllllllllllllllllllllllllllllllllll");

const dataKeySkills = [
  "JavaScript",
  "HTML",
  "CSS",
  "CSS3",
  "Node.js",
  "Git",
  "Адаптивная верстка",
  "HTML5",
  "Python",
  "Пользователь ПК",
  "MS Office",
  "Fusion-360",
  "Adobe Photoshop",
  "БЭМ",
  "React",
  "Frontend",
  "Sass",
  "WebPack",
];

let KeySkillsBlock = `
        <h1 class="main-title">Ключевые навыки</h1>
        <ul>
        ${dataKeySkills
          .map((valSkil, index) => `<li key=${index}>${valSkil}</li>`)
          .join("")}
        </ul>
        <h2 class="main-selected">Личные качества:</h2>
        <ul>
            <li>- Ответственность и исполнительность в выполнении поставленных задач;</li>
            <li>- Целеустремленность и нацеленность на результат;</li>
            <li>- Гибкость и умение адаптироваться к изменяющимся условиям работы;</li>
            <li>- Креативность и способность находить нестандартные решения задач.</li>
        </ul>
`;

keySkills_div.insertAdjacentHTML("beforeend", KeySkillsBlock);
