import React, { useContext } from 'react';
import Modal from '../components/Modal';
import InfoContext from '../store/InfoProvider';

const TICKET_PRICE = 5;

const CartInfo = ({ onClose }) => {
  const infoCtx = useContext(InfoContext);
  const movies = infoCtx.movies;
  const totalTicket = movies.reduce((total, movie) => {
    return total + movie.ticketNum;
  }, 0);

  const totalCost = totalTicket * TICKET_PRICE;

  // function removeTicketHandler(element) {}

  return (
    <Modal onClose={onClose}>
      <div className="absolute flex flex-col py-8 pt-6 px-8 items-center justify-between w-[95%] h-[95%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="flex flex-col justify-start items-center w-[100%] h-[70%] overflow-scroll ">
          {movies.map((movie) => (
            <div
              id={movie.id}
              key={movie.id}
              className="w-[100%] border-b-4 border-red-500 pb-4"
            >
              <h1 className=" text-3xl font-bold">{movie.title}</h1>
              <div className="flex font-bold items-end justify-between my-1">
                <div className="text-red-500 text-xl">${TICKET_PRICE}</div>
                <div className="buttonCart text-xl">x {movie.ticketNum}</div>

                <div className="flex items-end h-full justify-center space-x-4">
                  <button
                    onClick={() => infoCtx.removeTicketInsideCart(movie)}
                    className="buttonCart"
                  >
                    -
                  </button>
                  <button
                    onClick={() => infoCtx.addTicketInsideCart(movie)}
                    className="buttonCart"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[100%]">
          <div className=" text-3xl font-bold flex items-center justify-between ">
            <div>Total Amount</div>
            <div>${totalCost}</div>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button className="buttonCart rounded-2xl ">Close</button>
            <button className="buttonCart rounded-2xl bg-primary-teal text-white ">
              Order
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartInfo;
