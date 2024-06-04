import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserData = atom({
  key: "UserData",
  default: {
    userLink: "",
    accessToken: null,
    userId: null,
    profileUrl: "",
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

// 'UserState'에서 'UserProfileState'로 키를 변경했습니다.
export const UserProfileState = atom({
  key: "UserProfileState",
  default: {
    name: "",
    email: "",
    nickname: "",
    profileUrl: "",
    introduce: "",
    userLink: "",
    followingNum: 0,
    followerNum: 0,
    latestPostId: 0,
    postCnt: 0,
    voiceModelUrl: "string",
    categoryList: null,
    followingList: null,
    followerList: null,
  },
});
