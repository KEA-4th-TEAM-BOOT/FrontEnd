import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserData = atom({
  key: "UserData",
  default: {
    userLink: "",
    accessToken: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const isUserLoggedIn = selector({
  key: "isUserLoggedIn",
  get: ({ get }) => {
    const user = get(UserData);
    return !!user.accessToken;
  },
});
