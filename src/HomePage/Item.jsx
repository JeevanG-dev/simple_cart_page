import './homepage.css'




function Item({image,name,price}){




    return(
        <>
<div className="cart_container">
    <div className="image">
        <img src={image} alt="" />
    </div>
    <div className="about_product">
<h3>{name}</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, assumenda.</p>
    </div>

    <div className="price">
<p style={{fontSize:"20px"}}>${price}</p>
    </div>
</div>
        </>
    )
}
export default Item