"use client";
//import { prisma } from "@/lib/api.js";
import Post from "./Post.jsx";
import { useEffect, useState } from "react";
import NewPostForm from "./NewPostForm.jsx";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [fetchPostsTrigger, setFetchPostsTrigger] = useState(false);

  useEffect(() => {
    // define fetchPosts
    async function fetchPosts() {
      const response = await fetch("/api/posts");
      const postsList = await response.json();
      setPosts(postsList.posts);
    }
    console.log("fetching posts");
    // call fetchPosts
    fetchPosts();
  }, [fetchPostsTrigger]);

  return (
    <>
      <h1>Spammer</h1>
      <NewPostForm
        setFetchPostsTrigger={setFetchPostsTrigger}
        fetchPostsTrigger={fetchPostsTrigger}
      />
      <div id="posts-container">
        {posts.map((post) => {
          if (!post || post.id === undefined) return null;
          return (
            <Post
              key={post.id}
              post={post}
              fetchPostsTrigger={fetchPostsTrigger}
              setFetchPostsTrigger={setFetchPostsTrigger}
            />
          );
        })}
      </div>
    </>
  );
}

// import { prisma } from "@/lib/api.js";
// import Post from "./Post.jsx";

// export default async function Posts() {
//   const posts = await prisma.post.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return (
//     <div id="posts-container">
//       {posts.map((post) => {
//         return <Post key={post.id} post={post} />;
//       })}
//     </div>
//   );
// }
