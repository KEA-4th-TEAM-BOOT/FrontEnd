import React, { useState } from "react";

import FollowTop from "../components/followSection/FollowTop";
import FollowBottom from "../components/followSection/FollowBottom";
import NoFollow from "../components/followSection/NoFollow";

const Follow = () => {
  const [hasFollow, setHasFollow] = useState(false);

  return (
    <>
      {hasFollow ? (
        <>
          <FollowTop />
          <FollowBottom />
        </>
      ) : (
        <NoFollow />
      )}
    </>
  );
};

export default Follow;
