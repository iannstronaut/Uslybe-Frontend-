import { PostCard } from "../components/ui/Card";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-2 my-16">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
