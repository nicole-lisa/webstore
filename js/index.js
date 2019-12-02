let itemsInCart = 0;

function updateCart(amtToAdd) {
    itemsInCart += amtToAdd;
    document.getElementById(`cartNum`).innerHTML = `${itemsInCart}`;
}