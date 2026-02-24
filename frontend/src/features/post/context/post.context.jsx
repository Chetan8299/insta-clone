import { useState } from "react";
import { PostContext } from "./postContext";

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState(null);
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <PostContext.Provider
      value={{ loading, setLoading, post, setPost, feed, setFeed }}
    >
      {children}
    </PostContext.Provider>
  );
};
