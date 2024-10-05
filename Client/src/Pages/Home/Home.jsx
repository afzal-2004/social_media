import { CardList } from "../../Components/CardList";
import { Form } from "../../Components/Form";

import { SignUp as SinUpUser } from "../../Components/Auth";
export const Home = () => {
  const token = localStorage.getItem("Token");
  return (
    <>
      {token ? (
        <div className=" sm:flex     gap-3 w-full p-4">
          <Form />

          <CardList />
        </div>
      ) : (
        <div className=" text-center text-[15px]">
          {" "}
          Welcome To the Memories Post App
          <SinUpUser />
        </div>
      )}
    </>
  );
};
