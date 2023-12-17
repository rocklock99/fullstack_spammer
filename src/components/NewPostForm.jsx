"use client";
import { useState } from "react";

export default function NewPostForm({
  setFetchPostsTrigger,
  fetchPostsTrigger,
}) {
  const [postText, setPostText] = useState("");

  async function handleFormSubmit(event) {
    event.preventDefault();
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: postText,
      }),
    });
    const info = await response.json();
    setPostText("");
    setFetchPostsTrigger(!fetchPostsTrigger);
  }

  function handleInputChanges(event) {
    setPostText(event.target.value);
  }

  return (
    <form id="new-post-form" onSubmit={handleFormSubmit}>
      <textarea
        id="new-post-text"
        type="text"
        value={postText}
        placeholder="Write your post here..."
        onChange={handleInputChanges}
      ></textarea>
      <div id="submit-button-container">
        <button type="submit" id="create-post-button">
          + Add a post
        </button>
      </div>
    </form>
  );
}
