import telImage from "./assets/tel.png";
import addressImage from "./assets/address.png";
import mapImage from "./assets/map.png";

export function createAndRenderContact() {
  content.innerHTML = "";

  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    const image = document.createElement("img");
    const p = document.createElement("p");

    if (i === 0) {
      image.src = telImage;
      image.alt = "Telephone image";
      p.textContent = "+63 912 345 6789";
    } else {
      image.src = addressImage;
      image.alt = "House image";
      p.textContent = "123 Brew Street, Capitol Site";
    }

    div.appendChild(image);
    div.appendChild(p);
    contactInfo.appendChild(div);
  }

  contact.appendChild(contactInfo);

  const image = document.createElement("img");
  image.src = mapImage;
  image.classList.add("map");

  contact.appendChild(image);

  content.appendChild(contact);
}
