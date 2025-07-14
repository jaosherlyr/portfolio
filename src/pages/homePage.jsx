import "./HomePage.scss";
import profile from "../assets/profile.jpg"
import Button from "../components/Button.jsx";

import { IoArrowForwardOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/works');
  }

  return (
    <div className="container">
      <div className="profileContainer">
        <div className="placeholder"></div>
        <img src={profile} alt="profile pic" />
      </div>

      <div className="homedetails">
        <span className="title">Hi! I am <span className="name whitespace-nowrap">Sherly R. Jao</span></span>
        <span className="subtitle ">Artist | Web Developer & Designer</span>

        <p>
          I code and I draw, and I'm from the <strong>Philippines 🇵🇭</strong> <br/>
          Just trying my best to navigate life with the skills I have.
        </p>

        <Button theme={theme} onClick={onButtonClick}>
          <IoArrowForwardOutline />
          Check out my works!
        </Button>

      </div>
    </div>
  );
}

export default Home;
