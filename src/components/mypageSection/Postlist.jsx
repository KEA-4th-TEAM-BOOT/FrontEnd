import React from "react";
import ListCard from "../card/Listcard";

const Postlist = ({ postList, userLink, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPosts = postList.slice(startIndex, endIndex);

  return (
    <div>
      {displayedPosts.map((post, index) => (
        <ListCard
          key={index}
          title={post.title}
          content={post.thumbnail}
          tags={post.tagList}
          date={post.createdTime}
          likes={post.likeCnt}
          comments={post.comments}
          thumbnail={post.thumbnailImageUrl}
          audioSrc={post.postVoiceFileUrl}
          userLink={userLink}
          id={post.personalPostId}
        />
      ))}
    </div>
  );
};

export default Postlist;
