"use client";
import { useState } from "react";
import EditPostForm from "./EditPostForm.jsx";
import NewCommentButton from "./NewCommentButton.jsx";
import EditPostButton from "./EditPostButton.jsx";
import DeletePostButton from "./DeletePostButton.jsx";
import AddLikeButton from "./AddLikeButton.jsx";
import NewCommentForm from "./NewCommentForm.jsx";
import Comments from "./Comments.jsx";

export default function Post({
  post,
  fetchPostsTrigger,
  setFetchPostsTrigger,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const [fetchCommentsTrigger, setFetchCommentsTrigger] = useState(false);

  return (
    <div className="post-containers">
      {isEditing ? (
        <EditPostForm
          post={post}
          setIsEditing={setIsEditing}
          setFetchPostsTrigger={setFetchPostsTrigger}
          fetchPostsTrigger={fetchPostsTrigger}
        />
      ) : (
        <div className="regular-posts">
          {post.text}
          <div className="post-buttons-containers">
            <AddLikeButton
              post={post}
              setFetchPostsTrigger={setFetchPostsTrigger}
              fetchPostsTrigger={fetchPostsTrigger}
            />
            <NewCommentButton setIsCommenting={setIsCommenting} />
            <EditPostButton setIsEditing={setIsEditing} />
            <DeletePostButton
              post={post}
              setFetchPostsTrigger={setFetchPostsTrigger}
              fetchPostsTrigger={fetchPostsTrigger}
            />
          </div>
          {isCommenting && (
            <NewCommentForm
              post={post}
              setIsCommenting={setIsCommenting}
              fetchCommentsTrigger={fetchCommentsTrigger}
              setFetchCommentsTrigger={setFetchCommentsTrigger}
            />
          )}
          <Comments post={post} fetchCommentsTrigger={fetchCommentsTrigger} />
        </div>
      )}
    </div>
  );
}
