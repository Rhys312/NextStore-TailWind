import React from 'react';

const ThumbnailContext = React.createContext({
  trailer: '',
  title: '',
  id: null,
});

export const ThumbnailProvider = (props) => {
  const thumbnailCtx = {
    trailer: ThumbnailContext.trailer,
    title: ThumbnailContext.title,
    id: ThumbnailContext.id,
  };
  return (
    <ThumbnailContext.Provider value={thumbnailCtx}>
      {props.children}
    </ThumbnailContext.Provider>
  );
};

export default ThumbnailContext;
