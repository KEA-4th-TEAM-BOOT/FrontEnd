import { useState, useLayoutEffect } from "react";
import PostHeader from "../components/postSection/PostHeader";
import PostContent from "../components/postSection/PostCotent";
import RelatedPost from "../components/postSection/RelatedPost";
import { useParams, useNavigate } from "react-router-dom";
import { fetch_post } from "../api/PostAPI";
import { fetchUserData } from "../api/UserAPI";
const Post = () => {
  const { userLink, id: personalPostId } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const fetchPostInfo = async () => {
      try {
        const response = await fetch_post({ userLink, personalPostId });
        setPostInfo(response);
        const response1 = await fetchUserData(userLink);
        setUserInfo(response1);
      } catch (error) {
        alert("허용하지않는 접근입니다.");
        console.log(error);
        navigate(-1);
      }
    };
    fetchPostInfo();
  }, [userLink, personalPostId]);
  if (!postInfo || !userInfo) {
    return <div>Loading...</div>;
  }

  console.log(postInfo);
  console.log(userInfo);

  return (
    <>
      <PostHeader postInfo={postInfo} userInfo={userInfo} />
      <PostContent postInfo={postInfo} userInfo={userInfo} />
      <RelatedPost />
    </>
  );
};

export default Post;
