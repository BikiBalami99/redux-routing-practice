import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/slices/postsSlice";
import Post from "./Post";

export default function Posts() {
  const { posts, isLoading } = useSelector((state) => state.postsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <h2>Posts: </h2>
      <ul>
        {!isLoading &&
          posts.map((post) => {
            return (
              <Post key={post.id} title={post.title} body={post.body}></Post>
            );
          })}
      </ul>
    </div>
  );
}
