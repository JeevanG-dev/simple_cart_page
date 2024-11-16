import homepage_img from '../assets/homepage_img.jpg'
import './homePage.css'


function HomePageHero(){

    return(
        <>
<div className="homeHero_section">
    <img src={homepage_img} alt="" />
</div>
        </>
    )
}

export default HomePageHero;