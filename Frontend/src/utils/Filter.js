//import products from '../data/sample.json' with { type: 'json'}
//import products from '../data_test/sample.json' with { type: 'json'}

import createCard from "./Createcard";

export function sortListByType(word, homeProductsData) {
  const data = homeProductsData;
  const container = document.createElement("div");
  container.className = "cardContainer";
  container.classList.add("grid", "gap-2", "grid-cols-4", "p-4");
  const cartesContainer = document.getElementById("cartes");
  cartesContainer.innerHTML = "";
  let regex = new RegExp(
    word.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    "i"
  );
  data.forEach((meuble) => {
    if (
      regex.test(
        meuble.type.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      ) ||
      regex.test(
        meuble.material.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      ) ||
      regex.test(meuble.color.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    ) {
      container.appendChild(createCard(meuble));
    }
  });
  cartesContainer.appendChild(container);
}

//sortListByType(listMeuble, "")

export default sortListByType;
