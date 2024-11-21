import Navbar from "../Navbar/Navbar";
import changingState from "../Store/changingState";
import "./account.css";
import { useContext, useState } from "react";
import UserDetails from "./UserDetails";
import { useNavigate } from "react-router-dom";

function Account() {
  const { isTrue, setIstrue } = useContext(changingState);

  const navigate = useNavigate();

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
                required
                name="name"
                value={userDetail.name}
                onChange={(e) => {
                  const { value } = e.target;
                  setUserDetail({
                    ...userDetail,
                    name: value,
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
                  const { value } = e.target;

                  setUserDetail({
                    ...userDetail,
                    email: value,
                  });
                }}
              />
            </div>

            <div className="passwordClass flex">
              <label htmlFor="password">Create Password</label>
              <input type="password" required />
            </div>

            <div className="addressClass flex">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                required
                value={userDetail.address}
                onChange={(e) => {
                  const { value } = e.target;
                  setUserDetail({
                    ...userDetail,
                    address: value,
                  });
                }}
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                const { name, email, address } = userDetail;

                if (name.trim() && email.trim() && address.trim()) {
                  navigate("/account/user", {state: userDetail});
                } else {
                  alert("Please fill the form first");
                }
              }}
            >
              Sign Up
            </button>
          </form>

          <p
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => {
              setIstrue(true);
              setIstrue(!isTrue);
            }}
          >
            {!isTrue ? "Already have an account" : "Create an Account"}
          </p>
        </div>
      ) : (
        <UserDetails />
      )}
    </>
  );
}

export default Account;
