import { CardList } from "../../Components/CardList";
import { Form } from "../../Components/Form";
import { Nav } from "../../Components/Nav";

export const Home = () => {
  return (
    <>
      <Nav />
      <div className=" sm:flex  gap-3 w-full p-4">
        <CardList />
        <Form />
      </div>
    </>
  );
};
