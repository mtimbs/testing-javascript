import cartItem from './cartItem';

export default function addItemToCart(item, cart) {
  const listOfMatchingItemsInCart = cart.filter((itemInCart) => itemInCart.sku === item.sku);

  if (listOfMatchingItemsInCart.length === 1) {
    const [matchingItem] = listOfMatchingItemsInCart;
    matchingItem.quantity += 1;
  } else if (listOfMatchingItemsInCart.length === 0) {
    cart.push(
      cartItem(item, 1),
    );
  } else {
    throw new Error('More than one cartItem has the same SKU as the item you are trying to add');
  }

  return cart;
}
