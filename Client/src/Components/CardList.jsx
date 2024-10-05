/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

import { Card } from "./Card";
const BackendUrl = "http://localhost:3000";
export const CardList = () => {
  const [data, setdata] = useState([]);
  const token = localStorage.getItem("Token");

  useEffect(() => {
    axios
      .get(`${BackendUrl}/memories/accessdata`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log("My error is ", err);
      });
  }, [token]);

  return (
    <div
      className=" sm:w-[78%]  w-full   grid grid-col-2  
    sm:flex border border-red-500  m-auto"
    >
      {" "}
      {data.map((Data, i) => (
        <div key={i} className=" m-auto">
          <Card Data={Data} />
        </div>
      ))}
    </div>
  );
};
