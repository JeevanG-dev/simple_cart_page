import { useContext, useState } from "react";
import "./account.css";
import changingState from "../Store/changingState";
import { useNavigate } from "react-router-dom";
import users from "../Store/users";

function UserDetails() {
  const { isTrue, setIstrue } = useContext(changingState);

  const [userId, setUserId] = useState([
    {
      name:'',
   
    },
  ]);


  const navigate = useNavigate();

  return (
    <>
      <div className="mainContainer">
        <form className="formContainer">
          <div className="emailClass flex">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              value={userId.name}
              onChange={(e) => {
                const { value } = e.target;
                setUserId({
                  name: value,
                });
                console.log(userId.name);
              }}
              required
            />
          </div>

          <div className="passwordClass flex">
            <label htmlFor="password">Create Password</label>
            <input type="password" />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
const checking = users.some(user => user.email === userId.name)

if(checking){
  navigate('/account/user')
}
else{
  alert("user does not found")
}
}
              
             
            }
          >
            {!isTrue ? "Sign up" : "Login"}
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
    </>
  );
}

export default UserDetails;
