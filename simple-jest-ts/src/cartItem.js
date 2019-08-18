export default function cartItem(item, quantity) {
  return {
    ...item,
    quantity,
  };
}
