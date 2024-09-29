/* eslint-disable react/prop-types */
import axios from "axios";
import { Appcontext } from "./Appcontext";
import { useState } from "react";
export const ContextProvider = ({ children }) => {
  const [SignUp, setSignUp] = useState(true);
  const [Cardid, setCardid] = useState(null);
  const [update, setupdate] = useState(false);
  const [data, setdata] = useState({
    Creator: "",
    Title: "",
    Message: "",
    tags: "",
  });
  const [File, setFile] = useState(null);
  const handelUpdatedata = (Cardid) => {
    axios
      .get("http://localhost:3000/memories/getupdateContact/" + Cardid)
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
    SignUp,
    setSignUp,
  };
  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
};
