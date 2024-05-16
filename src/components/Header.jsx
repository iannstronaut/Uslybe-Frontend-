import { SearchNormal1 } from "iconsax-react";
import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowCircleDown } from "iconsax-react";

function SearchHeader() {
  return (
    <div className="fixed top-0 left-0 w-full bg-content drop-shadow-md border-t border-terang p-2 z-40">
      <div className="flex justify-center items-center gap-2">
        <SearchNormal1 size="18" color="#eeeeee" variant="Broken" />
        <input
          type="text"
          name="search"
          id="search"
          className="bg-bg border-b rounded-sm w-1/3 phone:w-full h-10 px-2 focus:outline-violet-500"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

function ProfilHeader() {
  return (
    <div className="fixed top-0 left-0 w-full bg-content drop-shadow-md border-t border-terang p-2 z-40">
      <div className="flex justify-center items-center gap-2 h-10">
        <h1 className="font-medium">MasDeveloper123</h1>
        <ArrowCircleDown size="18" color="#eeeeee" variant="Broken" />
      </div>
    </div>
  );
}

function HomeHeader() {
  return (
    <div className="fixed top-0 left-0 w-full bg-content drop-shadow-md border-t border-terang p-2 z-40">
      <div className="flex justify-center items-center gap-2 h-10">
        <h1 className="font-bold italic text-lg">Uslybe</h1>
      </div>
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  switch (path) {
    case "/":
      return <HomeHeader />;
      break;
    case "/search":
      return <SearchHeader />;
      break;
    case "/profile":
      return <ProfilHeader />;
      break;
  }
}
