function clickFilterBtn() {
  const displayFilterFormOn = document.querySelector(".filter-form");
  if (displayFilterFormOn.style.display == "flex") {
    displayFilterFormOn.style.display = "none";
  } else {
    displayFilterFormOn.style.display = "flex";
  }
}

function createFilterBtn() {
  const displayFilterFormOff = document.querySelector(".filter-form");
  displayFilterFormOff.style.display = "none";
  const newFilterButton = document.createElement("button");
  newFilterButton.setAttribute("id", "filter-button");
  newFilterButton.textContent = "FILTRES ▼";
  newFilterButton.onclick = clickFilterBtn;
  newFilterButton.className =
    "font-bold px-4 py-2 bg-white text-gray-800 rounded-sm transition-colors duration-200 hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-black";
  return newFilterButton;
}

export default createFilterBtn;

// WorkinPro: Création dynamique de la bar de filtre

// function clickFilterBtn() {
//   createFilterBarDynamique();
// }

// let idSelecteur = [
//   {
//     "select-filter-matiere": [
//       "bois",
//       "acier",
//       "cuir",
//       "plastique",
//       "tissus",
//       "tapis",
//       "fauteuil",
//     ],
//   },
// ];

// classSelecteur.forEach((element) => {
//   let key = Object.keys(element);
//   console.log(element[key]);
//   console.log(Object.keys(element));
// });

// function createFilterBarDynamique() {
//   const newFilterBar = document.createElement("select");
//   newFilterBar.setAttribute("id", "select-filter-matiere");
//   const newOption = document.createElement("option");
//   newOption.setAttribute("value", "");
//   newOption.textContent = "Matière";
//   newFilterBar.appendChild(newOption);
//   document.querySelector(".filter-container").appendChild(newFilterBar);
//   return newFilterBar;
// }
