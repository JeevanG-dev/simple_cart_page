import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainCartPage from "./CartPage/MainCartPage";
import HomePage from "./HomePage/HomePage";
import HeroSection from "./HeroSection/HeroSection";
import Account from "./Account/Account";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cartpage" element={<MainCartPage />} />
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </>
  );
}

export default App;
