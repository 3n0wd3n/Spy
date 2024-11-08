import "./styles.scss";

const gameObjectGENERAL = {
  version: 1,
  creator: "Michael Hajny",
  language: ["cz", "en"],
  isInTestMode: true,
};

const gameObjectEN = {
  gameControls: {
    headerControls: {
      colorMode: ["light", "dark"],
      languageVariant: ["cz", "en"],
    },
    bottomControls: {
      btnBack: "back",
    },
  },
  sections: {
    players: "players",
    spies: "spy/spies",
    timer: "timer",
    categories: "categories",
    mode: "mode",
  },
  playBtn: "play",
};

const gameObjectCZ = {
  gameControls: {
    headerControls: {
      colorMode: ["světlý", "tmavý"],
      languageVariant: ["cz", "en"],
    },
    bottomControls: {
      btnBack: "zpět",
    },
  },
  sections: {
    players: "hráči",
    spies: "špion/ni",
    timer: "časovač",
    categories: "kategorie",
    mode: "mod",
  },
  playBtn: "hrát",
};

const changeLanguageVariant = () => {
  let language = document.querySelector(".language-variant");
  language.addEventListener("click", () => {
    if (language.getAttribute("data-language") == "en") {
      language.setAttribute("data-language", "cz");

      //TODO: use cz json to set everything else
    } else {
      language.setAttribute("data-language", "en");

      //TODO: use en json to set everything else
    }
    // console.log(language.getAttribute("data-language"));
  });
};

const infoSectionFunctionality = () => {
  const dotContainer = document.querySelector(".info__dot");
  const paragraphs = document.querySelectorAll(".info__text");

  paragraphs.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => activateParagraph(index));
    dotContainer.appendChild(dot);
  });

  function activateParagraph(index) {
    document.querySelectorAll(".dot").forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove("inactive");
      } else {
        dot.classList.add("inactive");
      }
    });

    paragraphs.forEach((p, i) => {
      if (i === index) {
        p.classList.remove("hide");
      } else {
        p.classList.add("hide");
      }
    });
  }

  activateParagraph(0);
};

const switchToInfoPage = () => {
  let infoBtn = document.querySelector(".btn-container--info");
  infoBtn.addEventListener("click", () => {
    if (infoBtn.classList.contains("active")) {
      document.querySelector(".info").classList.add("hide");
      document.querySelector(".sections").classList.remove("hide");
      document.querySelector(".context-img").classList.remove("behind");
      infoBtn.classList.remove("active");
    } else {
      document.querySelector(".info").classList.remove("hide");
      document.querySelector(".sections").classList.add("hide");
      document.querySelector(".context-img").classList.add("behind");
      infoBtn.classList.add("active");
    }
  });
};

changeLanguageVariant();
infoSectionFunctionality();
switchToInfoPage();
