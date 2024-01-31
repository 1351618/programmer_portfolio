const dataMeAbout = {
  ru: {
    title: "Обо мне",
    fio: "Кожемякин Сергей",
    age: "39 лет",
    country: "Россия",
    specialization: { title: "специализация", text: "Фронтенд-разработчик" },
    Employment: {
      title: "Занятость",
      text: "полная занятость, частичная занятость, проектная работа, стажировка",
    },
    workSchedule: {
      title: "График работы",
      text: "полный день, удаленная работа",
    },
    aboutText:
      "Меня всегда интересовало программирование, и у меня всегда было желание заниматься этой областью. Теперь я полностью осознаю, что программирование — это мое истинное призвание, и сосредоточен на развитии своих навыков и профессиональном росте. Я работал в других областях в прошлом, но программирование всегда было моим хобби и источником удовольствия. У меня уже есть опыт работы в европейской ИТ-компании и фриланс-проектах, несмотря на то, что я новичок в области фронтенд-разработки. Сейчас я живу на Кипре",
  },

  en: {
    title: "About me",
    fio: "Kozhemyakin Sergey",
    age: "39 years",
    country: "Russia",
    specialization: { title: "specialization", text: "Frontend Developer" },
    Employment: {
      title: "Employment",
      text: "full time, part time, project work, internship",
    },
    workSchedule: { title: "Work schedule", text: "full day, remote work" },

    aboutText:
      "I have always been interested in programming and have always had a desire to pursue this field. I am now fully aware that programming is my true calling and I am focused on developing my skills and growing professionally. I have worked in other fields in the past, but programming has always been my hobby and source of pleasure. I already have experience working in a European IT company and freelancing projects, despite being new to front-end development. I currently live in Cyprus.",
  },
};

// let leng = "ru";
let leng = "en";

const aboutContent = document.querySelector(".about__content_text");
let aboutContentBlock = `
        <h1 class="main-title">${dataMeAbout[leng].title}</h1>
        <h2 class="main-selected about__content_text--main-selected">${dataMeAbout[leng].fio}</h2>
        <h2 class="main-selected">
            ${dataMeAbout[leng].age} <span>/</span> ${dataMeAbout[leng].country} 
        </h2>
        <h2 class="main-selected about__content_text--main-selected">
           
            ${dataMeAbout[leng].specialization.text}
        </h2>
        <p class="main-text">
            <strong>${dataMeAbout[leng].specialization.title}:</strong> <br />
            ${dataMeAbout[leng].specialization.text} <br />
            <strong>${dataMeAbout[leng].Employment.title}:</strong> <br />
            ${dataMeAbout[leng].Employment.text} <br />
            <strong>${dataMeAbout[leng].workSchedule.title}:</strong> <br />
            ${dataMeAbout[leng].workSchedule.text}
        </p>

        <p class="about-text">${dataMeAbout[leng].aboutText}</p>
`;
aboutContent.insertAdjacentHTML("beforeend", aboutContentBlock);
