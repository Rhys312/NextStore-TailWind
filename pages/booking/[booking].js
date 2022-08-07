import React from 'react';
import MuiPicker from '../../components/MuiPicker';
import Link from 'next/link';

const Booking = () => {
  return (
    <div className=" ">
      <div className="absolute z-[20] w-screen h-screen flex flex-col items-center justify-center  rounded-md p-12 ">
        <form className="flex flex-col rounded-md w-80 bg-slate-500 py-4 px-6">
          <label className="labelStyle" htmlFor="name">
            Name
          </label>
          <input
            className="inputStyle"
            type="text"
            id="name"
            placeholder="Enter your name..."
          ></input>
          <label className="labelStyle" htmlFor="address">
            Email address
          </label>
          <input
            className="inputStyle"
            type="text"
            id="address"
            placeholder="Enter your email address..."
          ></input>
          <label className="labelStyle" htmlFor="phone">
            Phone number
          </label>
          <input
            className="inputStyle"
            type="text"
            id="phone"
            placeholder="Enter your phone number..."
          ></input>
          <label className="labelStyle">Time</label>
          <MuiPicker />
          <div>
            <label className="labelStyle py-2">No. of tickets</label>
            <div className="flex items-center justify-between">
              <input
                type={'number'}
                step="1"
                defaultValue={'1'}
                className="inputStyle w-[60%]"
              />
              <button className="flex w-4 h-4 bg-primary-teal  items-center justify-center text-white px-4 py-4">
                +
              </button>
              <button className="flex w-4 h-4 items-center justify-center bg-red-600 text-white px-4 py-4">
                -
              </button>
            </div>
            <div>
              <Link href="/order/87687768">
                <button className=" my-4 bg-primary-dark-brown w-full text-white py-2 rounded-md">
                  Buy
                </button>
              </Link>
            </div>
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
