import { UserAdd, UserEdit } from "iconsax-react";
import { PostCard } from "../components/ui/Card";
import React from "react";

export default function Profile() {
  return (
    <div className="my-16 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://forum-mgmp-arab.id/wp-content/uploads/2017/10/user9.jpg"
          alt="profile"
          className="rounded-full w-32 border-2 border-violet-500"
        />
        <h1 className="font-medium">MasDeveloper123</h1>
        <div className="flex justify-center">
          <div className="w-20 flex flex-col items-center border-r">
            <h1>100</h1>
            <p className="text-xs">Teman</p>
          </div>
          <div className="w-20 flex flex-col items-center">
            <h1>100</h1>
            <p className="text-xs">Post</p>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="p-3 w-28 bg-content rounded-lg border-2 text-xs">
            <div className="flex items-center justify-center gap-1">
              <UserEdit size="18" color="#eeeeee" variant="Broken" />{" "}
              <p>Edit Profil</p>
            </div>
          </button>
          <button className="p-3 w-28 bg-content rounded-lg border-2 text-xs">
            <div className="flex items-center justify-center gap-1">
              <UserAdd size="18" color="#eeeeee" variant="Broken" />{" "}
              <p>Add Friend</p>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center border-t gap-2 mt-5">
        <PostCard />
      </div>
    </div>
  );
}
