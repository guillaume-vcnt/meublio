import sortListByType from "../utils/Filter";

function createCategory() {
  const categoryChildContainer = document.createElement("div");

  categoryChildContainer.className = "w-full bg-zinc-0";

  const innerContainer = document.createElement("div");
  innerContainer.className = "max-w-7xl mx-auto px-4";

  const buttonContainer = document.createElement("div");
  buttonContainer.className =
    "flex flex-wrap justify-center md:justify-between items-center py-4 gap-4";

  let nameCategory = [
    "Armoire",
    "Chaise",
    "Lampe",
    "Table",
    "Canapé",
    "Lit",
    "Tapis",
    "Fauteuil",
  ];

  nameCategory.forEach((name, index) => {
    let newCategory = document.createElement("button");
    newCategory.setAttribute("id", name.toUpperCase());
    newCategory.setAttribute("name", "button-category");
    newCategory.onclick = handleClick;

    newCategory.className =
      "px-4 py-2 bg-white hover:bg-gray-50 text-gray-800 rounded-sm transition-colors duration-200 hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50";
    newCategory.innerText = name;
    buttonContainer.appendChild(newCategory);

    if (index < nameCategory.length - 1) {
      const separator = document.createElement("span");
      separator.className = "text-zinc-500"; // Style du séparateur
      separator.innerText = " | ";
      buttonContainer.appendChild(separator);
    }
  });

  innerContainer.appendChild(buttonContainer);
  categoryChildContainer.appendChild(innerContainer);
  return categoryChildContainer;
}

// Fonction à coder pour filtrer les produits par type
function handleClick() {
  sortListByType(this.id);
}

export default createCategory;
