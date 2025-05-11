import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login"; 
import { HeroSection } from "./components/HeroSection";
import SlidingSection from "./components/SlidingSection";
import VerticalSlider from "./components/VerticalSlider";
import ImgSec from "./components/ImgSec";
import InvestmentSection from "./components/InvestmentSec";
import Footer from "./components/Footer";

// Import the pages linked from the dropdown menu
import NordBankAccount from "./menu_pages/NordBankAccount";
import NordBankCard from "./menu_pages/NordBankCard";
import Investments from "./menu_pages/Investments";
import Loans from "./menu_pages/Loans";
import Insurance from "./menu_pages/Insurance";
import OpenFinance from "./menu_pages/OpenFinance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Login /><HeroSection /><SlidingSection /><VerticalSlider /><ImgSec /><InvestmentSection /><Footer /></>} />
        {/* Define routes for each dropdown link */}
        <Route path="/menu_pages/NordBankAccount" element={<NordBankAccount />} />
        <Route path="/menu_pages/NordBankCard" element={<NordBankCard />} />
        <Route path="/menu_pages/Investments" element={<Investments />} />
        <Route path="/menu_pages/Loans" element={<Loans />} />
        <Route path="/menu_pages/Insurance" element={<Insurance />} />
        <Route path="/menu_pages/OpenFinance" element={<OpenFinance />} />
      </Routes>
    </Router>
  );
}

export default App;
