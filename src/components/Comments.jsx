"use client";
import { useEffect, useState } from "react";

export default function Comments({ post, fetchCommentsTrigger }) {
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    const response = await fetch(`/api/posts/${post.id}/comments`, {
      cache: "no-store",
    });
    const info = await response.json();
    if (info.success) {
      console.log("fetching comments");
      setComments(info.comments);
    } else {
      console.log("fetching comments failed");
    }
  }

  useEffect(() => {
    fetchComments();
  }, [fetchCommentsTrigger]);

  return (
    <div className="comments-containers">
      {[...comments].reverse().map((comment) => {
        return (
          <div key={comment.id} className="comments">
            &mdash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="comment">{comment.text}</span>
          </div>
        );
      })}
    </div>
  );
}
