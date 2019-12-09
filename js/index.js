const products = [
  {
    img: `img/dress1.jpg`,
    name: `Calla Blanche`,
    code: `#C127`,
    designer: `Vera Wang`,
    salePrice: 250,
    regPrice: 575,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 18,
  },{
    img: `img/dress2.jpg`,
    name: `Mon Cheri`,
    code: `#F496`,
    designer: `Sofia Tolli`,
    salePrice: 230,
    regPrice: 450,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 21,
  },{
    img: `img/dress3.jpg`,
    name: `Espi Lansa`,
    code: `#F496`,
    designer: `Ellie Wilde`,
    salePrice: 320,
    regPrice: 670,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 36,
  }
]

function getProductAsHtmlString(product) {
  
  return `<article class="bride-container">
            <article class="bride-grid">
            <img ${product.img} src="img/dress1.jpg" alt="Dress 1">
              <ul>
                <li><h3>${product.name}</h3></li>
                <li><strong>${product.code}</strong></li>
                <li>Designer: <strong>${product.designer}</strong></li>
                <li>Sample Sale Price:<strong>${product.salePrice}CA</strong></li>
                <li>Regular Price:<strong>${product.regPrice}CA</strong></li>
                <li>${product.description}</li>
                <li>Stock: <strong>${product.stock}</strong></li>
                </ul>
            </article>
          </article>`;
}

function renderProducts(arrToRender) {
  const arrOfHtmlProducts = arrToRender.map(getProductAsHtmlString);
  const strgOfHtmlProducts = arrOfHtmlProducts.join('\n');
  document.getElementById('products').innerHTML = strgOfHtmlProducts;
}

function toggleProductLayout() {
  document.getElementById('products').classList.toggle('grid-view');
}

renderProducts(products);
document.getElementById('toggleView').addEventListener('click', toggleProductLayout)