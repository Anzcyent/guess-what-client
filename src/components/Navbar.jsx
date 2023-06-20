import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";
import Accounting from "./Accounting";

const Navbar = () => {
  const { user, access_token } = useSelector((state) => state.authReducer);
  const { game } = useSelector((state) => state.gameReducer);
  const { showAccounting } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  return (
    <nav className="navbar flex justify-around items-center bg-saddleBrown font-redHat w-full sm:p-0 p-2">
      <div className="flex__center">
        <img
          src="assets/logo.png"
          alt="logo"
          className="sm:w-[80px] w-[50px]"
        />
        <span className="font-bold text-white text-base hidden sm:block">
          Guess What
        </span>
      </div>

      {access_token && (
        <div className="flex__center">
          <span className="font-bold sm:text-xl text-base text-white">
            {user.username}
          </span>
          <FiLogOut
            color="#fff"
            className="sm:text-xl text-md ml-3 cursor-pointer hover:opacity-70 active:scale-110"
            onClick={() => dispatch(logout())}
          />
        </div>
      )}

      {access_token && (
        <div className="flex__center relative">
          <img
            src="assets/coin.png"
            className="sm:w-[50px] w-[35px]"
            alt="coin"
          />
          <span className="font-bold sm:text-base text-xs text-white">
            {user.coins}
          </span>

          {showAccounting && (
            <Accounting
              win={game?.win}
              amount={game?.win ? game?.gainedThisRound : game?.losedThisRound}
            />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
