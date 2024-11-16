import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import cartContext from "../Store/cartContext";

function MainCartPage() {
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      <cartContext.Provider value={{checkout,setCheckout}}>
        <Navbar />
        <HeroSection />
      </cartContext.Provider>
    </>
  );
}

export default MainCartPage;
