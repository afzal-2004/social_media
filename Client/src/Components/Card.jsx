/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

import axios from "axios";
import { useContext, useState } from "react";
import { Appcontext } from "../Context/Appcontext";
import { BackendUrl, token } from "../assets/constant";
export const Card = ({ Data }) => {
  const { setCardid, setupdate, handelUpdatedata, FetchAllMypost } =
    useContext(Appcontext);

  //  PERFROM DELETE OPERATION UPON CARD
  const handelDeleteCard = async (id) => {
    await axios
      .delete(`${BackendUrl}/memories/Deletecard/` + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          console.log("Deleted Item data status", res.data);
          toast.success(`${res.data?.message}`);
          FetchAllMypost();
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        console.log(error.response?.data.message);
        toast.error(`${error.response?.data.message}`);
      });
  };
  //  HADLEING LIKE FUNCTIONALITY ON THE CARD

  return (
    <>
      <div className=" cardContainer   ">
        <img src={Data.avtar} alt="" className=" imageData" />

        <p className=" uppercase absolute top-2  left-2 text-white  rounded-lg bg-black  p-1  bg-opacity-50">
          {Data.Creator}
        </p>
        <HiOutlineDotsHorizontal
          className="Editbtn right-2  text-black"
          onClick={() => {
            console.log("Id Of This Card is ", Data._id);
            setCardid(Data._id);
            setupdate(true);
            handelUpdatedata(Data._id);
          }}
        />

        <div className="  p-2  rounded-xl h-[50%]">
          <span className=" text-black font-bold  uppercase text-[22px]">
            {Data.Title}
          </span>
          <p
            className="text-slate-500 text-[15px] 
              sm:text-[18px] "
          >
            {Data.Message}
          </p>
          <div className="flex justify-between mt-4">
            <MdDelete
              className=" right-2  text-[30px] text-red-600 "
              onClick={() => {
                handelDeleteCard(Data._id);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
2;
