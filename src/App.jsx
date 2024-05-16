import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilPage from "./pages/ProfilPage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <div className="px-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilPage />} />
        </Routes>
      </div>
      <Navbar />
    </main>
  );
}

export default App;
