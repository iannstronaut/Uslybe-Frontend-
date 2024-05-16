import Navbar from "@/components/NavBar";

export default function Layout({ children }) {
  return (
    <main className="py-2 phone:px-2">
      {children}
      <Navbar />
    </main>
  );
}
