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
    img: `img/dress2.jpeg`,
    name: `Mon Cheri`,
    code: `#F496`,
    designer: `Sofia Tolli`,
    salePrice: 230,
    regPrice: 450,
    description: `A line ball gown with sheer bodice and matching lace straps, lace trails down the skirt and center back with appliqué on either side, low v back with flower detail, chapel train with horse hair.`,
    stock: 21,
  },{
    img: `img/dress3.jpeg`,
    name: `Espi Lansa`,
    code: `#B894`,
    designer: `Ellie Wilde`,
    salePrice: 320,
    regPrice: 670,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 36,
  },{
    img: `img/dress4.jpg`,
    name: `Tulip`,
    code: `#G309`,
    designer: `Oleg Cassini`,
    salePrice: 907,
    regPrice: 465,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 34,
  },{
    img: `img/dress5.jpg`,
    name: `Saiid Kobeisy`,
    code: `#P930`,
    designer: `Melissa Sweet`,
    salePrice: 275,
    regPrice: 598,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 26,
  },{
    img: `img/dress6.jpg`,
    name: `Ezoani`,
    code: `#D389`,
    designer: `Ellie Wilde`,
    salePrice: 347,
    regPrice: 726,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 62,
  },{
    img: `img/dress7.jpg`,
    name: `Provonias`,
    code: `#H389`,
    designer: `Oleg Cassini`,
    salePrice: 220,
    regPrice: 469,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 43,
  },{
    img: `img/dress8.jpeg`,
    name: `Eladia`,
    code: `#N324`,
    designer: `Vera Wang`,
    salePrice: 870,
    regPrice: 1020,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 75,
  },{
    img: `img/dress9.jpg`,
    name: ``,
    code: `#M243`,
    designer: `Karla Paoul`,
    salePrice: 568,
    regPrice: 980,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 59,
  },{
    img: `img/dress10.jpg`,
    name: `Espi Lansa`,
    code: `#J324`,
    designer: `Sofia Tolli`,
    salePrice: 738,
    regPrice: 937,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 30,
  },{
    img: `img/dress11.jpg`,
    name: `Espi Lansa`,
    code: `#M423`,
    designer: `Ellie Wilde`,
    salePrice: 320,
    regPrice: 670,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 69,
  },{
    img: `img/dress12.jpg`,
    name: `Espi Lansa`,
    code: `#L234`,
    designer: `Ellie Wilde`,
    salePrice: 130,
    regPrice: 380,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock:  27,
  },{
    img: `img/dress13.jpg`,
    name: `Espi Lansa`,
    code: `#W329`,
    designer: `Ellie Wilde`,
    salePrice: 215,
    regPrice: 340,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 49,
  },{
    img: `img/dress14.jpeg`,
    name: `Espi Lansa`,
    code: `#R423`,
    designer: `Ellie Wilde`,
    salePrice: 309,
    regPrice: 480,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 36,
  },{
    img: `img/dress15.jpg`,
    name: `Espi Lansa`,
    code: `#O234`,
    designer: `Ellie Wilde`,
    salePrice: 320,
    regPrice: 508,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 39,
  },{
    img: `img/dress16.jpg`,
    name: `Espi Lansa`,
    code: `#E429`,
    designer: `Ellie Wilde`,
    salePrice: 240,
    regPrice: 370,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 24,
  },{
    img: `img/dress17.jpg`,
    name: `Espi Lansa`,
    code: `#Y4893`,
    designer: `Ellie Wilde`,
    salePrice: 360,
    regPrice: 576,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 38,
  },{
    img: `img/dress18.jpeg`,
    name: `Espi Lansa`,
    code: `#V329`,
    designer: `Ellie Wilde`,
    salePrice: 609,
    regPrice: 843,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 58,
  },{
    img: `img/dress19.jpg`,
    name: `Espi Lansa`,
    code: `#G239`,
    designer: `Ellie Wilde`,
    salePrice: 930,
    regPrice: 1100,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 42,
  },{
    img: `img/dress20.jpg`,
    name: `Espi Lansa`,
    code: `#J302`,
    designer: `Ellie Wilde`,
    salePrice: 740,
    regPrice: 1010,
    description: `Constructed to be super-lightweight and airy, this tulle ball gown wedding dress still features plenty of gorgeous embellishment.`,
    stock: 60,
  }
]

function getProductAsHtmlString(product) {
  
  return `<article class="bride-container">
            <article class="bride-grid">
            <img src="${product.img}" alt="Dress 1">
              <ul>
                <li><h3>${product.name}</h3></li>
                <li><strong>${product.code}</strong></li>
                <li>Designer: <strong>${product.designer}</strong></li>
                <li>Sample Sale Price:<strong id="redFont">${product.salePrice}CA</strong></li>
                <li>Regular Price:<strong>${product.regPrice}CA</strong></li>
                <li>${product.description}</li>
                <li>Stock: <strong>${product.stock}</strong></li>
                </ul>
            </article>
          </article>
          <form>
                        <fieldset>                            
                          <legend><strong>Colours</strong></legend>
                            <ul>
                              <li><label><input type="radio" name="colour" value="i"> <span>Ivory</span></label></li>
                              <li><label><input type="radio" name="colour" value="p"> <span>Pure White</span></label></li>
                              <li><label><input type="radio" name="colour" value="b"> <span>Blush</span></label></li>
                            </ul>
                        </fieldset>
                        <fieldset>
                          <legend><strong>Sizes</strong></legend>
                            <ol>
                              <li><label><input type="radio" name="size" value="range"> <span>Sizes 0-14</span></label></li>
                              <li><label><input type="radio" name="size" value="petite"> <span>Petite Sizes 0P-14P</span></label></li>
                              <li><label><input type="radio" name="size" value="plus"> <span>Plus sizes 16W-26W</span></label></li>
                              <li><label><input type="radio" name="size" value="length"> <span>Extra Length</span></label></li>
                            </ol>
                        </fieldset>
                      </form>`;
}
/* TRIED FLIP LAYOUT BUT CANT FIGURE OUT GRID WITH MY EXISTING GRID LAYOUT
function switchLayout() {
  document.getElementById('products').classList.toggle('column-view');
} */

function renderProducts(arrToRender) {
  const arrOfHtmlProducts = arrToRender.map(getProductAsHtmlString);
  const strgOfHtmlProducts = arrOfHtmlProducts.join('\n');
  document.getElementById('products').innerHTML = strgOfHtmlProducts;
}

/* function toggleProductLayout() {
  document.getElementById('products').classList.toggle('grid-view');
} */

renderProducts(products);
document.getElementById('toggleView').addEventListener('click', toggleProductLayout)

let itemsInCart = 0;

function updateCart(amtToAdd) {
    itemsInCart += amtToAdd;
    document.getElementById(`cartNum`).innerHTML = `${itemsInCart}`;
}

/* renderProducts(products.slice(0.3));

document.getElementById('layout').addEventListener('click',event => switchLayout() ) */