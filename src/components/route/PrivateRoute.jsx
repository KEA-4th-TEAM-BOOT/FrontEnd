import React from "react";
import { useRecoilValue } from "recoil";
import { Navigate } from "react-router-dom";
import { UserData } from "../../recoil/user";

const PrivateRoute = ({ element }) => {
  const user = useRecoilValue(UserData);
  if (user.isLogin) {
    return element;
  } else {
    console.log("userLogin False");
    alert("로그인 후 이용해주시기 바랍니다");
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
