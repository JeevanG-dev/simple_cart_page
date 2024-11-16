 import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainCartPage from "./CartPage/MainCartPage";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <>

<Routes>

<Route path="/" element={<MainCartPage/>}/>
<Route path="/homepage" element={<HomePage/>}/>

</Routes>

     
    </>
  );
}

export default App;
