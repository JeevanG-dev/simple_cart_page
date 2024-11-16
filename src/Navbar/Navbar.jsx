import { useContext } from "react";
import "./navbar.css";
import cartContext from "../Store/cartContext";

function Navbar() {


const {checkout,setCheckout} = useContext(cartContext)



  return (
    <>
      <div className="nav_container">
        <div className="left_side">
          <h3>AMAZON</h3>
        </div>

        <div className="middle_section">
          <input type="text" placeholder="Search for the item...." />
        </div>

        <div className="right_side">
          <ol>
            <li>Home</li>
            <li>Items</li>
            <li onClick={() => {

if(checkout === true){
  setCheckout(false)
}
else if (checkout === false){
  alert("Your are in the cart page")
}

            }}>Cart</li>
            <li>Profile</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Navbar;
