import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainCartPage from "./CartPage/MainCartPage";
import HomePage from "./HomePage/HomePage";
import Account from "./Account/Account";
import { useState } from "react";
import changingState from "./Store/changingState";

function App() {
  const [isTrue, setIstrue] = useState(false);

  return (
    <>
     <changingState.Provider value={{ isTrue, setIstrue }}>
      <Routes>
       
          <Route path="/" element={<HomePage />} />
          <Route path="/cartpage" element={<MainCartPage />} />
          <Route path="/account" element={<Account />} />

      </Routes>
      </changingState.Provider>
    </>
  );
}

export default App;
