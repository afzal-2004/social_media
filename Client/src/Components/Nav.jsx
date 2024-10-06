/* eslint-disable react/prop-types */
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Components.css";
import { Appcontext } from "../Context/Appcontext";
import { useContext } from "react";
import { UserProfile } from "./UserProfile";
export const Nav = () => {
  const { openSidenav, setopenSidenav } = useContext(Appcontext);
  const token = localStorage.getItem("Token");
  console.log("token on Frounted Side  is ", token);
  if (token) {
    console.log("Token is Exected");
  } else {
    console.log("Token Is  Not existed");
  }
  const handlenav = () => {
    setopenSidenav(!openSidenav);
  };
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
            <h1> Memories</h1>
          </Link>
        </div>
        {!token ? (
          <Link to={"/signUp"}>
            <button className="SignInAndSignUpbtn">Sign Up</button>
          </Link>
        ) : (
          <>
            <div className="  " onClick={handlenav}>
              <UserProfile />
            </div>

            {openSidenav && (
              <div className=" absolute      top-[80px] right-[10px]  bg-white p-3 rounded-sm min-h-[200px] z-50">
                <UserProfileNav handlenav={handlenav} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
export const UserProfileNav = ({ handlenav }) => {
  const handlelogout = () => {
    localStorage.removeItem("Token");
    if (!localStorage.removeItem("Token")) {
      toast.success(" You Logout SuccessFully ");
    }
  };
  return (
    <>
      <ul className=" p-3 h-full       cursor-pointer " onClick={handlenav}>
        <NavLink to={"/My_Post"}>
          <li className=" p-2 border border-t-0 border-l-0 border-r-0 ">
            My Post{" "}
          </li>
        </NavLink>

        <NavLink to="/my_Profile">
          <li className=" p-2 border border-t-0 border-l-0 border-r-0 ">
            My Profile{" "}
          </li>
        </NavLink>

        <li
          className=" p-2 border border-t-0 border-l-0 border-r-0 "
          onClick={handlelogout}
        >
          Logout{" "}
        </li>
      </ul>
    </>
  );
};
