import { Link } from "react-router-dom";

export const SignUp = () => {
  const handleData = () => {};
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
                placeholder="First Name"
                className=" signUpInput sm:w-[170px] "
              />
              <input
                type="text"
                placeholder="Last Name"
                className=" signUpInput sm:w-[170px] "
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className=" signUpInput   mt-5  "
            />
            <input
              type="Password"
              placeholder="Password"
              className="signUpInput  mt-5  "
            />
            <input
              type=" Password"
              placeholder="Repeat Password"
              className=" signUpInput  mt-5  "
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
  const handleData = () => {};
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
              className=" signUpInput   mt-5  "
            />
            <input
              type="Password"
              placeholder="Password"
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
