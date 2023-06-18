import React from "react";

const Accounting = ({ win, amount }) => {
  return (
    <div
      className={`absolute ${
        win ? "text-lime" : "text-tomato"
      } right-0 top-[100px] font-bold slide-rotate-hor-top`}
    >
      {win ? "+" : "-"}
      {amount}
    </div>
  );
};

export default Accounting;
