import React from "react";

import { GuessCard, ResultCard } from "../components";

const CardsArea = () => {
  return (
    <div className="relative z-30 rotate-scale-down-diag-2 ">
      <GuessCard/>
      <ResultCard />
    </div>
  );
};

export default CardsArea;
