import "./styles/style.css";
import Nav from "./components/Nav.js";
import displayProducts from "./components/Carte.js";
import createCategory from './components/Category';
import { displayProduct } from './components/Detailspage.js'
import createFilterBtn from "./components/FilterBar.js";
import { createBrowserHistory } from "history";
// import { createBrowserHistory } from "history";
// import filter from './utils/Filter.js';

document.getElementById("nav").appendChild(Nav());
document.querySelector(".category-container").append(createCategory());
document.querySelector(".filter-container").appendChild(createFilterBtn());
document.getElementById("cartes").appendChild(displayProducts());

let history = createBrowserHistory();
let homeRequest = await fetch('http://192.168.5.181:3000/home');
let homeData = await homeRequest.json();

if (history.location.pathname == '/') {
    document.getElementById("cartes").appendChild(displayProducts(homeData));
} else if (history.location.pathname == '/product/') {
    const searchParams = new URLSearchParams(history.location.search);
    const idDuProduit = searchParams.get('id')

    let productRequest = await fetch(`http://192.168.5.181:3000/product/${idDuProduit}`);
    let productData = await productRequest.json();


    document.getElementById("cartes").appendChild(displayProduct(productData[0]));


    // document.getElementById('cartes').appendChild()
}

