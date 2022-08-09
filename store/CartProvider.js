import React, { useReducer } from 'react';

const CartContext = React.createContext({
  movies: [],
  totalAmount: 0,
  addTicket: (movie) => {},
  removeTicket: (id) => {},
});

export default CartContext;

const CartProvider = (props) => {
  

  const cartContext = {
    
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider };
