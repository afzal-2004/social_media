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
        setdata(res.data);
      })
      .catch((err) => {
        console.log("My error is ", err);
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
