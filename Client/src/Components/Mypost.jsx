import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

import { BackendUrl, token } from "../assets/constant";

export const Mypost = () => {
  const [Mypost, setMypost] = useState([]);
  const FetchMypost = async () => {
    await axios
      .get(`${BackendUrl}/memories/My_posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setMypost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FetchMypost();
  }, []);

  return (
    <div>
      {Mypost.length > 0 ? (
        <>
          {Mypost.map((Data, i) => (
            <div
              key={i}
              className="   w-full   grid grid-col-2  
        sm:flex flex-wrap "
            >
              <Card Data={Data} />
            </div>
          ))}
        </>
      ) : (
        <h1 className=" text-red-500 text-center text-[28px] font-semibold">
          {" "}
          No Post Find
        </h1>
      )}
    </div>
  );
};
