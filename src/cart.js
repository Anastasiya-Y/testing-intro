function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) { 
  if (quantity === 0) {
    throw new RangeError('Добавьте 1 или более товаров');
  }

  const cartCopy = [...cart];

  const itemInCart = cartCopy.find((item) => item.id === product.id);

  const currentQuantity = itemInCart ? itemInCart.quantity : 0;

  if (currentQuantity + quantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  if (itemInCart) {
    itemInCart.quantity += quantity;
  } else {
    cartCopy.push({ ...product, quantity });
  }

  return cartCopy;
}

function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
