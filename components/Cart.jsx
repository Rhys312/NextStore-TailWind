import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext, useState } from 'react';
import InfoContext from '../store/InfoProvider';
import CartInfo from '../components/CartInfo';

const Cart = ({ onShow }) => {
  const [isClicked, setIsClicked] = useState(false);
  const infoCtx = useContext(InfoContext);

  return (
    <React.Fragment>
      {isClicked && <CartInfo />}
      <div onClick={onShow} className="relative cursor-pointer">
        <AiOutlineShoppingCart className="text-2xl" />
        <span className="absolute flex w-5 h-5 text-center items-center justify-center text-sm text-white font-bold -top-3 -right-3 rounded-full bg-red-400">
          {infoCtx.numOfTicket}
        </span>
      </div>
    </React.Fragment>
  );
};

export default Cart;
