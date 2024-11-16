export function filterDropdown() {
  const div = document.createElement("div");
  div.className = "relative";

  const button = document.createElement("button");
  button.className =
    "flex items-center px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900";
  button.innerHTML = "▼";

  const dropdown = document.createElement("div");
  dropdown.className =
    "absolute right-0 mt-2 w-48 bg-white border border-slate-300 rounded-lg shadow-lg hidden";
  dropdown.innerHTML = `
      <label class="block px-4 py-2">
        <input type="checkbox" class="mr-2"> Filtre 1
      </label>
      <label class="block px-4 py-2">
        <input type="checkbox" class="mr-2"> Filtre 2
      </label>
      <label class="block px-4 py-2">
        <input type="checkbox" class="mr-2"> Filtre 3
      </label>
    `;

  button.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });

  div.appendChild(button);
  div.appendChild(dropdown);
  return div;
}
