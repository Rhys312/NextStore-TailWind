import React, { Fragment, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

import InfoContext from '../store/InfoProvider';

const Backdrop = () => {
  const infoCtx = useContext(InfoContext);

  return (
    <div
      onClick={() => {
        infoCtx.handleState(false);
        infoCtx.handleCartState(false);
      }}
      className=" cursor-pointer fixed top-0 left-0 w-screen z-[10000] h-[100vh] bg-slate-400 opacity-50 "
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-[20000] lg:w-[50%] md:w-[60%] w-[90%] h-[85vh] bg-primary-light-brown rounded-xl shadow-md overflow-scroll ">
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  let portalElement;

  if (typeof window !== 'undefined') {
    portalElement = document.getElementById('overlays');
  }

  return mounted ? (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  ) : null;
};

export default Modal;
