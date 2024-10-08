/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";

import { Card } from "./Card";
import { Appcontext } from "../Context/Appcontext";

export const CardList = () => {
  const { FetchAllMypost, Postdata } = useContext(Appcontext);
  useEffect(() => {
    FetchAllMypost();
  }, []);

  return (
    <div
      className=" sm:w-[78%]  w-full   grid grid-col-2  
    sm:flex flex-wrap "
    >
      {" "}
      {Postdata.map((Data, i) => (
        <div key={i} className="">
          <Card Data={Data} />
        </div>
      ))}
    </div>
  );
};
