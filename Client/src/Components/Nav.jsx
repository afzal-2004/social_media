import { Link } from "react-router-dom";

import "./Components.css";
import { Appcontext } from "../Context/Appcontext";
import { useContext } from "react";
import { UserProfile } from "./UserProfile";
export const Nav = () => {
  const { SignUp } = useContext(Appcontext);
  return (
    <>
      <div className="navbarClass ">
        <div className=" gap-3 flex items-center">
          <img
            src="/photographs-256888_640.jpg"
            alt=""
            className=" max-w-[100px] rounded-md "
          />
          <Link to="/">
            <h1> Hello Memories</h1>
          </Link>
        </div>
        {SignUp ? (
          <Link to={"/signUp"}>
            <button className="SignInAndSignUpbtn">Sign Up</button>
          </Link>
        ) : (
          <UserProfile />
        )}
      </div>
    </>
  );
};
