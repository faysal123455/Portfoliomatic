import Footer from "../components/footer/Footer";
import "./SignUp.css";
import Validation from "./SignupValidation";
import { useState } from "react";


function SignUp() {

    const [values, setValues] = useState({
        name: '',
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
                            <input type="text" placeholder="Name"
                                name='name' onChange={handleInput} required="" />
                            {errors.name && <span className='text-danger'> {errors.name}</span>}
                        </div>
                        <div className="email">
                            <input type="text" placeholder="Email or Phone"
                                name='email' onChange={handleInput} required="" />
                            {errors.email && <span className='text-danger'> {errors.email}</span>}
                        </div>
                        <div className="email">
                            <input type="password" placeholder="Enter Password"
                                name='password' onChange={handleInput} required="" />
                            {errors.password && <span className='text-danger'> {errors.password}</span>}
                        </div>
                        <div className="login button">
                            <input type="submit" defaultValue="Login" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;
