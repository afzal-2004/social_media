/* eslint-disable react/prop-types */
import axios from "axios";
import { Appcontext } from "./Appcontext";
import { useState } from "react";
import { BackendUrl, token } from "../assets/constant";

export const ContextProvider = ({ children }) => {
  const [Cardid, setCardid] = useState(null);
  const [update, setupdate] = useState(false);
  const [data, setdata] = useState({
    Creator: "",
    Title: "",
    Message: " ",
  });
  const [openSidenav, setopenSidenav] = useState(false);
  const [Postdata, setPostdata] = useState([]);
  const [UserProfileData, setUserProfileData] = useState([]);
  console.log("User Profile data  is ", UserProfileData);
  const [File, setFile] = useState(null);
  const handelUpdatedata = (Cardid) => {
    axios
      .get(`${BackendUrl}/memories/getupdateContact/` + Cardid)
      .then((res) => {
        console.log("This Responce Come From backend Side ", res);
        console.log("The Responec of my data", res.data);
        console.log("Responce About  Creator data", res.data?.Creator);
        setdata({
          Creator: res.data?.Creator,
          Title: res.data?.Title,
          Message: res.data?.Message,
          tags: res.data?.tags,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const FetchAllMypost = () => {
    axios
      .get(`${BackendUrl}/memories/accessdata`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPostdata(res.data);
      })
      .catch((err) => {
        console.log("My error is ", err);
      });
  };
  const FetchuserProfileData = () => {
    axios
      .get(`${BackendUrl}/memories/SignUpdata`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(
          " This Data is Come from backend  For My profile As  A responce ",
          res.data
        );
        setUserProfileData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = {
    Cardid,
    setCardid,
    update,
    setupdate,
    data,
    setdata,
    File,
    setFile,
    handelUpdatedata,
    Postdata,
    setPostdata,
    FetchAllMypost,
    openSidenav,
    setopenSidenav,
    UserProfileData,
    setUserProfileData,
    FetchuserProfileData,
  };
  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
};
