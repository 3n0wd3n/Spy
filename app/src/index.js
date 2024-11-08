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
  timerSection: {
    title: "timer",
    timeLabel: {
      firstBox: "1 min",
      secondBox: "3 min",
      thirdBox: "5 min",
    },
    tenseInTheBox: "Time is set to",
    preposition: "min",
  },
  spySection: {
    title: "spies",
    tense: "Minimal number of spies is 1 .Maximum number of spies is 50% of all players.",
    tenseInTheBox: "Time is set to",
    preposition: "is",
  },
  playerSection: {
    title: "players",
    tense: "Minimal number of players is 3 .Maximum number of players is 8.",
    tenseInTheBox: "Count of players",
    preposition: "is",
    inputPlaceholder: "player",
  },
  modeSection: {
    title: "mode",
    default: {
      title: "default",
      text: "Agents receive the same secret word while spies receive a slightly different word (ex: lemon vs. lime). No one knows their role, including the spies. Each round players describe their secret words, discuss with each other based on the clues, and vote out a player. As an agent, your mission is to identify yourself as an agent and catch the spies. As a spy, your mission is to stay cool, identify yourself as a spy and blend in. As a lemon agent, can you decipher the clues and find out one of the spies?",
    },
    hard: {
      title: "hard",
      text: "Agents receive the same secret word while spies receive a info about his role (he is spy now). He will have to pretend to have same one as others on order to blend in and not reveal his identity to other players. No one knows their role, including the spies. Each round players describe their secret words, discuss with each other based on the clues, and vote out a player. As an agent, your mission is to identify yourself as an agent and catch the spies. As a spy, your mission is to stay cool, identify yourself as a spy and blend in.",
    },
  },
  categorySection: {
    title: "category",
    tense: "Choose as many categories as you'd like, or create your own if you don't see what you're looking for.",
    categories: {
      category: {
        name: "countries",
        items: {
          item: "poland",
          item: "germany",
        },
      },
      category: {
        name: "meals",
        items: {
          item: "rice",
          item: "pizza",
        },
      },
      category: {
        name: "actors",
        items: {
          item: "brad pitt",
          item: "the rock",
        },
      },
      category: {
        name: "objects",
        items: {
          item: "brick",
          item: "light",
        },
      },
    },
    createButtonName: "create yours",
    yourCategory: {
      title: "your category",
      tense:
        "Create your own category. Add a title, and click the button with the plus symbol to add a new item to your list.",
      defaultCategory: {
        name: "category name",
        items: {
          item: "item in category",
        },
      },
      categories: {},
    },
  },
  cardSection: {
    hiddenCardText: "Tap on the card",
    visibleCardText: "Tap again to hide your card and pass the phone",
  },
  game: {
    tense: "The game is on and your time began. Good luck ! Below you can find remaining time.",
  },
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
  timerSection: {
    title: "časovač",
    timeLabel: {
      firstBox: "1 min",
      secondBox: "3 min",
      thirdBox: "5 min",
    },
    tenseInTheBox: "Časovač nastaven na",
    preposition: "min",
  },
  spySection: {
    title: "Špioni",
    tense: "Minimální počet špionů je 1. Maximální počet špionů je 50% ze včech hráčů.",
    tenseInTheBox: "Počet špionů",
    preposition: "je",
  },
  playerSection: {
    title: "hráči",
    tense: "Minimální počet hráčů je 3. Maximální počet hráčů je 8.",
    tenseInTheBox: "Počet hráčů",
    preposition: "je",
    inputPlaceholder: "hráč",
  },
  modeSection: {
    title: "Herní mod",
    default: {
      title: "základní",
      text: "Agenti dostanou stejné tajné slovo, zatímco špióni dostanou mírně odlišné slovo (např. citron vs. limetka). Nikdo nezná svou roli, včetně špiónů. V každém kole hráči popisují svá tajná slova, diskutují mezi sebou na základě indicií a vylučují hráče. Vaším úkolem jako agenta je identifikovat se jako agent a chytit špióny. Vaším úkolem jako špiona je zůstat v klidu, identifikovat se jako špion a splynout s okolím. Dokážete jako citronový agent rozluštit stopy a odhalit jednoho ze špionů?",
    },
    hard: {
      title: "obtížný",
      text: "Agenti dostanou stejné tajné slovo, zatímco špióni dostanou informaci o své roli (nyní je špiónem). Bude muset předstírat, že má stejnou jako ostatní, aby splynul s ostatními a neprozradil svou identitu ostatním hráčům. Nikdo nezná jejich roli, včetně špiónů. V každém kole hráči popisují svá tajná slova, diskutují mezi sebou na základě indicií a vyloučí jednoho hráče. Vaším úkolem jako agenta je identifikovat se jako agent a chytit špióny. Vaším úkolem jako špiona je zůstat v klidu, identifikovat se jako špion a splynout s okolím.",
    },
  },
  categorySection: {
    title: "kategorie",
    tense: "Vyberte si tolik kategorií, kolik chcete, nebo vytvořte vlastní, pokud nenajdete, co hledáte.",
    categories: {
      category: {
        name: "země/města",
        items: {
          item: "polsko",
          item: "německo",
        },
      },
      category: {
        name: "jídlo",
        items: {
          item: "rýže",
          item: "pizza",
        },
      },
      category: {
        name: "herci",
        items: {
          item: "brad pitt",
          item: "the rock",
        },
      },
      category: {
        name: "objekty",
        items: {
          item: "cihla",
          item: "světlo",
        },
      },
    },
    createButtonName: "vytvoř si vlastní",
    yourCategory: {
      title: "vlastní kategorie",
      tense:
        "Vytvoř si vlastní téma. Přidej titulek a kliknutím na tlačítko se symbolem plus přidáš novou položku do svého seznamu.",
      defaultCategory: {
        name: "název kategorie",
        items: {
          item: "položka v kategorii",
        },
      },
      categories: {},
    },
  },
  cardSection: {
    hiddenCardText: "Klikni na kartu",
    visibleCardText: "Klikni na kartu ještě jednou a posuň mobil dalšímu hráči",
  },
  game: {
    tense: "Hra začala a čas ti běží, tak hodně štěstí a pod textem je čas, který ti zbývá ať už jsi špion nebo agent.",
  },
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
