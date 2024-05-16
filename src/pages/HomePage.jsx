import { PostCard } from "../components/ui/Card";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-2 mb-12">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
