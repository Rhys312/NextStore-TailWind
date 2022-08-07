import Modal from '../components/Modal';
import React, { useState, useContext, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import Comments from '../components/Comments';
import InfoContext from '../store/InfoProvider';
import ThumbnailContext from '../store/ThumbnailProvider';
import Cart from '../components/Cart';
import {
  AiOutlinePlayCircle,
  AiOutlineLike,
  AiOutlinePlusCircle,
  AiOutlineCheckCircle,
  AiFillLike,
  AiOutlinePauseCircle,
} from 'react-icons/ai';
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from 'react-icons/hi';

const Info = (props) => {
  const [ticketNum, setTicketNum] = useState(1);
  const [added, setAdded] = useState(false);
  const [muted, setMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [played, setPlayed] = useState(false);
  const ticketNumInputRef = useRef();
  const infoCtx = useContext(InfoContext);
  const thumbnailCtx = useContext(ThumbnailContext);

  function decreaseInput() {
    if (typeof window !== undefined) {
      document.getElementById('ticketNum').stepDown();
      setTicketNum((prev) => {
        if (prev < 2) return;

        return prev - 1;
      });
    }
  }

  function increaseInput() {
    if (typeof window !== undefined) {
      document.getElementById('ticketNum').stepUp();
      setTicketNum((prev) => {
        return prev + 1;
      });
    }
  }

  return (
    <Modal onClose={props.onClose}>
      {/* player */}
      <div className="pt-[56.25%] relative">
        <ReactPlayer
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: '0', left: '0' }}
          url={`https://www.youtube.com/watch?v=${thumbnailCtx.trailer}`}
          playing={played}
          volume={1}
          muted={muted}
        />
      </div>
      {/* second part of modal */}
      <div className="px-4 ">
        <div className="flex w-100% justify-start space-x-4 mt-4 text-3xl text-primary-dark-brown font-bold">
          <div
            className="cursor-pointer"
            onClick={() => setPlayed((prev) => !prev)}
          >
            {played ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setLiked((prev) => !prev)}
          >
            {liked ? <AiFillLike /> : <AiOutlineLike />}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setAdded((prev) => !prev)}
          >
            {added ? <AiOutlineCheckCircle /> : <AiOutlinePlusCircle />}
          </div>

          <div
            className="cursor-pointer"
            onClick={() => setMuted((prev) => !prev)}
          >
            {muted ? <HiOutlineVolumeOff /> : <HiOutlineVolumeUp />}
          </div>
        </div>
        {/* description */}
        <div className="py-2 border-b-2 border-primary-teal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa
        </div>
        {/* ticket */}
        <div className=" flex flex-col relative justify-between z-[50000] my-2 ">
          <div className="flex items-center justify-between h-20 mb-4 ">
            <div className="flex flex-col items-left justify-between h-[100%]">
              <label className="labelStyle">No. of tickets</label>
              <div className="flex justify-between">
                <input
                  id="ticketNum"
                  type={'number'}
                  step="1"
                  min={'1'}
                  ref={ticketNumInputRef}
                  defaultValue={'1'}
                  className=" w-12 text-center text-base bg-transparent buttonCart focus:outline-none px-0 mr-12 font-bold text-red-500"
                  onChange={(e) => setTicketNum(+e.target.value)}
                />
                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      if (ticketNum < 2) return;
                      decreaseInput();
                    }}
                    className="buttonCart rounded-2xl bg-primary-dark-brown border-primary-dark-brown text-white text-base"
                  >
                    -
                  </button>
                  <button
                    onClick={increaseInput}
                    className="buttonCart rounded-2xl bg-primary-medium-brown border-primary-medium-brown text-white text-base"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-left justify-between h-[100%]">
              <label className="labelStyle">Ticket Price</label>
              <p className="buttonCart text-base font-bold text-red-500">$5</p>
            </div>
            <div className="flex flex-col items-left justify-between h-[100%] ">
              <label className="labelStyle">Total</label>
              <p className="buttonCart text-base font-bold text-red-500">{`$${
                ticketNum * 5
              }`}</p>
            </div>

            <div className=" flex flex-col h-[100%] justify-end">
              <button
                onClick={() => infoCtx.addTicket(ticketNum)}
                className="buttonCart rounded-2xl bg-primary-teal text-white text-base"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Info;
