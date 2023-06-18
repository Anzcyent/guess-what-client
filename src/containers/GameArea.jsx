import React, { useEffect } from "react";

import InputArea from "./InputArea";
import CardsArea from "./CardsArea";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const GameArea = () => {
  const { error } = useSelector((state) => state.appReducer);
  const notify = (message) => toast.error(message);

  useEffect(() => {
    if (error) notify(error);
  }, [error]);
  return (
    <section className="w-full bg-sienna p-5 grow flex__col-center">
      <ToastContainer />
      <CardsArea />
      <InputArea />
    </section>
  );
};

export default GameArea;
