import MenuImage from "../assets/images/Menu.jpeg";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${MenuImage})`,
        backgroundSize: "cover",
        height: "99vh",
        width: "100vw",
        position: "fixed",
      }}
    >
      <div className="menuDiv">
        <div
          className="menuItem"
          onClick={() => {
            navigate("/foodMenu");
          }}
        >
          Food
        </div>
        <div
          className="menuItem"
          onClick={() => {
            navigate("/beveragesMenu");
          }}
        >
          Beverages
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
