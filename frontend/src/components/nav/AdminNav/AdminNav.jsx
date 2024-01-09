import "./AdminNav.css";
import { Link } from "react-router-dom";

import { useContext, useRef } from "react";
import { faBars, faXmark, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../../contexts/UserContext";


const AdminNav = () => {
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header >
      <Link to="/" relative="path"><h1 className="site_name">Portfoliomatic</h1></Link>

      <nav ref={navRef}>
      
        <Link to="/admin/test" relative="path">
          Admin
        </Link>
        <Link to="/admin/dashboard" relative="path"> <FontAwesomeIcon icon={faUser} className="user"> </FontAwesomeIcon>
          Dashboard
        </Link>
        <Link to="/admin/experiences" relative="path">
          Experiences
        </Link>
        <Link to="/admin/work" relative="path">
          Works
        </Link>
        <Link to="/login" relative="path">  <FontAwesomeIcon icon={faRightFromBracket} className="out"> </FontAwesomeIcon>

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

export default AdminNav;
