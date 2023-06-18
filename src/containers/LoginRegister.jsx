import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";

import { MainButton } from "../components";

const LoginRegister = () => {
  const [loginRender, setLoginRender] = useState(true);
  const [animationClass, setAnimationClass] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginRegister = () => {
    setLoginRender((prev) => !prev);

    setAnimationClass("rotate-scale-down-diag-2");

    setTimeout(() => setAnimationClass(""), 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginRender) {
      dispatch(register(data, navigate));
    } else {
      dispatch(login(data, navigate));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  return (
    <div
      className="w-full bg-tan p-5 grow flex__col-center overflow-hidden "
      autoComplete="off"
    >
      <form
        onSubmit={handleSubmit}
        className={`w-3/4 ${animationClass} flex__col-center bg-tan rounded-xl h-3/4`}
      >
        {!loginRender && (
          <input
            type="text"
            placeholder="Username"
            className="px-3 border-0 outline-0 bg-gray text-white font-bold placeholder:font-normal placeholder:text-white md:placeholder:text-xl placeholder:text-sm h-10 my-5"
            name="username"
            onChange={handleChange}
          />
        )}
        <input
          type="email"
          placeholder="E-mail"
          className="px-3 border-0 outline-0 bg-gray text-white font-bold placeholder:font-normal placeholder:text-white md:placeholder:text-xl placeholder:text-sm h-10 my-5"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-3 border-0 outline-0 bg-gray text-white font-bold placeholder:font-normal placeholder:text-white md:placeholder:text-xl placeholder:text-sm h-10 my-5"
          name="password"
          onChange={handleChange}
        />

        {!loginRender && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-3 border-0 outline-0 bg-gray text-white font-bold placeholder:font-normal placeholder:text-white md:placeholder:text-xl placeholder:text-sm h-10 my-5"
            name="confirmPassword"
            onChange={handleChange}
          />
        )}

        <span className="text-xs my-3">
          {loginRender
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            onClick={handleLoginRegister}
            className="text-saddleBrown font-bold cursor-pointer hover:opacity-70 active:scale-50"
          >
            {loginRender ? "Register" : "Login"}
          </span>{" "}
        </span>
        <MainButton text="Submit" />
      </form>
    </div>
  );
};

export default LoginRegister;
