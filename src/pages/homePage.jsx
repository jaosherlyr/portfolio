import "./HomePage.scss";
import Profile from "../components/Profile.jsx";
import Details from "../components/Details.jsx";


function Home() {
  

  return (
    <div className="container">
      <Profile />
      <Details />
    </div>
  );
}

export default Home;
