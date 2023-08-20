const makePurchaseButton = document.getElementById("make-purchase"); //Make Purchase button.
const cartItmesDisplay = document.getElementById("cart"); // Products displayed in the cart item here.
const couponCodeApplyButton = document.getElementById("coupon-apply"); // Coupon code apply button[SELL200]
const discountElement = document.getElementById("discount"); // Discount display section in the cart
const updatedPriceElement = document.getElementById("updated-price"); // Updated Balance display section

//Button condition: empty cart - disabled, nonEmpty cart - active.
function purchaseButtonCodition() {
  let j = cartItmesDisplay.childNodes.length - 1; // check cart's condition
  if (j === 0) {
    makePurchaseButton.setAttribute("disabled", "true");
    makePurchaseButton.classList.add("bg-gray-400", "cursor-not-allowed");
    makePurchaseButton.classList.remove("bg-themeColor");
  } else {
    makePurchaseButton.removeAttribute("disabled");
    makePurchaseButton.classList.remove("bg-gray-400", "cursor-not-allowed");
    makePurchaseButton.classList.add("bg-buttonColor");
  }
}

//Coupon button Codindition function: bellow 200 it's inactive, above 200 it's active.
function couponButtonCondition() {
  if (total < 200) {
    couponCodeApplyButton.setAttribute("disabled", "ture");
    couponCodeApplyButton.classList.add("bg-gray-400", "cursor-not-allowed");
    couponCodeApplyButton.classList.remove("bg-themeColor");
  } else {
    couponCodeApplyButton.removeAttribute("disabled");
    couponCodeApplyButton.classList.remove("bg-gray-400", "cursor-not-allowed");
    couponCodeApplyButton.classList.add("bg-buttonColor");
  }
}

let total = 0;
function buyThisNow(target) {
  let prodcutName = target.childNodes[3].childNodes[3].innerText; // get product name from product display
  const p = document.createElement("p");
  const count = cartItmesDisplay.childElementCount;
  p.classList.add("my-4", "text-lg", "font-midium");
  p.innerHTML = `${count + 1} ${"."} ${" "} ${prodcutName}`;
  cartItmesDisplay.appendChild(p); //product name displayed to the cart
  purchaseButtonCodition(); // call purchase button condition.
  let priceValue = target.childNodes[3].childNodes[5].innerText.split(" ");
  let price = parseFloat(priceValue[1]); // get price of the product
  total = parseFloat(total) + parseFloat(price);
  document.getElementById("total-price").innerText = total.toFixed(2); //total price updated to the cart section
  couponButtonCondition(); // call coupon apply button condition.
}
couponCodeApplyButton.addEventListener("click", function () {
  const inputCouponCode = document.getElementById("input-coupon");
  const couponCode = inputCouponCode.value;
  const myRefferCouponCode = "SELL200";
  if (couponCode === myRefferCouponCode) {
    const appliedDiscount = total * 0.2; // 20% coupon code apply
    discountElement.innerText = appliedDiscount.toFixed(2); // display discount amount in discount section
    updatedBalace = total - appliedDiscount;
    updatedPriceElement.innerText = updatedBalace;
    console.log(updatedBalace);
  } else {
    alert("Please apply valid coupon code");
  }
});

couponButtonCondition();
purchaseButtonCodition();
// console.log(purchaseButtonCodition());
