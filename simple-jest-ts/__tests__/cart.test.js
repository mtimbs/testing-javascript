import addItemToCart from '../src/cart';
import cartItem from '../src/cartItem';

test('adding an item to an empty cart makes the cart length equal to 1', () => {
  // Setup
  const cart = [];

  const item = {
    name: 'Some really good item',
    sku: 'SKU_FOO_BAR_BAZ_123',
    cost: 2999,
  };

  // Act
  const newCart = addItemToCart(item, cart);

  // Assert
  expect(newCart).toHaveLength(1);
});


test('adding an item that is already in the cart increases the quantity', () => {
  // Setup
  const item = {
    name: 'Some really good item',
    sku: 'SKU_FOO_BAR_BAZ_123',
    cost: 2999,
  };

  const cart = [cartItem(item, 1)];

  // Act
  const newCart = addItemToCart(item, cart);

  // Assert
  expect(newCart[0].quantity).toBe(2);
});

test('adding an item that is already in the cart does not increase the number of elements in the cart array', () => {
  // Setup
  const item = {
    name: 'Some really good item',
    sku: 'SKU_FOO_BAR_BAZ_123',
    cost: 2999,
  };

  const cart = [cartItem(item, 1)];

  // Act
  const newCart = addItemToCart(item, cart);

  // Assert
  expect(newCart).toHaveLength(1);
});
