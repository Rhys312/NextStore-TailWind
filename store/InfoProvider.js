import React, { useReducer, useState, useContext } from 'react';
import ThumbnailContext from './ThumbnailProvider';

const InfoContext = React.createContext({
  movies: [],
  numOfTicket: 0,
  totalCost: 0,
  addTicket: () => {},
  addTicketInsideCart: () => {},
  removeTicketInsideCart: () => {},
  modalState: null,
  handleState: () => {},
  handleCartState: () => {},
});

export const InfoProvider = (props) => {
  const thumbnailCtx = useContext(ThumbnailContext);
  const [infoCtx, setInfoCtx] = useState({
    movies: [],
    numOfTicket: 0,
    totalCost: 0,
    addTicket: (element) => addTicketHandler(element),
    addTicketInsideCart: (element) => addTicketInsideCart(element),
    removeTicketInsideCart: (element) => removeTicketInsideCart(element),
    modalState: null,
    modalCartState: null,
    handleState: (state) => handleState(state),
    handleCartState: (state) => handleCartState(state),
  });

  const handleState = (state) => {
    setInfoCtx((prev) => {
      return {
        ...prev,
        modalState: state,
      };
    });
  };

  const handleCartState = (state) => {
    setInfoCtx((prev) => {
      return {
        ...prev,
        modalCartState: state,
      };
    });
  };

  const addTicketHandler = (ticketNum) => {
    setInfoCtx((prev) => {
      return {
        ...prev,
        numOfTicket: prev.numOfTicket + ticketNum,
        movies: prev.movies.concat({
          title: thumbnailCtx.title,
          ticketNum: ticketNum,
          id: thumbnailCtx.id,
        }),
      };
    });
  };

  let updatedMovies = [...infoCtx.movies];
  let updatedNumOfTicket = infoCtx.numOfTicket;

  const addTicketInsideCart = (element) => {
    setInfoCtx((prev) => {
      const elementIndex = prev.movies.findIndex(
        (movie) => movie.id === element.id
      );

      updatedMovies[elementIndex] = {
        ...element,
        ticketNum: element.ticketNum + 1,
      };

      updatedNumOfTicket = updatedMovies.reduce((total, movie) => {
        return total + movie.ticketNum;
      }, 0);

      return {
        ...prev,
        movies: updatedMovies,
        numOfTicket: updatedNumOfTicket,
      };
    });
  };

  const removeTicketInsideCart = (element) => {
    setInfoCtx((prev) => {
      const elementIndex = prev.movies.findIndex(
        (movie) => movie.id === element.id
      );

      if (element.ticketNum == 1) {
        updatedMovies = updatedMovies.filter(
          (movie) => movie.id !== element.id
        );
      } else {
        updatedMovies[elementIndex] = {
          ...element,
          ticketNum: element.ticketNum - 1,
        };
      }

      updatedNumOfTicket = updatedMovies.reduce((total, movie) => {
        return total + movie.ticketNum;
      }, 0);

      return {
        ...prev,
        movies: updatedMovies,
        numOfTicket: updatedNumOfTicket,
      };
    });
  };

  return (
    <InfoContext.Provider value={infoCtx}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
