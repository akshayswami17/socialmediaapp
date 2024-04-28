import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data) => {
        addInitialPosts(data.posts);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up useEffect.");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {error && <div>Error: {error}</div>}
      {!fetching && !error && postList.length === 0 && <WelcomeMessage />}
      {!fetching && !error && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
