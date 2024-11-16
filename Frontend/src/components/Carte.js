function displayProducts(data) {
  const container = document.createElement("div");
  container.className = "cardContainer";
  container.classList.add("grid", "gap-2", "grid-cols-4", "p-4");
  data.forEach((product) => {
    const card = createCard(product);
    container.appendChild(card);
  });
  return container;
}

function createCard(product) {
  const carteDiv = document.createElement("div");
  carteDiv.className = "carte";
  carteDiv.classList.add(
    "border-solid",
    "border-2",
    "border-pink-100",
    "max-w-sm",
    "w-full"
  );

  const clickCarte = document.createElement("a");
  clickCarte.href = `/product/?id=${product.id}`;
  clickCarte.className = "linkcarte";

  const topDiv = document.createElement("div");
  topDiv.className = "topDiv";
  topDiv.classList.add("bg-zinc-400");

  const imgDiv = document.createElement("img");
  imgDiv.className = "mainImage";
  imgDiv.classList.add("border-b-2", "border-zinc-200", "max-h-40", "m-auto");
  imgDiv.src = product.image_links
    ? product.image_links[0]
    : "https://i0.wp.com/www.oicfurniture.com/wp-content/uploads/visual-portfolio/placeholder.png";

  const descDiv = document.createElement("div");
  descDiv.className = "productdesc";
  descDiv.classList.add("pl-2");
  descDiv.innerHTML = `
        <h1 class="text-lg"><b>${product.product_name}</b></h1>
        <p><b>Prix :</b> ${product.price}€</p>
    `;

  const btnElement = document.createElement("button");
  btnElement.className = "btn addToCart";
  btnElement.classList.add(
    "w-full",
    "text-center",
    "border",
    "rounded-4",
    "bg-zinc-400"
  );
  btnElement.innerText = "Ajouter au panier";
  btnElement.addEventListener("click", () => {
    panier.push(product.id);
    console.log(panier);
  });

  clickCarte.appendChild(topDiv);
  topDiv.appendChild(imgDiv);
  carteDiv.appendChild(clickCarte);
  carteDiv.appendChild(descDiv);
  carteDiv.appendChild(btnElement);

  return carteDiv;
}

export default displayProducts;
