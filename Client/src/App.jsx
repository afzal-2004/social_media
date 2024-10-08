import { SignUp, SingIn } from "./Components/Auth";

import { Mypost } from "./Components/Mypost";
import { MyProfile } from "./Components/UserProfile";
import { Nav } from "./Components/Nav";
import { Home } from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/signIn" element={<SingIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/my_Profile" element={<MyProfile />} />
          <Route path="/My_Post" element={<Mypost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
