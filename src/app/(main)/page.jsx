import { PostCard } from "@/components/ui/card";

export const metadata = {
  title: "Uslybe | Home",
  description: "Connect With Your Friends",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-2 mb-12">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
