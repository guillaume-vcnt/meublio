export function displayProduct(data) {
  const container = document.createElement("div");
  container.className = "infosProduct";

  const imgDiv = document.createElement("div");
  imgDiv.className = "images";

  const mainImg = document.createElement("img");
  mainImg.className = "main-images";
  mainImg.src = data.image_links
    ? data.image_links[0]
    : "https://i0.wp.com/www.oicfurniture.com/wp-content/uploads/visual-portfolio/placeholder.png";

  const infosDiv = document.createElement("div");
  infosDiv.className = "infoprod";

  const productTitle = document.createElement("h2");
  productTitle.innerText = data.product_name;

  const productPrice = document.createElement("p");
  productPrice.innerText = data.price;

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "product-details";
  detailsDiv.innerHTML = `
    <h2>Infos produit :</h2>
    ${data.description} 
    ${data.material} 
    ${data.color}`;

  imgDiv.appendChild(mainImg);
  infosDiv.appendChild(productTitle);
  infosDiv.appendChild(productPrice);
  infosDiv.appendChild(detailsDiv);
  container.appendChild(imgDiv);
  container.appendChild(infosDiv);

  return container;
}