import React from "react";
import { useSelector } from "react-redux";

const MainButton = ({ text }) => {
  const { disableButton } = useSelector((state) => state.appReducer);

  
  return (
    <button
      disabled={disableButton}
      className="button bg-saddleBrown text-white p-3 text-xs hover:opacity-90"
    >
      {text}
    </button>
  );
};

export default MainButton;
