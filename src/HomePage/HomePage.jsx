import Navbar from "../Navbar/Navbar";
import cartContext from "../Store/cartContext";
import { useState } from "react";
import HomePageHero from "./HomePageHero";
import HomeProduct from "./HomeProduct";


function HomePage() {

    const [checkout, setCheckout] = useState(false)

  return <>

<cartContext.Provider value={{checkout,setCheckout}}>
<Navbar/>
<HomePageHero/>
<HomeProduct/>
</cartContext.Provider>




  </>;
}

export default HomePage;
