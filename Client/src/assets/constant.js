// export const BackendUrl = "https://social-media-n4nv.onrender.com";
export const BackendUrl = "http://localhost:3000";
export const token = localStorage.getItem("Token");
import { jwtDecode } from "jwt-decode";

if (token) {
  const decoded = jwtDecode(token);
  console.log("This is My jwt Expiration Time", decoded.exp);
}

export function isTokenExpired(token) {
  const decoded = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000); //
  return decoded.exp < currentTime;
}

const Token = localStorage.getItem("Token");
if (Token && isTokenExpired(Token)) {
  localStorage.removeItem("token");
  alert("Session has expired. Please log in again.");
}

function scheduleTokenRemoval(token) {
  const decoded = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  const expirationTime = (decoded.exp - currentTime) * 1000;
  setTimeout(() => {
    localStorage.removeItem("token");
    alert("Session has expired. Please log in again.");
  }, expirationTime);
}

const Localtoken = localStorage.getItem("Token");
if (Localtoken) {
  scheduleTokenRemoval(Localtoken);
}
