import React, { useEffect, useRef } from "react";
import EditSetting from "../components/settingSection/EditSetting";
import { fetchUser } from "../api/UserAPI";
import { UserProfileState } from "../recoil/user";
import { useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

const Setting = () => {
  const setUserProfileState = useSetRecoilState(UserProfileState);
  const location = useLocation();
  const categorySectionRef = useRef(null);

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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("section") === "category") {
      if (categorySectionRef.current) {
        categorySectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <EditSetting categorySectionRef={categorySectionRef} />
    </>
  );
};

export default Setting;
