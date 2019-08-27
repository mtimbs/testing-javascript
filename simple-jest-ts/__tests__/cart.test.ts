import addItemToCart from '../src/cart';
import cartItem from '../src/cartItem';
import {Cart, Item} from "../src/interfaces";

test('adding an item to an empty cart makes the cart length equal to 1', () => {
  // Setup
  const cart: Cart = [];

  const item: Item = {
    name: 'Some really good item',
    sku: 'SKU_FOO_BAR_BAZ_123',
    price: 2999,
  };

  // Act
  addItemToCart(item, cart);

  // Assert
  expect(cart).toHaveLength(1);
});


test('adding an item that is already in the cart increases the quantity', () => {
  // Setup
  const item: Item = {
    name: 'Some really good item',
    sku: 'SKU_FOO_BAR_BAZ_123',
    price: 2999,
  };

  const cart: Cart = [cartItem(item, 1)];

  // Act
  addItemToCart(item, cart);

  // Assert
  expect(cart[0].quantity).toBe(2);
});

test('adding an item that is already in the cart does not increase the number of elements in the cart array', () => {
  // Setup
  const item: Item = {
    name: 'Some really good item',
    sku: 'SKU_FOO_BAR_BAZ_123',
    price: 2999,
  };

  const cart: Cart = [cartItem(item, 1)];

  // Act
  addItemToCart(item, cart);

  // Assert
  expect(cart).toHaveLength(1);
});


test('No assertions will result in a passing test', () => {
// Setup
  const item: Item = {
    name: 'Some really good item',
    sku: 'SKU_FOO_BAR_BAZ_123',
    price: 2999,
  };
  const cart: Cart = [cartItem(item, 1)];

  // Act
  addItemToCart(item, cart);

  // Assert
  // TODO: Write some assertion for this case
});

test('Async code will hit end of test before resolving and mark as pass because no assertion', () => {
  setTimeout(() => {
    expect(true).toBe(false)
  }, 100)
});


test('Async code will hit end of test before resolving and mark as pass because no assertion', () => {
  setTimeout(() => {
    expect(true).toBe(false)
  }, 100)
});
