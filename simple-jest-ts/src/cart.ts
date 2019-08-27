import cartItem from './cartItem';
import {Cart, CartItem, Item} from "./interfaces";

export default function addItemToCart(item: Item, cart: Cart): Cart {
  const [matchedItem]: Array<CartItem> = cart.filter((cartItem: CartItem) => cartItem.sku === item.sku);

  if (matchedItem) {
    matchedItem.quantity += 1;
  } else {
    cart.push(
        cartItem(item, 1),
    );
  }

  return cart;
}

