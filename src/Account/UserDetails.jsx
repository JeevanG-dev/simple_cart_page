import { useContext } from 'react';
import './account.css'
import changingState from '../Store/changingState';


function UserDetails() {

const {isTrue,setIstrue} = useContext(changingState)


  return <>

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
            {!isTrue ? "Already have an account" : "Create an Account"}
          </p>
        </div>


  </>;
}

export default UserDetails;
