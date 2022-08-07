import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  movies: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_TICKET') {
    
  }

  if (action.type === 'REMOVE_TICKET') {
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addTicketHandler = (movie) => {
    dispatchCartState({ type: 'ADD_TICKET', movie: movie });
  };

  const removeTicketHandler = (id) => {
    dispatchCartState({ type: 'REMOVE_TICKET', id: id });
  };

  const cartContext = {
    movies: cartState.movies,
    totalAmount: cartState.totalAmount,
    addTicket: addTicketHandler,
    removeTicket: removeTicketHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
