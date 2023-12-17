"use client";

export default function DeletePostButton({
  post,
  fetchPostsTrigger,
  setFetchPostsTrigger,
}) {
  async function handleDeleteButton() {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "DELETE",
    });
    const info = await response.json();
    if (info.success) {
      console.log("deleting post");
      setFetchPostsTrigger(!fetchPostsTrigger);
    } else {
      console.log("deleting post failed");
    }
  }
  return (
    <button className="delete-buttons" onClick={handleDeleteButton}>
      🗑️
    </button>
  );
}
