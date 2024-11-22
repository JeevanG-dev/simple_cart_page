import profile_img from '../assets/profile_img.webp'
import './profile.css'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom';



function Profile() {

const location = useLocation()


const {userId, userDetail } = location.state || {}



  return (
    <>
 <Navbar/>
 <div className="profile_main_container">
 <div className="profile_container">
        <div className="profile_left">
          <div className="image">
            <img src={profile_img} alt="" />
          </div>
        </div>
        <div className="profile_right">
          <div className="user_details">
            <h1>Name <br /> <span>{userDetail?.name || userId?.name || "N/A" }</span></h1>
            <h2>Email <br/> <span>{userDetail?.email || userId?.email || "N/A"  }</span></h2>
            <h2>Address <br/> <span>{userDetail?.address || (userId?.name === "Jeevan Gaudel" ? "Hampton Court Rd, Carlton" : "Tara-Mandal, Gorakpur")}</span></h2>
         
            <p>Welcome to your profile {userDetail?.name || userId?.name} on our e-commerce website! Here, you’ll find everything you need to manage your account and make your shopping experience seamless and personalized. Your profile is your central hub, where you can view and update your personal information, such as your name, email address, and shipping details. You’ll also have easy access to your order history, shipment tracking, and saved items or wishlists. Explore tailored recommendations and manage your payment methods and preferences—all designed to make shopping more convenient and enjoyable. We're excited to have you here and look forward to enhancing your experience every step of the way!</p>
          </div>
        </div>


      </div>
 </div>
    
    </>
  );
}

export default Profile;
