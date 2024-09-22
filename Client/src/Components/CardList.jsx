import axios from "axios";
import { useState, useEffect } from "react";

import { Card } from "./Card";

export const CardList = () => {
  const [data, setdata] = useState([]);
  console.log("data From backend ", data);

  useEffect(() => {
    axios.get(`http://localhost:3000/memories/accessdata`).then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  }, []);

  return (
    <div className=" w-[78%] flex  flex-wrap sm:gap-4 ">
      {" "}
      {data.map((Data, i) => (
        <div key={i} className="">
          <Card Data={Data} />
        </div>
      ))}
    </div>
  );
};
