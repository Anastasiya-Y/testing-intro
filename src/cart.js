function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) { 
  if (quantity === 0) {
    throw new RangeError('Добавьте 1 или более товаров');
  }

  const cartCopy = cart.map((item) => ({ ...item }));

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

function changeQuantity(cart, id, quantity) { 
  if (quantity === 0) {
    throw new RangeError('Количество не может быть равным 0');
  }

  const cartCopy = cart.map((item) => ({ ...item }));

  const itemInCart = cartCopy.find((item) => item.id === id);

  if (!itemInCart) {
    return cartCopy;
  }

  if (quantity > itemInCart.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  itemInCart.quantity = quantity;

  return cartCopy;
}

function removeFromCart(cart, id) { 
  const cartCopy = cart.map((item) => ({ ...item }));

  const index = cartCopy.findIndex((item) => item.id === id);

  if (index === -1) {
    return cartCopy;
  }

  cartCopy.splice(index, 1);

  return cartCopy;
}

function calculateCartSubtotal(cart) { 
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
