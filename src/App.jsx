import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Componetn/Navbar";


import ThePremise from "./Pages/ThePremise";

import Footer from "./Componetn/Footer";

// 🔥 Scroll fix
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* 🔥 IMPORTANT LAYOUT */}
      <div className="flex flex-col min-h-screen bg-black text-white">
        
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ThePremise />} />
            
          </Routes>
        </main>

       <Footer/>

      </div>
    </Router>
  );
}