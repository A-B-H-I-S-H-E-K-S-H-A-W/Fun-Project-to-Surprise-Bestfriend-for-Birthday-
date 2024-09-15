import React, { useRef, useState, useEffect } from "react";
import image from "../images/maxresdefault.jpg";
import audio from "../audio/happy-birthday-155461.mp3";
import image2 from "../images/illustration-happy-birthday-greeting-card-with-balloons-and-cake-fit-for-background-banner-greeting-card-eps-10-vector.jpg";

export default function Main() {
  const audioRef = useRef(null);
  const [play, setPlay] = useState("hidden");
  const [buttonBlock, setButtonBlock] = useState("block");
  const [display, setDisplay] = useState(false);

  const handlePlay = () => {
    if (play === "hidden") {
      audioRef.current.play();
      setPlay("block");
      setButtonBlock("hidden");
    } else {
      setPlay("hidden");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 10000);
  }, [handlePlay]);

  return (
    <>
      <div className="">
        <img src={image} className={`hidden md:${play} h-screen w-full`} />
        <img src={image2} className={`md:hidden ${play} h-screen w-full`} />
        <button
          className={`${buttonBlock} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-7 py-2 rounded-3xl font-semibold hover:bg-blue-500 duration-500`}
          onClick={handlePlay}
        >
          Now Click Here 😁💖
        </button>
        <audio ref={audioRef} className="hidden" controls>
          <source src={audio} type="audio/mpeg" />
        </audio>
      </div>
      {display && (
        <div className="absolute  px-5 top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-lg bg-black/40">
          <div className="text-center max-w-[500px] flex flex-col gap-5">
            <p className="text-white text-3xl font-bold">Surprise! 🎉</p>
            <p className="text-white text-xl">
              Happy Birthday, Meow! 🎉 Many many many happy returns of the day
              dear, Wishing you a day filled with love, laughter, and all the
              things that bring you joy. Every little thing you do – your laugh,
              your smile, the way you light up a room, is the joyable moment I
              have exprienced. You deserve nothing but happiness, love, and all
              the joy in the world, not just today, but every single day. I
              can't wait to create even more beautiful memories together. Here's
              to you, my love, my best friend. Happy Birthday! Once Again
              Meow😊🎉🎂💖
            </p>
          </div>
        </div>
      )}
    </>
  );
}
