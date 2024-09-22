/* eslint-disable react/prop-types */
import { SlLike, SlDislike } from "react-icons/sl";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import { useState } from "react";
import axios from "axios";
export const Card = ({ Data }) => {
  //   const [Cardid, setCardid] = useState(null);
  const handelDeleteCard = (id) => {
    axios
      .delete(`http://localhost:3000/memories/Deletecard/` + id)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className=" border border-slate-400  rounded-xl 
       sm:w-[300px]   w-full h-[400px] flex flex-col  items-center sm:gap-4 bg-blue-300 relative  "
      >
        <img
          src={Data.avtar}
          alt=""
          className="  w-[300px] h-[50%]
             object-fill  border-2 border-black rounded-xl"
        />
        <FaEdit className="absolute top-2 left-2 text-[20px] text-green-400" />
        <MdDelete
          className="absolute top-2 right-2 text-[20px] text-red-600"
          onClick={() => {
            console.log(Data._id);
            // setCardid(Data._id);
            handelDeleteCard(Data._id);
          }}
        />
        <div className="  p-2  rounded-xl h-[50%]">
          <span className=" text-black font-bold  uppercase">{Data.Title}</span>
          <p
            className="text-slate-500 text-[15px] 
              sm:text-[18px] "
          >
            {Data.Message}
          </p>
          <div className="flex justify-between mt-4">
            <p className="flex gap-3  items-center">
              <SlLike />
              {0}
            </p>
            <p className="flex gap-3  items-center">
              <SlDislike />
              {0}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
2;
