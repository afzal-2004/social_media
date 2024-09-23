/* eslint-disable react/prop-types */
import { SlLike, SlDislike } from "react-icons/sl";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
// import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";
export const Card = ({ Data }) => {
  const { setCardid, setupdate, handelUpdatedata } = useContext(Appcontext);

  const handelDeleteCard = (id) => {
    axios
      .delete(`http://localhost:3000/memories/Deletecard/` + id)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        toast.success("Succefully Deleted Your Data  ");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong");
      });
  };

  return (
    <>
      <div className=" cardContainer  ">
        <img src={Data.avtar} alt="" className=" imageData" />
        <FaEdit
          className="Editbtn left-2  text-green-400"
          onClick={() => {
            console.log("Id Of This Card is ", Data._id);
            setCardid(Data._id);
            setupdate(true);
            handelUpdatedata(Data._id);
          }}
        />
        <MdDelete
          className="Editbtn right-2  text-red-600 "
          onClick={() => {
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
