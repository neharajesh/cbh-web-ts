import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="layout">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
