// Base price for every pizza, before any toppings are added
const BASE_PRICE = 10;

// Extra cost added for each topping the customer selects
const TOPPING_PRICE = 2;

/**
 * Calculates the total cost of a pizza order.
 * @param {number} basePrice - The starting price of the pizza.
 * @param {number} toppingCount - How many toppings were selected.
 * @returns {number} The final total price.
 */
function calculateTotal(basePrice, toppingCount) {
  return basePrice + toppingCount * TOPPING_PRICE;
}

// Grab the form element so we can listen for when it's submitted
const form = document.getElementById("pizza-order-form");

// Grab the paragraph where we'll display the total price
const totalDisplay = document.getElementById("total");

// Listen for the form's submit event
form.addEventListener("submit", function (event) {
  // Prevent the page from reloading when the form is submitted
  event.preventDefault();

  // Collect all checked topping checkboxes into an array
  const checkedToppings = Array.from(
    document.querySelectorAll('input[name="topping"]:checked')
  );

  // Count how many toppings are selected
  const toppingCount = checkedToppings.length;

  // Calculate the total using our function
  const total = calculateTotal(BASE_PRICE, toppingCount);

  // Show the result on the page
  totalDisplay.textContent = `Total: $${total}`;
});