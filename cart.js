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

let total = 0;
function buyThisNow(target) {
  let prodcutName = target.childNodes[3].childNodes[3].innerText; // get product name from product display
  const p = document.createElement("p");
  p.innerText = prodcutName;
  cartItmesDisplay.appendChild(p); //product name displayed to the cart
  purchaseButtonCodition();
  let priceValue = target.childNodes[3].childNodes[5].innerText.split(" ");
  let price = parseFloat(priceValue[1]); // get price of the product
  total = parseFloat(total) + parseFloat(price);
  document.getElementById("total-price").innerText = "₹ " + total.toFixed(2); //total price updated to the cart section
  console.log(typeof total);
}

purchaseButtonCodition();
// console.log(purchaseButtonCodition());
