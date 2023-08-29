import { useState } from "react";
import { Login } from "../Auth/Login"
import { Register } from "../Auth/Register"
import { Forgot_Password } from "../Auth/Forgot_Password";
import { Reset_Password } from "../Auth/Reset_Password";
import { Home } from "./Home"

export const MainContent = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {!isLogin ? (
        <>
        {/* <Login /> */}
        <Register />
        {/* <Forgot_Password /> */}
        {/* <Reset_Password /> */}
        </>
      ) : (
        <Home />
      )}
    </>
  );
}