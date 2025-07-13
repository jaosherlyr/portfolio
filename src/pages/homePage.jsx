import "./HomePage.scss";
import Button from "../components/Button.jsx";
import { IoArrowForwardOutline } from "react-icons/io5";

import { useTheme } from "../context/ThemeContext";

function Home() {
  const { theme } = useTheme();

  return (
    <div className="container">
      <div className="placeholder"></div>
      <div className="homedetails">
        <span className="title">Hi! I am <span className="name">Sherly R. Jao</span></span>
        <span className="subtitle">Artist | Web Developer & Designer</span>
        <p>
          I code and I draw. Based in the Philippines. <br />
          Just trying my best to navigate life with the skills I have.
        </p>
        <Button theme={theme}> 
          <IoArrowForwardOutline />
          Check out my works!
        </Button>
      </div>
    </div>
  );
}

export default Home;
