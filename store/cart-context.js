import React from 'react';

const CartContext = React.createContext({
  movies: [],
  totalAmount: 0,
  addTicket: (movie) => {},
  removeTicket: (id) => {},
});

export default CartContext;
