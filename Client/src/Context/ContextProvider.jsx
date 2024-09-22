/* eslint-disable react/prop-types */
import { Appcontext } from "./Appcontext";
import { useState } from "react";
export const ContextProvider = ({ children }) => {
  const [Cardid, setCardid] = useState(null);
  const value = {
    Cardid,
    setCardid,
  };
  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
};
