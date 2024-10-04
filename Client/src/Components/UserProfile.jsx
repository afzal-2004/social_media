/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { MdArrowDropDown } from "react-icons/md";
const BackendUrl = "http://localhost:3000";
export const UserProfile = () => {
  const token = localStorage.getItem("Token");

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`${BackendUrl}/memories/SignUpdata`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className=" flex justify-center items-center gap-3 border border-red-500">
        <div className=" uppercase text-white   bg-yellow-300 w-[50px] h-[50px]  flex justify-center items-center p-2 rounded-full ">
          <p>{data.Finduser?.firstname[0]}</p>
        </div>
        <MdArrowDropDown />
      </div>
    </>
  );
};



