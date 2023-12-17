"use client";

export default function AddLikeButton({
  post,
  fetchPostsTrigger,
  setFetchPostsTrigger,
}) {
  async function handleAddLikeButton() {
    const response = await fetch(`/api/posts/${post.id}/likes`, {
      method: "PUT",
    });
    const info = await response.json();
    if (response.ok) {
      console.log("adding like");
      setFetchPostsTrigger(!fetchPostsTrigger);
    } else {
      console.log("adding like failed");
    }
  }
  return (
    <button className="add-like-buttons" onClick={handleAddLikeButton}>
      👍{post.likes}
    </button>
  );
}
