import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
const BackendUrl = "http://localhost:3000";
const token = localStorage.getItem("Token");
export const Mypost = () => {
  const [Mypost, setMypost] = useState([]);
  useEffect(() => {
    axios
      .get(`${BackendUrl}/memories/My_posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMypost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {Mypost.map((Data, i) => (
        <div key={i} className=" mt-3">
          <Card Data={Data} />
        </div>
      ))}
    </div>
  );
};
