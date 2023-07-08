import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SingleBlog } from "./pages";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
