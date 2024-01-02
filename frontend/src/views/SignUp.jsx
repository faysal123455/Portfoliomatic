import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { createUser } from "../services/api";
import "./SignUp.css";
import Validation from "./SignupValidation";
import { useState } from "react";


function SignUp() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        createUser({
            firstname: values.firstname[0],
            lastname: values.lastname[0],
            email: values.email[0],
            password: values.password[0]
        });

        // console.log(values);

        navigate('/login')
    }

    return (
        <div className="container-log">
            <div className="container-login">
                <div className="title">
                    <span>Signup Form</span>
                </div>
                <div className="card">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="email">
                            <input type="text" placeholder="FirstName"
                                name='firstname' onChange={handleInput} required="" />
                            {errors.firstname && <span className='text-danger'> {errors.firstname}</span>}
                        </div>
                        <div className="email">
                            <input type="text" placeholder="LastName"
                                name='lastname' onChange={handleInput} required="" />
                            {errors.lastname && <span className='text-danger'> {errors.lastname}</span>}
                        </div>
                        <div className="email">
                            <input type="text" placeholder="Email"
                                name='email' onChange={handleInput} required="" />
                            {errors.email && <span className='text-danger'> {errors.email}</span>}
                        </div>
                        <div className="email">
                            <input type="password" placeholder="Enter Password"
                                name='password' onChange={handleInput} required="" />
                            {errors.password && <span className='text-danger'> {errors.password}</span>}
                        </div>
                        <div className="login button">
                            <input type="submit" value="submit" name="submit" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;
