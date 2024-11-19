import Navbar from "../Navbar/Navbar";
import "./account.css";
import { useState } from "react";

function Account() {
  const [isTrue, setIstrue] = useState(false);

  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    address: "",
  });

  return (
    <>
      <Navbar />

      {!isTrue ? (
        <div className="mainContainer">
          <form className="formContainer">
            <div className="fullName flex">
              <label htmlFor="name">Full Name : </label>
              <input
                type="text"
                name="name"
                value={userDetail.name}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setUserDetail({
                    ...userDetail,
                    [name]: value,
                  });
                }}
              />
            </div>

            <div className="emailClass flex">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                name="email"
                value={userDetail.email}
                required
                onChange={(e) => {
                  const { name, value } = e.target;

                  setUserDetail({
                    ...userDetail,
                    [name]: value,
                  });
                }}
              />
            </div>

            <div className="passwordClass flex">
              <label htmlFor="password">Create Password</label>
              <input type="password" />
            </div>

            <div className="addressClass flex">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={userDetail.address}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setUserDetail({
                    ...userDetail,
                    [name]: value,
                  });
                }}
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(userDetail);
              }}
            >
              Login
            </button>
          </form>

          <p
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => {
              setIstrue(true);
              setIstrue(!isTrue);
            }}
          >
            {" "}
            {!isTrue ? "Already have an account" : "Create an Account"}
          </p>
        </div>
      ) : (
        <div className="mainContainer">
          <form className="formContainer">
            <div className="emailClass flex">
              <label htmlFor="email">Email : </label>
              <input type="email" name="email" required />
            </div>

            <div className="passwordClass flex">
              <label htmlFor="password">Create Password</label>
              <input type="password" />
            </div>

            <button>{!isTrue ? "Login" : "Sign up"}</button>
          </form>

          <p
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => {
              setIstrue(true);
              setIstrue(!isTrue);
            }}
          >
            {" "}
            {!isTrue ? "Already have an account" : "Create an Account"}
          </p>
        </div>
      )}
    </>
  );
}

export default Account;
