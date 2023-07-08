import React, { useState } from 'react';

function ShoppingCart({ cartItems, removeFromCart }) {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;

