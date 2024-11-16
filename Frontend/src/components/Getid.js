function getIdFromUrl() {
  const url = new URL(window.location.href);
  const idProduct = url.searchParams.get("id");

  return idProduct;
}

const productId = getIdFromUrl();
