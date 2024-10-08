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

changeLanguageVariant();
