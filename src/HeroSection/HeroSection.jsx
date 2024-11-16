import "./herosection.css";
import heroImage from "../assets/img2.png";
import { useContext, useState } from "react";
import cartContext from "../Store/cartContext";



function HeroSection() {
  const [count, setCount] = useState(1);


const {checkout, setCheckout} = useContext(cartContext)


  let price = 360 * count;

  return (
    <>
      {!checkout ? (
        <div className="hero_container">
          <div className="hero_left_section">
            <div className="img_container">
              <img src={heroImage} alt="" />
            </div>
            <h4>Sony Head-Phone WXP-600</h4>
          </div>
          <div className="hero_right_section">
            <h2>
              SONY - HEADPHONES || Nose cancellation and with <br /> Higher Bass
              Boster WXP-600 <br /> <br />
              $360
            </h2>
            <p>
              {" "}
              <span style={{ fontSize: "larger", fontWeight: "bold" }}>
                Product Description <br />
              </span>
              Look at any of our headphone buying guides and you'll soon realise
              that Sony is behind some of very best pairs on the market, from
              cheap wireless earbuds to premium noise-cancelling headphones. The
              Japanese giant is nailing high performance and value more so now
              than in any previous period we can recall.
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
                Checkout - ${price}
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
