import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserData = atom({
  key: "UserData",
  default: {
    email: "",
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});
