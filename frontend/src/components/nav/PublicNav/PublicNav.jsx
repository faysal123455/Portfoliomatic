import "./PublicNav.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UserContext } from "../../../contexts/UserContext";

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
      <Link to="/" relative="path"><h1 className="site_name">Portfoliomatic</h1></Link>



      <nav ref={navRef}>
        <Link to="/contact" relative="path">
          Contact
        </Link>
        <Link to="/about" relative="path">
          About
        </Link>
        {
          !user ? <><Link to="/login" relative="path" className="login-button">
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
