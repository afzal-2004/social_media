/* eslint-disable react/prop-types */
import { Appcontext } from "./Appcontext";

export const ContextProvider = ({ children }) => {
  const value = "";
  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
};
