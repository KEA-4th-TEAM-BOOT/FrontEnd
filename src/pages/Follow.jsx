import React from "react";

// import FollowTop from "../components/followSection/FollowTop";
// import FollowBottom from "../components/followSection/FollowBottom";
// import NoFollow from "../components/followSection/NoFollow";
import FollowingUpload from "../components/followSection/FollowingUpload";
import FavoriteUsers from "../components/followSection/FavoriteUsers";

const Follow = () => {
  // const [hasFollow, setHasFollow] = useState(true);

  return (
    <>
      <FollowingUpload />
      <FavoriteUsers />
    </>
    // <>
    //   {hasFollow ? (
    //     <>
    //       <FollowingUpload />
    //     </>
    //   ) : (
    //     <FollowingUpload />
    //   )}
    // </>
  );
};

export default Follow;
