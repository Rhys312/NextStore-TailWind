import React, { useContext, useRef } from 'react';
import Link from 'next/link';
import InfoContext from '../../store/InfoProvider';

const Booking = () => {
  const infoCtx = useContext(InfoContext);
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();

  const submitInfoHandler = (e) => {
    e.preventDefault();
    const info = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
      movies: infoCtx.movies,
      totalCost: infoCtx.totalCost,
    };

    console.log(info);
  };

  return (
    <div className=" ">
      <div className="absolute z-[20] w-screen h-screen flex flex-col items-center justify-center  rounded-md p-12 ">
        <form
          onSubmit={(e) => submitInfoHandler(e)}
          className="flex flex-col rounded-md w-80 bg-primary-light-brown py-4 px-6 space-y-2"
        >
          <label className="labelStyle" htmlFor="name">
            Name
          </label>
          <input
            className="inputStyle"
            type="text"
            id="name"
            placeholder="Enter your name..."
            ref={nameInputRef}
          ></input>
          <label className="labelStyle" htmlFor="email">
            Email address
          </label>
          <input
            className="inputStyle"
            type="text"
            id="email"
            placeholder="Enter your email address..."
            ref={emailInputRef}
          ></input>
          <label className="labelStyle" htmlFor="phone">
            Phone number
          </label>
          <input
            className="inputStyle"
            type="text"
            id="phone"
            placeholder="Enter your phone number..."
            ref={phoneInputRef}
          ></input>
          <div>
            <button
              type="submit"
              className=" my-4 bg-primary-teal w-full hover:bg-teal-500 text-white py-2 rounded-md"
            >
              Buy
            </button>
          </div>
        </form>
      </div>
      <img
        alt=""
        className="z-[1] absolute top-0 h-[100vh] w-screen"
        src="https://cdna.artstation.com/p/assets/images/images/039/267/040/large/jitendra-pathak-illustrator-vector-art-design-illustration.jpg?1625426605"
      />
    </div>
  );
};

export default Booking;
