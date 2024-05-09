import { atom } from "recoil";

export const UserData = atom({
  key: "userData",
  default: {
    email: "",
    password: "",
    isLogin: false,
  },
});
