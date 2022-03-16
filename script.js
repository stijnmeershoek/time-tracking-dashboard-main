const jsonData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

let template = document.querySelector("template#card");
let currentCategory = "daily";

function changeCategory(cat) {
  currentCategory = cat;

  //   Switching the nav button states
  let activeBtn = document.querySelector(`button.active`);
  let btn = document.querySelector(`button.${cat}`);
  activeBtn.classList.remove("active");
  btn.classList.add("active");
  let transform = 0;

  //   Transition
  if (cat === "weekly") transform = 100;
  if (cat === "monthly") transform = 200;
  document.querySelectorAll("[data-grid]").forEach((grid) => {
    grid.style.setProperty("--transform", `-${transform}`);
  });
}

// Rendering all the Cards from the HTML template
jsonData.forEach((category) => {
  Object.entries(category.timeframes).forEach((frame) => {
    let grid = document.querySelector(`[data-grid='${frame[0]}']`);
    let el = template.content.cloneNode(true);
    let time = el.querySelector(".card-content h1");
    let prevPeriod = el.querySelector(".previous-period");
    time.textContent = `${frame[1].current}hrs`;
    switch (frame[0]) {
      case "daily":
        prevPeriod.textContent = `Yesterday - ${frame[1].previous}hrs`;
        break;
      case "weekly":
        prevPeriod.textContent = `Last Week - ${frame[1].previous}hrs`;
        break;
      case "monthly":
        prevPeriod.textContent = `Last Month - ${frame[1].previous}hrs`;
        break;
    }
    let card = document.createElement("div");
    card.appendChild(el);
    card.classList = "card";
    card.dataset.cardType = category.title.toLowerCase().replace(/ /g, "-");
    grid.appendChild(card);
  });
});
