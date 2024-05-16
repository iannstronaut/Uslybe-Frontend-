import { SearchHeader } from "@/components/Header";
export default function Layout({ children }) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}
