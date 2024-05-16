import { SearchNormal1 } from "iconsax-react";

function SearchHeader() {
  return (
    <div className="fixed top-0 left-0 w-full bg-content drop-shadow-md border-t border-terang p-2 z-40">
      <div className="flex justify-center items-center gap-2">
        <SearchNormal1 size="18" color="#eeeeee" variant="Broken" />
        <input
          type="text"
          name="search"
          id="search"
          className="bg-bg border-b rounded-sm w-1/3 phone:w-full h-8"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export { SearchHeader };
