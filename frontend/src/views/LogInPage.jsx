import Footer from "../components/footer/Footer";
import "./LogInPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import './LoginValidation';
import validation from "./LoginValidation";
import { loginUser } from "../services/api";
import { UserContext } from "../contexts/UserContext";

function LogInPage() {

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  // const navigate = useNavigate
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));
    // console.log(values);
    
    // navigate('/public')

    const request = await loginUser({
      email: values.email[0],
      password: values.password[0]
    })

    if (request.status === 200) {

      setUser(request.data);
      navigate('/admin/dashboard');
    }


  
  }

  return (
    <div className="container-log">
      <div className="container-login">
        <div className="title">
          <span>LogIn</span>
        </div>
        <div className="card">
          <form onSubmit={handleSubmit} >
            <div className="email">

              <input type="text" placeholder="Email" name='email'
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
              <input type="submit" value="submit" name="submit" />
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
