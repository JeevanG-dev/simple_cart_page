
import "./navbar.css";

import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  const data = location.state;

  return (
    <>
      <div className="nav_container">
        <div className="left_side">
          <h3>Bhuntu_Store</h3>
        </div>

        <div className="middle_section">
          <input type="text" placeholder="Search for the item...." />
        </div>

        <div className="right_side">
          <ol>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                alert("Sorry this page is under construction");
              }}
            >
              Items
            </li>
            <li onClick={()=>{
          
            }}>Cart</li>
            <li
              onClick={() => {
                alert("Sorry this page is under construction");
              }}
            >
              Account
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Navbar;
