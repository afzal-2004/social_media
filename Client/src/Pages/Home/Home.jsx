import { useContext } from "react";
import { CardList } from "../../Components/CardList";
import { Form } from "../../Components/Form";
import { Appcontext } from "../../Context/Appcontext";

import { SignUp as SinUpUser } from "../../Components/Auth";
export const Home = () => {
  const { SignUp } = useContext(Appcontext);
  return (
    <>
      {!SignUp ? (
        <div className=" sm:flex  gap-3 w-full p-4">
          <CardList />
          <Form />
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
