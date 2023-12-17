"use client";
import { useState } from "react";

export default function NewCommentForm({
  post,
  setIsCommenting,
  fetchCommentsTrigger,
  setFetchCommentsTrigger,
}) {
  const [comment, setComment] = useState("");

  function handleCancelButton() {
    setIsCommenting(false);
  }

  function handleInputChanges(event) {
    setComment(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const response = await fetch(`/api/posts/${post.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: comment,
      }),
      cache: "no-store",
    });
    const info = await response.json();
    if (info.success) {
      console.log("adding comment");
      setFetchCommentsTrigger(!fetchCommentsTrigger);
      setIsCommenting(false);
      setComment("");
    } else {
      console.log("adding comment failed");
    }
  }
  return (
    <form id="new-comment-form" onSubmit={handleFormSubmit}>
      <textarea
        className="comment-text-areas"
        type="text"
        value={comment}
        placeholder="Write your comment here.."
        onChange={handleInputChanges}
      ></textarea>
      <div className="comment-buttons-containers">
        <button
          type="submit"
          id="submit-comment-button"
          className="comment-form-buttons"
        >
          Submit
        </button>
        <button
          id="cancel-comment-button"
          className="comment-form-buttons"
          type="button"
          onClick={handleCancelButton}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
