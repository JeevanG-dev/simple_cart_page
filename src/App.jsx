 import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainCartPage from "./CartPage/MainCartPage";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <>

<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/cartpage" element={<MainCartPage/>}/>


</Routes>

     
    </>
  );
}

export default App;
