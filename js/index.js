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
    description: `Understated glamour, maximum beauty. This stunning fit-and-flare silhouette from Stella York is a sheer masterpiece! `,
    stock: 36,
  },{
    img: `img/dress4.jpg`,
    name: `Tulip`,
    code: `#G309`,
    designer: `Oleg Cassini`,
    salePrice: 907,
    regPrice: 465,
    description: `A classic strapless sweetheart dips into a subtle plunge, masked with illusion tulle for coverage. A mix of graphic and floral laces create a truly extravagant feel throughout, offering a negative space effect for texture and dimension. `,
    stock: 34,
  },{
    img: `img/dress5.jpg`,
    name: `Saiid Kobeisy`,
    code: `#P930`,
    designer: `Melissa Sweet`,
    salePrice: 275,
    regPrice: 598,
    description: `The laces are placed about the bodice to enhance the curves, while also reaching over angled side cutouts which draw in the waist for a super-defined figure. `,
    stock: 26,
  },{
    img: `img/dress6.jpg`,
    name: `Ezoani`,
    code: `#D389`,
    designer: `Ellie Wilde`,
    salePrice: 347,
    regPrice: 726,
    description: `The sheer back element ties it all together with exposed boning for a sexy corsetry feel with floating lace appliqués for a surprising yet decadent touch. This gown zips beneath fabric-covered buttons.`,
    stock: 62,
  },{
    img: `img/dress7.jpg`,
    name: `Provonias`,
    code: `#H389`,
    designer: `Oleg Cassini`,
    salePrice: 220,
    regPrice: 469,
    description: `Bring out your inner romantic! This gracefully adorned floral masterpiece is an absolute vision for the classic bride. A slimmer cut A-line skirt falls gracefully to the floor, while a wider-cut tulle overlay features thoughtful floral appliques while falling away from the body—forming a wide, cage-like train over the silhouette. `,
    stock: 43,
  },{
    img: `img/dress8.jpeg`,
    name: `Eladia`,
    code: `#N324`,
    designer: `Vera Wang`,
    salePrice: 870,
    regPrice: 1020,
    description: `A floating lace effect along the sheer bodice adds a natural texture and refined glamour to the design, tapering into thin floating lace straps to form an open, lacy V-back detail. `,
    stock: 75,
  },{
    img: `img/dress9.jpg`,
    name: ``,
    code: `#M243`,
    designer: `Karla Paoul`,
    salePrice: 568,
    regPrice: 980,
    description: `Floral buds and stems cascade gently throughout the skirt offering a sense of gentle, windswept movement to this fashion-forward garden statement.`,
    stock: 59,
  },{
    img: `img/dress10.jpg`,
    name: `Espi Lansa`,
    code: `#J324`,
    designer: `Sofia Tolli`,
    salePrice: 738,
    regPrice: 937,
    description: `Where clean lines meet effortless romance: Style 7020 from Stella York has it all. The smooth, crepe bodice complements the voluminous multi-layer skirt featuring sparkle-swirl patterns and textured tulle which flow into a full, frothy train. .`,
    stock: 30,
  },{
    img: `img/dress11.jpg`,
    name: `Espi Lansa`,
    code: `#M423`,
    designer: `Kenneth Winston`,
    salePrice: 320,
    regPrice: 670,
    description: `The curved V-neckline updates the style to make it refined and feminine, while the thin, beaded straps follow into a floating strap feature in back for a completely unique look. The fabric-covered buttons add a hint of tradition against the sheer paneling for the perfect balance of classic and contemporary`,
    stock: 69,
  },{
    img: `img/dress12.jpg`,
    name: `Espi Lansa`,
    code: `#L234`,
    designer: `Rebecca Ingram`,
    salePrice: 130,
    regPrice: 380,
    description: `Seeking traditional style with a fresh update? Look no further than Style 6990! A straight-across neckline along the strapless bodice is youthful and classic, featuring matte cotton laces of layered, flourishing blooms for an organic feel. `,
    stock:  27,
  },{
    img: `img/dress13.jpg`,
    name: `Espi Lansa`,
    code: `#W329`,
    designer: `Maggie Sotaro`,
    salePrice: 215,
    regPrice: 340,
    description: `Soft beading offers a hint of sparkle throughout, as the laces cascade over the natural waistline and onto the flowing skirt of soft tulle layers. This gown falls into a flowy train detail, finished with horsehair trim to maintain shape from the aisle to the dance floor! This gown is also available in plus sizes.`,
    stock: 49,
  },{
    img: `img/dress14.jpeg`,
    name: `Espi Lansa`,
    code: `#R423`,
    designer: `Ella Rose`,
    salePrice: 309,
    regPrice: 480,
    description: `For the modern romantic, does Stella have the gown for you. A plunging sweetheart neckline gets a modern update with a sheer high-halter overlay, showered in matte, cotton laces with flourishing organic shapes. `,
    stock: 36,
  },{
    img: `img/dress15.jpg`,
    name: `Espi Lansa`,
    code: `#O234`,
    designer: `Kenneth Winston`,
    salePrice: 320,
    regPrice: 508,
    description: `The halter attaches with a braided trim detail, following into a braided multi-strap feature in back creating an open diamond-shaped keyhole element. .`,
    stock: 39,
  },{
    img: `img/dress16.jpg`,
    name: `Espi Lansa`,
    code: `#E429`,
    designer: `Sofia Tolli`,
    salePrice: 240,
    regPrice: 370,
    description: `Floral lace appliques then gently fall over the waistline and onto the full, multi-layer tulle skirt, making their way to the hem of the slight train`,
    stock: 24,
  },{
    img: `img/dress17.jpg`,
    name: `Espi Lansa`,
    code: `#Y4893`,
    designer: `Casablanca`,
    salePrice: 360,
    regPrice: 576,
    description: `So very boho and so very romantic, this sweet wedding dress by designer Stella York is sure to become an instant classic. Lace and French tulle over matte-side lavish satin create a relaxed A-line silhouette with illusion lace off-the-shoulder long sleeves.`,
    stock: 38,
  },{
    img: `img/dress18.jpeg`,
    name: `Espi Lansa`,
    code: `#V329`,
    designer: `Vera Wang`,
    salePrice: 609,
    regPrice: 843,
    description: `The bold and unique lace is what makes this dress perfectly boho. The long sleeves feature just a hint of twinkle on the lace as it finishes around the neckline, back and wrists in an organic style.`,
    stock: 58,
  },{
    img: `img/dress19.jpg`,
    name: `Espi Lansa`,
    code: `#G239`,
    designer: `Vera Wang`,
    salePrice: 930,
    regPrice: 1100,
    description: `The flower lace motifs “grow” over the natural waistline and onto the tulle skirt. This vine-inspired lace twists around to the sheer, open back that is finished with floating fabric-covered buttons`,
    stock: 42,
  },{
    img: `img/dress20.jpg`,
    name: `Espi Lansa`,
    code: `#J302`,
    designer: `Maggie Sotaro`,
    salePrice: 740,
    regPrice: 1010,
    description: `Simple and classic, this matte Mikado ballgown from Stella York radiates modern grace. The royal in you will shine with this pleated off-shoulder detail, creating a subtle and open V-neckline—adding an effortless structure that frames your upper body beautifully.`,
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
          </article>`
          ;
}
{/* NOT SURE HOW TO BRING IT INTO JAVA OR HTML
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
                      </form>` */}
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