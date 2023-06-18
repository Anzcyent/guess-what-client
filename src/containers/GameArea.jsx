import React, {useState} from "react";

import InputArea from "./InputArea";
import CardsArea from "./CardsArea";

const GameArea = () => {
  return (
    <section className="w-full bg-sienna p-5 grow flex__col-center">
      <CardsArea />
      <InputArea />
    </section>
  );
};

export default GameArea;
