import React from "react";
import { useSelector } from "react-redux";

const GuessCard = () => {
  const { guessNumber } = useSelector((state) => state.appReducer);

  return (
    <div className="sm:w-[400px] w-[250px] md:h-[200px] h-[150px] flex__center bg-tomato text-white font-bold rounded-xl p-5">
      {guessNumber ? (
        <span className="sm:text-4xl text-2xl">{guessNumber}</span>
      ) : (
        <span>
          Guess a number (min 0 - max 10) and place a bet. If you guess the number
          you will win 4 times your bet.
        </span>
      )}
    </div>
  );
};

export default GuessCard;
