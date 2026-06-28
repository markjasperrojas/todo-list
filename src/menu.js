import latteImage from "./assets/latte.png";
import cappuccinoImage from "./assets/cappuccino.png";
import mochaImage from "./assets/mocha.png";
import teaImage from "./assets/tea.png";

export function createAndRenderMenu() {
  content.innerHTML = "";

  const menu = document.createElement("div");
  menu.classList.add("menu");

  for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    card.classList.add("card");
    p.classList.add("prod-name");

    if (i === 0) {
      image.src = latteImage;
      image.alt = "Latte image";

      p.textContent = "LATTE";
      p2.textContent = "Smooth espresso with steamed milk and light foam.";
    } else if (i === 1) {
      image.src = cappuccinoImage;
      image.alt = "Cappuccino image";

      p.textContent = "CAPPUCCINO";
      p2.textContent = "Espresso with steamed milk and thick foam.";
    } else if (i === 2) {
      image.src = mochaImage;
      image.alt = "Mocha image";

      p.textContent = "MOCHA";
      p2.textContent = "Espresso mixed with chocolate and steamed milk.";
    } else {
      image.src = teaImage;
      image.alt = "Tea image";

      p.textContent = "TEA";
      p2.textContent = "Simple brewed drink with a light, refreshing taste.";
    }

    card.appendChild(image);
    div.appendChild(p);
    div.appendChild(p2);
    card.appendChild(div);
    menu.appendChild(card);
  }

  content.appendChild(menu);
}
