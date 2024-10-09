/* eslint-disable react/prop-types */
import axios from "axios";
import { Appcontext } from "./Appcontext";
import { useState } from "react";
import { BackendUrl, token } from "../assets/constant";
import { toast } from "react-toastify";
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

  const [File, setFile] = useState(null);
  const handelUpdatedata = (Cardid) => {
    axios
      .get(`${BackendUrl}/memories/getupdateContact/` + Cardid, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setdata({
          Creator: res.data?.Creator,
          Title: res.data?.Title,
          Message: res.data?.Message,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response?.data.message}`);
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
        if (res.status === 201) {
          setUserProfileData(res.data);
        }
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
