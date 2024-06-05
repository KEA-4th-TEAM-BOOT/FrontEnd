import { useEffect } from "react";
import EditSetting from "../components/settingSection/EditSetting";
import { fetchUser } from "../api/UserAPI";
import { UserProfileState } from "../recoil/user";
import { useSetRecoilState } from "recoil";

const Setting = () => {
  const setUserProfileState = useSetRecoilState(UserProfileState);

  const fetchUserInfo = async () => {
    try {
      const userInfo = await fetchUser();
      setUserProfileState({
        name: userInfo.name,
        email: userInfo.email,
        nickname: userInfo.nickname,
        profileUrl: userInfo.profileUrl,
        introduce: userInfo.introduce,
        userLink: userInfo.userLink,
        followingNum: userInfo.followingNum,
        followerNum: userInfo.followerNum,
        latestPostId: userInfo.latestPostId,
        postCnt: userInfo.postCnt,
        voiceModelUrl: userInfo.voiceModelUrl,
        categoryList: userInfo.categoryList,
        followingList: userInfo.followingList,
        followerList: userInfo.followerList,
      });
      console.log(userInfo);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [setUserProfileState]);

  return (
    <>
      <EditSetting />
    </>
  );
};

export default Setting;
