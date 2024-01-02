import Footer from "../../components/footer/Footer";
import { useState } from "react";

import { createPersonalInformations } from "../../services/api";

import "./WorkPage.css";
import countrydata from "./Countrydata.json";


const WorkPage = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);


        createPersonalInformations(formData);

        console.log(formData);

        // navigate('/login')
    }

    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');
    

        const handlecountry = (e) => {
            const getcountryId = e.target.value;
        

            const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
            setState(getStatedata);
            console.log(getcountryId);
    }


    const handlestate = (e) => {
        const stateid = e.target.value;
        console.log(stateid);
        setStateid(stateid);
    }

    
    return (
        <>
            <section id="about-sc">
                <div className="container">
                    <div className="about-cnt">
                        <form onSubmit={handleSubmit} className="cv-form" id="cv-form" encType="multipart/form-data">
                            
                            {/* personal information */}

                            <div className="cv-form-blk">
                                <div className="cv-form-row-title">
                                    <h3>personal information</h3>
                                </div>
                                <div className="cv-form-row cv-form-row-about">
                                    <div className="cols-3">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                First Name
                                            </label>
                                            <input
                                                name="firstname"
                                                type="text"
                                                className="form-control firstname"
                                                id=""
                                                onkeyup="generateCV()"
                                                placeholder="e.g. faysal"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Last Name
                                            </label>
                                            <input
                                                name="lastname"
                                                type="text"
                                                className="form-control lastname"
                                                id=""
                                                onkeyup="generateCV()"
                                                placeholder="e.g. sarker"
                                            />
                                            <span className="form-text" />
                                        </div>
                                    </div>
                                    <div className="cols-3">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Your Image
                                            </label>
                                            <input
                                                name="image"
                                                type="file"
                                                className="form-control image"
                                                id=""
                                                accept="image/*"
                                                onchange="previewImage()"
                                            />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Address
                                            </label>
                                            <input
                                                name="address"
                                                type="text"
                                                className="form-control address"
                                                id=""
                                                onkeyup="generateCV()"
                                                placeholder="e.g. 20 rue ampere 77100"
                                            />
                                            <span className="form-text" />
                                        </div>
                                    </div>
                                    <div className="cols-3">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                name="email"
                                                type="text"
                                                className="form-control email"
                                                id=""
                                                onkeyup="generateCV()"
                                                placeholder="e.g. johndoe@gmail.com"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Phone No:
                                            </label>
                                            <input
                                                name="phoneno"
                                                type="text"
                                                className="form-control phoneno"
                                                id=""
                                                onkeyup="generateCV()"
                                                placeholder="e.g. 456-768-798, 567.654.002"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Summary
                                            </label>
                                            <input
                                                name="summary"
                                                type="text"
                                                className="form-control summary"
                                                id=""
                                                onkeyup="generateCV()"
                                                placeholder="e.g. Doe"
                                            />
                                            <span className="form-text" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <input type="submit" />


                            {/* work experience */}

                             <div className="cv-form-blk">
                                <div className="cv-form-row-title">
                                    <h3>work experience</h3>
                                </div>
                                <div className="row-separator repeater">
                                    <div className="repeater" data-repeater-list="group-b">
                                        <div data-repeater-item="">
                                            <div className="cv-form-row cv-form-row-experience">
                                                <div className="cols-3">
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Title
                                                        </label>
                                                        <input
                                                            name="exp_title"
                                                            type="text"
                                                            className="form-control exp_title"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Company / Organization
                                                        </label>
                                                        <input
                                                            name="exp_organization"
                                                            type="text"
                                                            className="form-control exp_organization"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Country
                                                        </label>
                                                        <select name='country' className="form-control" onChange={(e) => handlecountry(e)}>
                                                            <option value=""></option>
                                                            {
                                                                countrydata.map((getcountry, index) => (
                                                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                                                ))
                                                            }

                                                        </select>

                                                        <span className="form-text" />
                                                    </div>





                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            City
                                                        </label>
                                                        <select name='city' className="form-control" onChange={(e) => handlestate(e)}>
                                                            <option value=""></option>
                                                            {
                                                                state.map((getstate, index) => (
                                                                    <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                                                ))
                                                            }

                                                        </select>

                                                        <span className="form-text" />
                                                    </div>
                                                </div>
                                                <div className="cols-3">
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Start Date
                                                        </label>
                                                        <input
                                                            name="exp_start_date"
                                                            type="date"
                                                            className="form-control exp_start_date"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            End Date
                                                        </label>
                                                        <input
                                                            name="exp_end_date"
                                                            type="date"
                                                            className="form-control exp_end_date"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Description
                                                        </label>
                                                        <input
                                                            name="exp_description"
                                                            type="text"
                                                            className="form-control exp_description"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                </div>
                                                <button
                                                    data-repeater-delete=""
                                                    type="button"
                                                    className="repeater-remove-btn"
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        data-repeater-create=""
                                        value="Add"
                                        className="repeater-add-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div> 

                            {/* education */}


                            <div className="cv-form-blk">
                                <div className="cv-form-row-title">
                                    <h3>education</h3>
                                </div>
                                <div className="row-separator repeater">
                                    <div className="repeater" data-repeater-list="group-c">
                                        <div data-repeater-item="">
                                            <div className="cv-form-row cv-form-row-experience">
                                                <div className="cols-3">
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            School
                                                        </label>
                                                        <input
                                                            name="edu_school"
                                                            type="text"
                                                            className="form-control edu_school"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Degree
                                                        </label>
                                                        <input
                                                            name="edu_degree"
                                                            type="text"
                                                            className="form-control edu_degree"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Country
                                                        </label>
                                                        <select name='country' className="form-control" onChange={(e)=>handlecountry(e)}>
                                                            <option value=""></option>
                                                        {
                                                            countrydata.map( (getcountry,index) => (
                                                                <option value={getcountry.country_id} key={index}>{ getcountry.country_name}</option>
                                                            ))
                                                        }

                                                    </select>

                                                        <span className="form-text" />
                                                    </div>

                                                    



                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            City
                                                        </label>
                                                        <select name='city' className="form-control" onChange={(e) => handlestate(e)}>
                                                            <option value=""></option>
                                                        {
                                                            state.map( (getstate,index) => (
                                                                <option value={getstate.state_id} key={index}>{ getstate.state_name}</option>
                                                            ))
                                                        }

                                                    </select>

                                                        <span className="form-text" />
                                                    </div>




                                                    


















                                                </div>
                                                <div className="cols-3">
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Start Date
                                                        </label>
                                                        <input
                                                            name="edu_start_date"
                                                            type="date"
                                                            className="form-control edu_start_date"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            End Date
                                                        </label>
                                                        <input
                                                            name="edu_graduation_date"
                                                            type="date"
                                                            className="form-control edu_graduation_date"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Description
                                                        </label>
                                                        <input
                                                            name="edu_description"
                                                            type="text"
                                                            className="form-control edu_description"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                </div>
                                                <button
                                                    data-repeater-delete=""
                                                    type="button"
                                                    className="repeater-remove-btn"
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        data-repeater-create=""
                                        value="Add"
                                        className="repeater-add-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div> 

                            
                            {/* archivment */}

                            <div className="cv-form-blk">
                                <div className="cv-form-row-title">
                                    <h3>achievements</h3>
                                </div>
                                <div className="row-separator repeater">
                                    <div className="repeater" data-repeater-list="group-a">
                                        <div data-repeater-item="">
                                            <div className="cv-form-row cv-form-row-achievement">
                                                <div className="cols-2">
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Title
                                                        </label>
                                                        <input
                                                            name="achieve_title"
                                                            type="text"
                                                            className="form-control achieve_title"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                            placeholder="e.g. johndoe@gmail.com"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Description
                                                        </label>
                                                        <input
                                                            name="achieve_description"
                                                            type="text"
                                                            className="form-control achieve_description"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                            placeholder="e.g. johndoe@gmail.com"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                </div>
                                                <button
                                                    data-repeater-delete=""
                                                    type="button"
                                                    className="repeater-remove-btn"
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        data-repeater-create=""
                                        value="Add"
                                        className="repeater-add-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div> 

                            

                            {/* languge */}

                            <div className="cv-form-blk">
                                <div className="cv-form-row-title">
                                    <h3>language</h3>
                                </div>
                                <div className="row-separator repeater">
                                    <div className="repeater" data-repeater-list="group-d">
                                        <div data-repeater-item="">
                                            <div className="cv-form-row cv-form-row-experience">
                                                <div className="cols-3">
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Language Name
                                                        </label>
                                                        <input
                                                            name="proj_title"
                                                            type="text"
                                                            className="form-control proj_title"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                    <div className="form-elem">
                                                        <label htmlFor="" className="form-label">
                                                            Level
                                                        </label>
                                                        <input
                                                            name="proj_link"
                                                            type="text"
                                                            className="form-control proj_link"
                                                            id=""
                                                            onkeyup="generateCV()"
                                                        />
                                                        <span className="form-text" />
                                                    </div>
                                                </div>
                                                <button
                                                    data-repeater-delete=""
                                                    type="button"
                                                    className="repeater-remove-btn"
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        data-repeater-create=""
                                        value="Add"
                                        className="repeater-add-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div> 

                            
                            {/* skills */}

                            <div className="cv-form-blk">
                                <div className="cv-form-row-title">
                                    <h3>skills</h3>
                                </div>
                                <div className="row-separator repeater">
                                    <div className="repeater" data-repeater-list="group-e">
                                        <div data-repeater-item="">
                                            <div className="cv-form-row cv-form-row-skills">
                                                <div className="form-elem">
                                                    <label htmlFor="" className="form-label">
                                                        Skill
                                                    </label>
                                                    <input
                                                        name="skill"
                                                        type="text"
                                                        className="form-control skill"
                                                        id=""
                                                        onkeyup="generateCV()"
                                                    />
                                                    <span className="form-text" />
                                                </div>
                                                <button
                                                    data-repeater-delete=""
                                                    type="button"
                                                    className="repeater-remove-btn"
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        data-repeater-create=""
                                        value="Add"
                                        className="repeater-add-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>  

                            

                            {/* social media */}
                            <div className="cv-form-blk">
                                <div className="cv-form-row-title">
                                    <h3>Social </h3>
                                </div>
                                <div className="row-separator repeater">
                                    <div className="repeater" data-repeater-list="group-e">
                                        <div data-repeater-item="">
                                            <div className="cv-form-row cv-form-row-skills">
                                                <div className="form-elem">
                                                    <label htmlFor="" className="form-label">
                                                        name
                                                    </label>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        className="form-control skill"
                                                        id=""
                                                        onkeyup="generateCV()"
                                                    />
                                                    <span className="form-text" />
                                                </div>
                                                <button
                                                    data-repeater-delete=""
                                                    type="button"
                                                    className="repeater-remove-btn"
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        data-repeater-create=""
                                        value="Add"
                                        className="repeater-add-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div> 



                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default WorkPage;
