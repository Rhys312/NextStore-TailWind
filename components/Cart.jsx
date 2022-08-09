import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext, useState } from 'react';
import InfoContext from '../store/InfoProvider';

const Cart = () => {
  const infoCtx = useContext(InfoContext);

  return (
    <React.Fragment>
      <div
        onClick={() => infoCtx.handleCartState(true)}
        className="relative cursor-pointer"
      >
        <AiOutlineShoppingCart className="text-2xl" />
        <span className="absolute flex w-5 h-5 text-center items-center justify-center text-sm text-white font-bold -top-3 -right-3 rounded-full bg-red-400">
          {infoCtx.numOfTicket}
        </span>
      </div>
    </React.Fragment>
  );
};

export default Cart;
