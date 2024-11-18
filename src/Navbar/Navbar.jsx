import { useContext } from "react";
import "./navbar.css";

import { useNavigate } from "react-router-dom";

function Navbar() {




const navigate = useNavigate()

  return (
    <>
      <div className="nav_container">
        <div className="left_side">
          <h3>Jateen_Store</h3>
        </div>

        <div className="middle_section">
          <input type="text" placeholder="Search for the item...." />
        </div>

        <div className="right_side">
          <ol>
            <li onClick={()=>{
              navigate('/')
            }}>Home</li>
            <li>Items</li>
            <li onClick={() => {
             navigate('/cartpage')

            }}>Cart</li>
            <li>Account</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Navbar;
