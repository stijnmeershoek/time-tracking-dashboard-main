var template = document.querySelector("template");
var el = template.content.cloneNode(true);
let card = document.createElement("div");
card.appendChild(el);
card.classList = "card";
card.dataset.cardType = "work";
document.body.appendChild(card);
