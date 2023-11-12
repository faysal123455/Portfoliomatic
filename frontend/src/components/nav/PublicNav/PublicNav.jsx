import "./PublicNav.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*
const PublicNav = () => {
  return (
    <div className="topnav">
      <Link to="/login" relative="path">
        <a className="">LogIn</a>
      </Link>
      <Link to="/contact" relative="path">
        <a className="">Contact</a>
      </Link>
      <Link to="/about" relative="path">
        <a className="">About</a>
      </Link>
      <Link to="/public" relative="path">
        <a className="">Public</a>
      </Link>
    </div>
  );
};
*/

function PublicNav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      
      <Link to="/" relative="path">
        <h3>Portfoliomatic</h3>
      </Link>

      <nav ref={navRef}>
        <Link to="/public" relative="path">
          <a className="">Public</a>
        </Link>
        <Link to="/contact" relative="path">
          <a className="">Contact</a>
        </Link>
        <Link to="/about" relative="path">
          <a className="">About</a>
        </Link>
        <Link to="/login" relative="path">
        <a className="">LogIn</a>
        </Link>
        <Link to="/signup" relative="path">
        <a className="">SignUp</a>
        </Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}

export default PublicNav;
