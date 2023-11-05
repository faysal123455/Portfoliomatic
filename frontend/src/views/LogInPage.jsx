import Footer from "../components/footer/Footer";
import "./LogInPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import './LoginValidation';
import validation from "./LoginValidation";


function LogInPage() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));

  }


  return (
    <div className="container-log">
      <div className="container-login">
        <div className="title">
          <span>Sign In</span>
        </div>
        <div className="card">
          <form action="" onSubmit={handleSubmit} >
            <div className="email">

              <input type="text" placeholder="Email or Phone" name='email'
                onChange={handleInput} required="" />
              {errors.email && <span className='text-danger'> {errors.email}</span>}
            </div>

            <div className="email">
              <input
                type="password" placeholder="Password" name='password' onChange={handleInput} required="" />
              {errors.password && <span className='text-danger'> {errors.password}</span>}

            </div>
            <div className="pass">
              <a href="#">Forgot password?</a>
            </div>
            <div className="login button">
              <input type="submit" defaultValue="Login" />
            </div>
            <div className="signup-link">
              Not a member? <Link to="/signup">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LogInPage;
