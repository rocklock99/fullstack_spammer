"use client";
import { useState } from "react";

export default function EditPostForm({
  post,
  setIsEditing,
  setFetchPostsTrigger,
  fetchPostsTrigger,
}) {
  const [postText, setPostText] = useState(post.text);

  function handleCancelButton() {
    setIsEditing(false);
  }

  function handleInputChanges(event) {
    setPostText(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: postText,
      }),
    });
    const info = await response.json();
    if (info.success) {
      console.log("editing");
      setIsEditing(false);
      setFetchPostsTrigger(!fetchPostsTrigger);
    } else {
      console.log("editing failed");
    }
  }
  return (
    <form className="edit-post-forms" onSubmit={handleFormSubmit}>
      <textarea
        className="edit-text-areas"
        type="text"
        value={postText}
        placeholder="Place message here.."
        onChange={handleInputChanges}
      ></textarea>
      <div className="edit-buttons-containers">
        <button
          type="submit"
          id="submit-edited-post-button"
          className="edit-form-buttons"
        >
          Submit
        </button>
        <button
          id="cancel-edit-button"
          className="edit-form-buttons"
          type="button"
          onClick={handleCancelButton}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
