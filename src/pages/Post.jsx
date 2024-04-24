import React from "react";
import PostHeader from "../components/postSection/PostHeader";
import PostContent from "../components/postSection/PostCotent";
import RelatedPost from "../components/postSection/RelatedPost";

const Post = () => {
  return (
    <>
      <PostHeader />
      <PostContent />
      <RelatedPost />
    </>
  );
};

export default Post;
