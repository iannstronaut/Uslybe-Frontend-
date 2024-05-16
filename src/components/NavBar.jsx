import { Home2, SearchNormal1, User } from "iconsax-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-content border-t border-terang p-2 z-50">
      <div className="grid grid-cols-3 items-center justify-items-center">
        <Link to={"/"} className="w-1/6 grid items-center justify-items-center">
          <Home2
            size="32"
            color={`${path === "/" ? "#8b5cf6" : "#eeeeee"}`}
            variant={`${path === "/" ? "Bold" : "Broken"}`}
          />
        </Link>
        <Link
          to={"/search"}
          className="w-1/6 grid items-center justify-items-center"
        >
          <SearchNormal1
            size="32"
            color={`${path === "/search" ? "#8b5cf6" : "#eeeeee"}`}
            variant={`${path === "/search" ? "Bold" : "Broken"}`}
          />
        </Link>
        <Link
          to={"/profile"}
          className="w-1/6 grid items-center justify-items-center"
        >
          <User
            size="32"
            color={`${path === "/profile" ? "#8b5cf6" : "#eeeeee"}`}
            variant={`${path === "/profile" ? "Bold" : "Broken"}`}
          />
        </Link>
      </div>
    </div>
  );
}
