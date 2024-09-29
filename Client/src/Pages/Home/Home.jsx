import { CardList } from "../../Components/CardList";
import { Form } from "../../Components/Form";

export const Home = () => {
  return (
    <>
      <div className=" sm:flex  gap-3 w-full p-4">
        <CardList />
        <Form />
      </div>
    </>
  );
};
