import {Item} from "./interfaces";

export default function cartItem(item: Item, quantity: number) {
  return {
    ...item,
    quantity,
  };
}
