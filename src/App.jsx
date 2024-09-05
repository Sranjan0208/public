import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";

import Business from "./components/Business";
import Dashboard from "./components/dashboard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Insight from "./components/Insight";
import Lenders from "./components/Lenders";
import Navbar from "./components/Navbar";
import Testimonial1 from "./components/Testimonial-1";
import Testimonial2 from "./components/Testimonial-2";
import Whymoneyflo from "./components/whymoneyflo";
import Workflow from "./components/Workflow";
import ContactForm from "./components/Contact";
import InsightMobile from "./components/Insight-Mobile";

function App() {
  const size = useWindowSize();

  return (
    <div className="font-[manrope]">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Dashboard />
                {size.width < 768 ? <InsightMobile /> : <Insight />}
                <Lenders />
                <Business />
                <Testimonial1 />
                <Whymoneyflo />
                <Workflow />
                <Testimonial2 />
                <FAQ />
              </>
            }
          />

          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
