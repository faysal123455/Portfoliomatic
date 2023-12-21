import "./PublicNav.css";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../../contexts/UserContext";
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

  const { user, setUser } = useContext(UserContext);

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <Link to="/" relative="path"><h1>Portfoliomatic</h1></Link>



      <nav ref={navRef}>
        <Link to="/contact" relative="path">
          Contact
        </Link>
        <Link to="/about" relative="path">
          About
        </Link>
        {
          !user ? <><Link to="/login" relative="path">
            LogIn
          </Link>
            <Link to="/signup" relative="path">
              SignUp
            </Link></> : <></>

        }

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
