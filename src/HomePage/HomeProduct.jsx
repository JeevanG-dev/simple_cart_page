import { useEffect, useState } from "react";
import Item from "./item";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomeProduct() {


  const [apiList, setApiList] = useState([]);

  const navigate = useNavigate();



  function handelOnClick(item) {
    navigate("/cartpage", { state:item});
  }

  async function api() {
    const response = await axios.get("https://fakestoreapi.com/products");

    const responseResult = response.data;

    const data = await axios.all(
      responseResult.map((item) => {
        return {
          id: item.id,
          name: item.title,
          img: item.image,
          price: item.price,
          des: item.description,
        };
      })
    );

    setApiList(data);
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <h2 className="product_title">Latest Added</h2>
      <div className="cart_gallery">
        {apiList.map((ite) => (
          <Item
            image={ite.img}
            price={ite.price}
            name={ite.name}
            key={ite.id}
            des={ite.des}
            clicked={()=>{
              handelOnClick(ite)
            }}
          />
        ))}
      </div>
    </>
  );
}

export default HomeProduct;
