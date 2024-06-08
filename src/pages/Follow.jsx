import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FollowingUpload from "../components/followSection/FollowingUpload";
import FavoriteUsers from "../components/followSection/FavoriteUsers";
import RecommendPost from "../components/followSection/RecommendPost";
import RecommendFollow from "../components/followSection/RecommendFollow";

const Follow = () => {
  const recommendPostRef = useRef(null);
  const location = useLocation();

  const scrollToRecommendPost = () => {
    if (recommendPostRef.current) {
      recommendPostRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("section") === "recommendpost") {
      scrollToRecommendPost();
    }
  }, [location]);

  return (
    <>
      <FollowingUpload />
      <FavoriteUsers />
      <div ref={recommendPostRef}>
        <RecommendPost />
      </div>
      <RecommendFollow />
    </>
  );
};

export default Follow;
