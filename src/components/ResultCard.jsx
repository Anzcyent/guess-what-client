import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ResultCard = () => {
  const { showResultCard } = useSelector((state) => state.appReducer);
  const { game } = useSelector((state) => state.gameReducer);

  return (
    showResultCard && (
      <div className="fade sm:w-[300px] w-[150px] md:h-[100px] h-[50px] flex__center bg-lime text-white font-bold sm:text-4xl text-2xl absolute sm:top-[-100px] top-[300px] inset-12 rounded-t-xl">
        {game.resultNumber}
      </div>
    )
  );
};

export default ResultCard;
