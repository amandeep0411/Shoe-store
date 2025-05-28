javascript
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }
  cart.forEach((item, index) => {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>Price: $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>`;
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}


