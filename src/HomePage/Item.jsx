import './homepage.css'


function Item({image,name,price,des,clicked}){

    return(
        <>
<div className="cart_container" onClick={clicked}>
    <div className="image">
        <img src={image} alt="" />
    </div>
    <div className="about_product">
<h3 style={{marginBottom:"10px", height:"45px", overflow:"hidden"}}>{name}</h3>
<p style={{height:"70px", overflow:"scroll"}}>{des}</p>
    </div>

    <div className="price">
<p style={{fontSize:"20px"}}>${price}</p>
    </div>
</div>
        </>
    )
}
export default Item