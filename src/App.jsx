import React, { useEffect } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { generateNewAccessToken } from "./redux/actions/auth";
import { createGame } from "./redux/actions/game";

import { Navbar } from "./components";
import { GameArea, LoginRegister, NotFound } from "./containers";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const { access_token, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateNewAccessToken());

    if (access_token) {
      dispatch(createGame(access_token));
    }
  }, [access_token]);

  return (
    <div className="h-[100vh] flex__col-center">
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={access_token ? <GameArea /> : <LoginRegister />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
