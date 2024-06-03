import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Videogallery from "./pages/Videogallery";

import Twopost from "./pages/TwoPost";
import Fourpost from "./pages/Fourpost";
import Puzzleparking from "./pages/Puzzleparking";
import Shuttleparking from "./pages/Shuttleparking";
import Towerparking from "./pages/Towerparking";
import Multilavelstackparking from "./pages/Multilavelstackparking";
import Bikeparking from "./pages/Bikeparking";
import ASRS from "./pages/ASRS";
import Carelevator from "./pages/Carelevator";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <React.Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/twopost" element={<Twopost />} />
            <Route path="/fourpost" element={<Fourpost />} />
            <Route path="/puzzleparking" element={<Puzzleparking />} />
            <Route path="/shuttlestacker" element={<Shuttleparking />} />
            <Route path="/towerparking" element={<Towerparking />} />
            <Route path="/stackparking" element={<Multilavelstackparking />} />
            <Route path="/bikeparking" element={<Bikeparking />} />
            <Route path="/asrs" element={<ASRS />} />
            <Route path="/carelevator" element={<Carelevator />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videogallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
        <Clients />
        <BackToTopButton />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
