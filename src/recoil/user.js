import { atom } from "recoil";

export const UserData = atom({
  key: "userData",
  default: {
    userLink: "",
    isLogin: false,
  },
});
