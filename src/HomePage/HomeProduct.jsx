import img2 from "../assets/img2.png";
import Item from "./item";

function HomeProduct() {
  let product = [
    {
      id: 1,
      name: "Iphone 11",
      img: img2,
      price: 123456
    },
    {
      id: 2,
      name: "Iphone 12",
      img: img2,
      price:123000,
    },
    {
      id: 3,
      name: "Samsung 21",
      img: img2,
      price:1245000,
    },
    {
      id: 4,
      name: "Samsung Note 10",
      img: img2,
      price:145000,
    },
    {
      id: 5,
      name: "Lenovo",
      img: img2,
      price:90000,
    },
    
  ];

  return (
    <>
    <h2 className="product_title">Latest Added</h2>
      <div className="cart_gallery">

        {product.map((product) => (
          <Item image={product.img} name={product.name} price={product.price} />
        ))}
      </div>
    </>
  );
}

export default HomeProduct;
