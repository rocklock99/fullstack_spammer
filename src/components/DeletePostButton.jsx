"use client";
import { useRouter } from "next/navigation.js";

export default function DeletePostButton({
  post,
  fetchPostsTrigger,
  setFetchPostsTrigger,
}) {
  //const router = useRouter();
  async function handleDeleteButton() {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "DELETE",
    });
    const info = await response.json();
    if (info.success) {
      console.log("deleting post");
      setFetchPostsTrigger(!fetchPostsTrigger);
      //router.refresh();
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
