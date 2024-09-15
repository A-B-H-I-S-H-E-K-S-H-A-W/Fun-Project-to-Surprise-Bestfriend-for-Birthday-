import React from "react";
import { useState } from "react";
import Main from "../pages/Main";

function Card() {
  const textArray = [
    "Hey, I’ve had this weird feeling all day... I swear there’s something special about today, but I just can’t figure it out. 🤔",
    "Is it a holiday? No, that’s not it... Did I miss an important event? 😅 Ugh, I did'nt remember!",
    "Wait... Do you know what it is? Maybe it’s something we both forgot? 😳",
    "Wow, this is really bothering me now... It’s like when you know you’ve left the stove on, but you just can’t remember when. You ever feel that way? 😬",
    "Okay, wait... hold on a second. I’m getting close... it's like a big moment... something that happens once a year... something really important... 🧐",
    "OH WAIT!! I can’t believe it. I figured it out!",
    "IT’S YOUR BIRTHDAY!!!🎉🎂🎁",
    "HAPPY BIRTHDAY! 🎈 Hope your day is filled with love, joy, and way more surprises than I just gave you! 🎊",
    "Now Click the button to see the Magic 😍😍😍",
  ];

  const [text, setText] = useState(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setText((prevIndex) => (prevIndex + 1) % textArray.length);
    setCount((prevIndex) => prevIndex + 1);
  };

  if (count === textArray.length) {
    return <Main />;
  }

  return (
    <>
      <section className="w-full h-screen flex items-center justify-center">
        <div className="flex items-center justify-center border w-[500px] h-[5 0vh] bg-white rounded-2xl shadow-2xl mx-4">
          <div className="flex flex-col gap-10 p-4">
            <h2 className="text-2xl font-bold">Is Something Special ?? 🧐</h2>
            <p className="font-semibold">{textArray[text]}</p>
            <button
              onClick={handleClick}
              className="bg-blue-600 text-white px-7 py-2 rounded-3xl font-semibold hover:bg-blue-500 duration-500"
            >
              Click 😁
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
