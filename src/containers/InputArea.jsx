import React, { useEffect, useState } from "react";
import { MainButton } from "../components";
import {
  setEnteredNumber,
  showResultCard,
  showAccounting,
  setDisableButton,
} from "../redux/actions/app";
import { useDispatch, useSelector } from "react-redux";
import { play } from "../redux/actions/game";

const InputArea = () => {
  const [data, setData] = useState({ guessNumber: null, bet: null });
  const dispatch = useDispatch();
  const { access_token, user } = useSelector((state) => state.authReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.guessNumber && data.bet) {
      dispatch(play(data, access_token));
      if (+data.bet < user.coins) dispatch(showResultCard(true));
      dispatch(setDisableButton(true));

      setTimeout(() => dispatch(showResultCard(false)), 4000);
      setTimeout(() => dispatch(showAccounting(false)), 5000);
      setTimeout(() => dispatch(setDisableButton(false)), 5000);
    }
  };

  useEffect(() => {
    if (data.guessNumber >= 0) {
      dispatch(setEnteredNumber(data.guessNumber));
    }
  }, [data.guessNumber]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex__col-center mt-20 sm:w-[400px] w-[250px]"
    >
      <input
        type="number"
        name="guessNumber"
        placeholder="Guess the number"
        min={0}
        max={10}
        onChange={handleChange}
        className="px-3 border-0 outline-0 bg-tan text-white font-bold placeholder:font-normal placeholder:text-white md:placeholder:text-xl placeholder:text-sm h-10 w-full my-3"
      />
      <input
        type="number"
        name="bet"
        placeholder="Enter Your Bet"
        min={1}
        onChange={handleChange}
        className="px-3 border-0 outline-0 bg-tan text-white font-bold placeholder:font-normal placeholder:text-white md:placeholder:text-xl placeholder:text-sm h-10 w-full my-3"
      />
      <MainButton text="I'm ready" />
    </form>
  );
};

export default InputArea;
