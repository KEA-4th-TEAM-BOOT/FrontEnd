import PostHeader from "../components/postSection/PostHeader";
import PostContent from "../components/postSection/PostCotent";
import RelatedPost from "../components/postSection/RelatedPost";
import { useEffect, useState } from "react";
import { fetch_test } from "../api/PostAPI";

const Post = () => {
  const postId = 29;
  useEffect(async () => {
    const response = await fetch_test({ postId });
    console.log(response);
  }, []);
  return (
    <>
      <PostHeader />
      <PostContent />
      <RelatedPost />
    </>
  );
};

export default Post;
