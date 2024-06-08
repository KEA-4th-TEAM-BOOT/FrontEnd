import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Trend from "../components/feedSection/Trend";
import Contents from "../components/feedSection/Contents";

const Feed = () => {
  const contentsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("section") === "contents") {
      contentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Trend />
      <div ref={contentsRef}>
        <Contents defaultSortOrder="recent" />
      </div>
    </>
  );
};

export default Feed;
