import "./AdminNav.css";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="topnav">
      <Link to="/login" relative="path">
        <a className="nav-items">LogOut</a>
      </Link>

      <Link to="/admin" relative="path">
        <a className="nav-items">Admin</a>
      </Link>

      <Link to="/admin/dashboard" relative="path">
        <a className="nav-items">Dashboard</a>
      </Link>

      <Link to="/admin/experiences" relative="path">
        <a className="nav-items">Experiences</a>
      </Link>
      <Link to="/admin/work" relative="path">
        <a className="nav-items">Works</a>
      </Link>

    
    </div>
  );
};

export default AdminNav;
