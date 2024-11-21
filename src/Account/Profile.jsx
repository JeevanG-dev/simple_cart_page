import profile_img from '../assets/profile_img.webp'
import './profile.css'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom';


function Profile() {

const location = useLocation()


const profileData = location.state;



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
            <h1>Name <br /> <span>{profileData.name}</span></h1>
            <h2>Email <br/> <span>{profileData.email}</span></h2>
            <h2>Address <br/> <span>{profileData.address}</span></h2>
         
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Eos dignissimos aut molestiae possimus dolores velit <br /> deleniti impedit repellat beatae quos.</p>
          </div>
        </div>


      </div>
 </div>
    
    </>
  );
}

export default Profile;
