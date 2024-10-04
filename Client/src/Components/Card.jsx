/* eslint-disable react/prop-types */
import { SlLike } from "react-icons/sl";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";
export const Card = ({ Data }) => {
  const { setCardid, setupdate, handelUpdatedata } = useContext(Appcontext);
  const [Like, setLike] = useState(Data.like);
  const token = localStorage.getItem("Token");

  const BackendUrl = "http://localhost:3000";
  const handelDeleteCard = (id) => {
    axios
      .delete(`${BackendUrl}/memories/Deletecard/` + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
  const handleLike = async (id) => {
    try {
      await axios
        .put(`${BackendUrl}/memories/getLikeCount/` + id, Like)
        .then((res) => {
          console.log(res);
          console.log("Data For like Count ", res.data);
          console.log("Like for my  Pariculer Post ", res.data.like);
          setLike(res.data.like);
          toast.success("You Liked  Post ");
        });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong ");
    }
  };

  return (
    <>
      <div className=" cardContainer  ">
        <img src={Data.avtar} alt="" className=" imageData" />
        <span className=" OverLap ">A</span>
        <p className=" uppercase absolute top-2  left-2 text-white">
          {Data.Creator}
        </p>
        <HiOutlineDotsHorizontal
          className="Editbtn right-2  text-white"
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
            <p className="flex gap-3  items-center">
              <SlLike
                onClick={() => {
                  handleLike(Data._id);
                  setLike(Like + 1);
                }}
              />
              {Like}
            </p>

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
