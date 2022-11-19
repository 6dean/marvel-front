import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="top-header">
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1582097342/react-new-exercices/Marvel/langfr-1920px-MarvelLogo.svg_uw9pi8.png"
              alt=""
              width="120px"
            />
          </Link>
        </div>
      </div>
      <div className="top-buttons">
        <div>
          <Link to="/Comics">
            <button className="nav-btn">COMICS</button>
          </Link>
        </div>
        <div>
          <Link to="/Characters">
            <button className="nav-btn">CHARACTERS</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/Favorites">
            <button className="nav-btn">FAVORITES</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
