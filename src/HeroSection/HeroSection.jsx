import "./herosection.css";
import heroImage from "../assets/img2.png";
import { useContext, useState } from "react";
import cartContext from "../Store/cartContext";
import { useLocation } from "react-router-dom";

function HeroSection() {
  const location = useLocation();

  const data = location.state;





  const [count, setCount] = useState(1);
  const { checkout, setCheckout } = useContext(cartContext);


  let p = `${data.price}` * count;

  return (
    <>
      {!checkout ? (
        <div className="hero_container">
          <div className="hero_left_section">
            <div className="img_container">
              <img src={data.img} alt="" />
            </div>
            <h4>{data.name}</h4>
          </div>
          <div className="hero_right_section">
            <h2>
              {data.name} <br /> <br />
              {data.price}
            </h2>
            <p>
              {" "}
              <span style={{ fontSize: "larger", fontWeight: "bold" }}>
                Product Description <br />
              </span>
              {data.des}
            </p>
            <h5 style={{ textAlign: "center" }}>Rating - 4.5/5</h5>

            <div className="increment">
              <p> + {count} -</p>
              <div className="btn">
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    } else {
                      setCount(1);
                    }
                  }}
                >
                  remove
                </button>
              </div>
            </div>

            <div className="checkOut">
              <button
                onClick={() => {
                  setCheckout(true);
                }}
              >
                Checkout - ${p}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="purchase_container">
          <div className="item_clicked">
            <h1>Thank you for Purchasing..</h1>
            <h3>Your Item will be delivering soon..</h3>
            <button>Pay Now</button>
            <button
              onClick={() => {
                setCheckout(false);
              }}
            >
              Back to Cart Page
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroSection;
