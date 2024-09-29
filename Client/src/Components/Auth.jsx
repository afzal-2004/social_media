import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
const BackendUrl = "http://localhost:3000";
export const SignUp = () => {
  const navigate = Navigate();
  const [data, setdata] = useState({
    first: "",
    last: "",
    email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const HandleChange = (e) => {
    e.preventDefault();

    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleData = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post(`${BackendUrl}/memories/SignUp`, data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setdata({
            first: "",
            last: "",
            email: "",
            Password: "",
            ConfirmPassword: "",
          });
          toast.success("Register Succefully", {
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
        console.log("Status is ", res.status);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Somethiing Went Wrong", {
          autoClose: 2000,
        });
      });
  };

  return (
    <>
      <main className=" h-[100vh] flex justify-center items-center">
        <div className=" bg-white p-3 max-w-[96%] sm:w-[400px] m-auto rounded-lg  ">
          <div
            className="  flex  flex-col items-center text-[35px]  justify-center gap-y-3
        "
          >
            <h1
              className="  flex justify-center items-center text-[35px] bg-red-400  rounded-full  p-3
        "
            >
              🔒
            </h1>
            <h2>Sign Up</h2>
          </div>
          <form action="" onSubmit={handleData}>
            <div className=" mt-3  sm:flex    justify-between">
              <input
                type="text"
                name="first"
                value={data.first}
                placeholder="First Name"
                className=" signUpInput sm:w-[170px] "
                onChange={HandleChange}
              />
              <input
                type="text"
                name="last"
                value={data.last}
                placeholder="Last Name"
                className=" signUpInput sm:w-[170px] "
                onChange={HandleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Email"
              className=" signUpInput   mt-5  "
              onChange={HandleChange}
            />
            <input
              type="Password"
              name="Password"
              value={data.Password}
              placeholder="Password"
              className="signUpInput  mt-5  "
              onChange={HandleChange}
            />
            <input
              type="Password"
              name="ConfirmPassword"
              value={data.ConfirmPassword}
              placeholder="Repeat Password"
              className=" signUpInput  mt-5  "
              onChange={HandleChange}
            />
            <button className=" bg-blue-500 text-white p-3 w-full mt-5">
              Sign Up
            </button>
          </form>
          <Link to={"/signIn"}>
            <h1 className=" uppercase mt-4">
              ALREADY HAVE AN ACCOUNT ?
              <span className=" text-blue-400"> Sign in</span>
            </h1>
          </Link>
        </div>
      </main>
    </>
  );
};

export const SingIn = () => {
  const [data, setdata] = useState({
    email: "",
    Password: "",
  });
  const handelChange = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
    axios
      .post(`${BackendUrl}/memories/SignUp`, data)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleData = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <main className=" h-[100vh] flex justify-center items-center">
        <div className=" bg-white p-3 max-w-[96%] sm:w-[400px] m-auto rounded-lg  ">
          <div
            className="  flex  flex-col items-center text-[35px]  justify-center gap-y-3
            "
          >
            <h1
              className="  flex justify-center items-center text-[35px] bg-red-400  rounded-full  p-3
            "
            >
              🔒
            </h1>
            <h2>Sign In</h2>
          </div>
          <form action="" onSubmit={handleData}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handelChange}
              className=" signUpInput   mt-5  "
            />
            <input
              type="Password"
              placeholder="Password"
              name="Password"
              onChange={handelChange}
              className="signUpInput  mt-5  "
            />

            <button className=" bg-blue-500 text-white p-3 w-full mt-5">
              Sign In
            </button>
          </form>
          <Link to={"/signUp"}>
            <h1 className=" uppercase mt-4">
              {`DON'T HAVE AN ACCOUNT`} ?
              <span className=" text-blue-400"> Sign Up</span>
            </h1>
          </Link>
        </div>
      </main>
    </>
  );
};
