export const addItemToCart = (cartItem, item) => {
  const existingItem = cartItem.find((i) => i.id === item.id);
  if (existingItem) {
    return cartItem.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  } else {
    return [...cartItem, { ...item, quantity: 1 }];
  }
};

export const clearItemFrom = (cartItem, itemId) => {
  return cartItem.filter((item) => item.id !== itemId);
};

export const removeItemFromCart = (cartItem, itemId) => {
  return cartItem
    .map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
};
