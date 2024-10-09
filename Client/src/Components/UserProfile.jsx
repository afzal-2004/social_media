/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { CiEdit } from "react-icons/ci";
import { useEffect, useContext } from "react";

import { MdArrowDropDown } from "react-icons/md";

import { Appcontext } from "../Context/Appcontext";
import "./Components.css";
export const UserProfile = () => {
  const { UserProfileData, FetchuserProfileData } = useContext(Appcontext);

  useEffect(() => {
    FetchuserProfileData();
  }, []);

  return (
    <>
      <div className=" flex justify-center items-center gap-3 ">
        <UserProfileIcon UserProfileData={UserProfileData} />
        <MdArrowDropDown />
      </div>
    </>
  );
};
const UserProfileIcon = ({ UserProfileData }) => {
  return (
    <div className=" uppercase text-white   bg-yellow-300 w-[50px] h-[50px]  flex justify-center items-center p-2 rounded-full ">
      <p>{UserProfileData.Finduser?.firstname[0]}</p>
    </div>
  );
};

export const MyProfile = () => {
  const { UserProfileData } = useContext(Appcontext);

  const Profiledata = [
    {
      title: "Email",
      property: "email",
    },
    {
      title: "Contact",
      property: "MobileNumber",
    },
    {
      title: "Address",
      property: "",
    },
    {
      title: "DOB",
      property: "",
    },
  ];

  return (
    <>
      <h1 className=" text-white text-center text-[28px] font-semibold">
        User Profile
      </h1>
      <section className=" p-3 bg-slate-500  shadow-lg  w-full sm:w-[90%] m-auto  sm:rounded-md text-white">
        <UserProfileIcon UserProfileData={UserProfileData} />
        <div className=" p-4">
          <ul className="  text-[20px] profiledetails">
            {" "}
            <li className="col-span-1">Name</li>
            <li className=" col-span-3">
              {UserProfileData.Finduser?.firstname}
              {"    "}
              {UserProfileData.Finduser?.lstname}
            </li>
            <li className="col-span-1  flex  justify-end">
              <CiEdit />
            </li>
          </ul>
          {Profiledata.map((data, i) => (
            <ul
              key={i}
              className="  text-[16px] sm:text-[18px]  profiledetails"
            >
              {" "}
              <li className="col-span-1 m-1">{data.title} </li>
              <li className=" col-span-3 m-1">
                {UserProfileData.Finduser?.[data.property]}
                {"  "}
              </li>
              <li className="col-span-1  flex  justify-end">
                <CiEdit />
              </li>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
};
