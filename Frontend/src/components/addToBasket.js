// ensuite il faut faire une fonction dans laquelle tu pourras mettre le code donc tu as besoin
const cart = [];

export function addToBasket(data) {
    let panier = document.getElementById('panier');
    panier.addEventListener('click', () => {
        if(!isIdInArray(cart, data.id)){
            panier.push(data.id)
        }
    })
    console.log('PANIER', panier)
    return panier

}

function isIdInArray(tableau, number) {
  return tableau.includes(number);
}












