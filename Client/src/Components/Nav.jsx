import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Components.css";
import { Appcontext } from "../Context/Appcontext";
import { useContext } from "react";
import { UserProfile } from "./UserProfile";
export const Nav = () => {
  const { SignUp, openSidenav, setopenSidenav } = useContext(Appcontext);

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
          <>
            <div
              className="  "
              onClick={() => {
                setopenSidenav(!openSidenav);
              }}
            >
              <UserProfile />
            </div>

            {openSidenav && (
              <div className=" absolute     top-[80px] right-[10px]  bg-white p-3 rounded-sm min-h-[200px]">
                <UserProfileNav />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
export const UserProfileNav = () => {
  const handlelogout = () => {
    localStorage.removeItem("Token");
    if (!localStorage.removeItem("Token")) {
      toast.success(" You Logout SuccessFully ");
    }
  };
  return (
    <>
      <ul className=" p-3 h-full   cursor-pointer ">
        <Link to={"/"}>
          <li className=" p-2 border border-t-0 border-l-0 border-r-0 ">
            Post{" "}
          </li>
        </Link>

        <Link to="/my_Profile">
          <li className=" p-2 border border-t-0 border-l-0 border-r-0 ">
            My Profile{" "}
          </li>
        </Link>

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
