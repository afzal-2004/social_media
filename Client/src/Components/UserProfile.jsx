/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";

import { MdArrowDropDown } from "react-icons/md";

import { Appcontext } from "../Context/Appcontext";
export const UserProfile = () => {
  const { UserProfileData, FetchuserProfileData } = useContext(Appcontext);

  useEffect(() => {
    FetchuserProfileData();
  }, []);

  return (
    <>
      <div className=" flex justify-center items-center gap-3 ">
        <div className=" uppercase text-white   bg-yellow-300 w-[50px] h-[50px]  flex justify-center items-center p-2 rounded-full ">
          <p>{UserProfileData.Finduser?.firstname[0]}</p>
        </div>
        <MdArrowDropDown />
      </div>
    </>
  );
};
export const MyProfile = () => {
  return (
    <>
      <h1 className=" text-red-500 text-center text-[28px] font-semibold">
        {" "}
        ProFileSection
      </h1>
    </>
  );
};
