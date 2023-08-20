const makePurchaseButton = document.getElementById("make-purchase"); //Make Purchase button.
const cartItmesDisplay = document.getElementById("cart"); // Products displayed in the cart item here.

//Button condition: empty cart - disabled, nonEmpty cart - active.
function purchaseButtonCodition() {
  let j = cartItmesDisplay.childNodes.length - 1; // check cart's condition
  if (j === 0) {
    makePurchaseButton.disabled = true;
  } else {
    makePurchaseButton.disabled = false;
  }
}

function buyThisNow(target) {
  let priceValue = target.childNodes[3].childNodes[5].innerText.split(" ");
  let price = parseFloat(priceValue[1]); // get price of the product
  let prodcutName = target.childNodes[3].childNodes[3].innerText; // get product name from product display
  const p = document.createElement("p");
  p.innerText = prodcutName;
  cartItmesDisplay.appendChild(p); //product name displayed to the cart
  // console.log(prodcutName);
  purchaseButtonCodition();
}

purchaseButtonCodition();
// console.log(purchaseButtonCodition());
