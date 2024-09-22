import axios from "axios";
import { useState, useEffect } from "react";

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
    <div className=" w-[78%]">
      {" "}
      {data.map((Data, i) => (
        <div key={i}>
          <div className=" border border-slate-400  rounded-xl w-[300px] h-[400px] flex flex-col  items-center gap-4 bg-blue-300">
            <img
              src={Data.avtar}
              alt=""
              className="  w-[300px] h-[50%]
             object-fill  border-2 border-black rounded-xl"
            />
            <div className="  p-2  rounded-xl h-[50%]">
              <span className=" text-black font-bold text">{Data.Title}</span>
              <p className="text-slate-500">{Data.Message}</p>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};
