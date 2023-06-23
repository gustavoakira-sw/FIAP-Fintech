const addToCartButton = document.getElementById('addToCartButton');
addToCartButton.addEventListener('click', addToCart);

function addToCart(event) {
  event.preventDefault();
  const productId = addToCartButton.dataset.productId;
  console.log(productId);
  const url = `localhost:5000/add_to_cart/${productId}`;

  fetch(url, {
    method: 'POST',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const message = document.createElement('p');
      message.innerText = 'Item added to cart';
      document.body.appendChild(message);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
