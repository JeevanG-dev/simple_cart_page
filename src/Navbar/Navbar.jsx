import './navbar.css'



function Navbar() {
  return (
    <>
      <div className="nav_container">

<div className="left_side">
<h3>AMAZON</h3>
</div>


<div className="middle_section">
    <input type="text"  placeholder='Search for the item....'/>
</div>

   <div className="right_side">
    <ol>
        <li>Home</li>
        <li>Items</li>
        <li>Cart</li>
        <li>Profile</li>
    </ol>
   </div>    


      </div>
    </>
  );
}

export default Navbar;
