
import Navbar from "../Navbar/Navbar";
import "./account.css";
import { useState } from "react";


function Account() {


    const [userDetail, setUserDetail] = useState({

name: user.name,
email: user.email,
address: user.address,


    })



  return (


    <>
      <Navbar />

      <div className="mainContainer">
        <form className="formContainer">
          <div className="fullName flex">
            <label htmlFor="">Full Name : </label>
            <input type="text" />
          </div>

          <div className="emailClass flex">
            <label htmlFor="">Email : </label>
            <input type="email" required />
          </div>

          <div className="passwordClass flex">
            <label htmlFor="">Create Password</label>
            <input type="password" />
          </div>

          <div className="addressClass flex">
            <label htmlFor="">Address</label>
            <input type="text" />
          </div>

          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default Account;
