// Base price per size — small is the default $10, medium adds $2, large adds $4
const SIZE_PRICES = {
  small:  10,
  medium: 12,
  large:  14,
};

// Extra cost added for each topping the customer selects
const TOPPING_PRICE = 2;

// Extra fee charged when the customer chooses delivery
const DELIVERY_FEE = 5;

/**
 * Calculates the total cost of a pizza order.
 * @param {number} basePrice   - The starting price based on the selected size.
 * @param {number} toppingCount - How many toppings were selected.
 * @param {boolean} isDelivery  - Whether the customer chose delivery.
 * @returns {number} The final total price.
 */
function calculateTotal(basePrice, toppingCount, isDelivery) {
  const toppingsCost = toppingCount * TOPPING_PRICE;
  const deliveryCost = isDelivery ? DELIVERY_FEE : 0;
  return basePrice + toppingsCost + deliveryCost;
}

// Grab the form element so we can listen for when it's submitted
const form = document.getElementById("pizza-order-form");

// Grab the paragraph where we'll display the total price
const totalDisplay = document.getElementById("total");

// Listen for the form's submit event
form.addEventListener("submit", function (event) {
  // Prevent the page from reloading when the form is submitted
  event.preventDefault();

  // Read the selected size from the dropdown and look up its base price
  const selectedSize = document.getElementById("size").value;
  const basePrice = SIZE_PRICES[selectedSize];

  // Collect all checked topping checkboxes into an array
  const checkedToppings = Array.from(
    document.querySelectorAll('input[name="topping"]:checked')
  );

  // Count how many toppings are selected
  const toppingCount = checkedToppings.length;

  // Check whether the delivery option is ticked
  const isDelivery = document.getElementById("delivery").checked;

  // Calculate the total using our function
  const total = calculateTotal(basePrice, toppingCount, isDelivery);

  // Show the result on the page
  totalDisplay.textContent = `Total: $${total}`;
});