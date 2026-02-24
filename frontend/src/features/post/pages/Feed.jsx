import React, { useEffect } from "react";
import "../styles/feed.scss";
import { usePost } from "../hooks/usePost";
import Post from "../component/Post";

const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed)
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          {feed.map((post) => (
            <Post
              key={post._id}
              caption={post.caption}
              imgUrl={post.imgUrl}
              isLiked={post.isLiked}
              user={post.user}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Feed;
