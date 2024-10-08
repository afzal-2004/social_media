import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
const BackendUrl = "http://localhost:3000";
const token = localStorage.getItem("Token");
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
      {Mypost.map((Data, i) => (
        <div
          key={i}
          className="   w-full   grid grid-col-2  
        sm:flex flex-wrap "
        >
          <Card Data={Data} />
        </div>
      ))}
    </div>
  );
};
