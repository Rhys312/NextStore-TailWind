import { el } from 'date-fns/locale';
import React, { useReducer, useState, useContext } from 'react';
import ThumbnailContext from './ThumbnailProvider';

const InfoContext = React.createContext({
  movies: [],
  numOfTicket: 0,
  totalCost: 0,
  addTicket: () => {},
  addTicketInsideCart: () => {},
  removeTicketInsideCart: () => {},
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
  });

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

  let updatedMovies;
  updatedMovies = [...infoCtx.movies];

  const addTicketInsideCart = (element) => {
    setInfoCtx((prev) => {
      const elementIndex = prev.movies.findIndex(
        (movie) => movie.id === element.id
      );
      let updatedMovies = [...prev.movies];
      updatedMovies[elementIndex] = {
        ...element,
        ticketNum: element.ticketNum + 1,
      };

      return {
        ...prev,
        movies: updatedMovies,
      };
    });
  };

  const removeTicketInsideCart = (element) => {};

  return (
    <InfoContext.Provider value={infoCtx}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
