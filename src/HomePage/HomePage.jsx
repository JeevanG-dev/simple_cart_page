import Navbar from "../Navbar/Navbar";
import cartContext from "../Store/cartContext";
import { useEffect, useState } from "react";
import HomePageHero from "./HomePageHero";
import HomeProduct from "./HomeProduct";
import Welcome from "../Welcome/Welcome";

function HomePage() {
  const [open, setOpen] = useState(false);

  const [checkout, setCheckout] = useState(false);


  useEffect(()=>{

setTimeout(()=>{

  return setOpen(true)

},1500)
  },[])

  return (
    <>
      {!open ? ( 
      <Welcome/> 
      ) : (
        <cartContext.Provider value={{ checkout, setCheckout }}>
          <Navbar />
          <HomePageHero />
          <HomeProduct />
        </cartContext.Provider>
      )}
    </>
  );
}

export default HomePage;
