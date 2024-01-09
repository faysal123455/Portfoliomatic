import React, { useState } from 'react';
import Footer from "../../components/footer/Footer";
import "./AdminPage.css";

const AdminPage = () => {
    const [experienceSections, setExperienceSections] = useState([{ id: 1 }]);
    const [educationSections, setEducationSections] = useState([{ id: 1 }]);
    const [achievementSections, setAchievementSections] = useState([{ id: 1 }]);
    const [languageSections, setLanguageSections] = useState([{ id: 1 }]);
    const [skillSections, setSkillSections] = useState([{ id: 1 }]);


    const addExperienceSection = () => {
        const newSection = { id: experienceSections.length + 1 };
        setExperienceSections([...experienceSections, newSection]);
    };
    const removeExperienceSection = (id) => {
        const updatedSections = experienceSections.filter((section) => section.id !== id);
        setExperienceSections(updatedSections);
    };


    const addEducationSection = () => {
        const newSection = { id: educationSections.length + 1 };
        setEducationSections([...educationSections, newSection]);
    };
    const removeEducationSection = (id) => {
        const updatedSections = educationSections.filter((section) => section.id !== id);
        setEducationSections(updatedSections);
    };


    const addAchievementSection = () => {
        const newSection = { id: achievementSections.length + 1 };
        setAchievementSections([...achievementSections, newSection]);
    };
    const removeAchievementSection = (id) => {
        const updatedSections = achievementSections.filter((section) => section.id !== id);
        setAchievementSections(updatedSections);
    };


    const addLanguageSection = () => {
        const newSection = { id: languageSections.length + 1 };
        setLanguageSections([...languageSections, newSection]);
    };
    const removeLanguageSection = (id) => {
        const updatedSections = languageSections.filter((section) => section.id !== id);
        setLanguageSections(updatedSections);
    };
    

    const addSkillSection = () => {
        const newSection = { id: skillSections.length + 1 };
        setSkillSections([...skillSections, newSection]);
    };
    const removeSkillSection = (id) => {
        const updatedSections = skillSections.filter((section) => section.id !== id);
        setSkillSections(updatedSections);
    };
    







    
    return (
        <>
            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>Work experience</h3>
                </div>
                <form>
                    {experienceSections.map((section) => (
                        <div className="repeater" data-repeater-list="group-b" key={section.id}>
                            <div data-repeater-item="">
                                <div className="cv-form-row cv-form-row-experience">
                                    <div className="cols-3">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Company Name
                                            </label>
                                            <input
                                                name="exp_organization"
                                                type="text"
                                                className="form-control exp_organization"
                                                id=""
                                            />
                                            <span className="form-text" />
                                        </div>
                                    </div>
                                    <div className="cols-3">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Date Start
                                            </label>
                                            <input
                                                name="exp_start_date"
                                                type="date"
                                                className="form-control exp_start_date"
                                                id=""
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Date End
                                            </label>
                                            <input
                                                name="exp_end_date"
                                                type="date"
                                                className="form-control exp_end_date"
                                                id=""
                                            />
                                            <span className="form-text" />
                                        </div>
                                        
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Country
                                        </label>
                                        <input
                                            name="exp_organization"
                                            type="text"
                                            className="form-control exp_organization"
                                            id=""
                                        />
                                        <span className="form-text" />
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            City
                                        </label>
                                        <input
                                            name="exp_organization"
                                            type="text"
                                            className="form-control exp_organization"
                                            id=""
                                        />
                                        <span className="form-text" />
                                    </div>
                                    <button
                                        data-repeater-delete=""
                                        type="button"
                                        className="repeater-remove-btn"
                                        onClick={() => removeExperienceSection(section.id)}>-</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        type="button"
                        data-repeater-create=""
                        value="Add"
                        className="repeater-add-btn"
                        onClick={addExperienceSection}
                    >
                        +
                    </button>

                    <div className="submit-button">
                        <input type="submit" className="button" />
                    </div>

                </form>
            </div>

        
            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>education</h3>
                </div>
            <form>
                {educationSections.map((section) => (
                    <div className="repeater" data-repeater-list="group-c" key={section.id}>
                        <div data-repeater-item="">
                            <div className="cv-form-row cv-form-row-experience">
                                <div className="cols-3">
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            School Name
                                        </label>
                                        <input
                                            name="edu_school"
                                            type="text"
                                            className="form-control edu_school"
                                            id=""
                                        />
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
                                        />
                                        <span className="form-text" />
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            End Date
                                        </label>
                                        <input
                                            name="edu_end_date"
                                            type="date"
                                            className="form-control edu_end_date"
                                            id=""
                                        />
                                        <span className="form-text" />
                                    </div>
                                </div>
                                <div className="form-elem">
                                    <label htmlFor="" className="form-label">
                                        Country
                                    </label>
                                    <input
                                        name="edu_country"
                                        type="text"
                                        className="form-control edu_country"
                                        id=""
                                    />
                                    <span className="form-text" />
                                </div>
                                <div className="form-elem">
                                    <label htmlFor="" className="form-label">
                                        City
                                    </label>
                                    <input
                                        name="edu_city"
                                        type="text"
                                        className="form-control edu_city"
                                        id=""
                                    />
                                    <span className="form-text" />
                                </div>
                                <button
                                    data-repeater-delete=""
                                    type="button"
                                    className="repeater-remove-btn"
                                    onClick={() => removeEducationSection(section.id)}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    data-repeater-create=""
                    value="Add"
                    className="repeater-add-btn"
                    onClick={addEducationSection}
                >
                    +
                </button>

                <div className="submit-button">
                    <input type="submit" className="button" />
                </div>
            </form>
            </div>


            
            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>achievement</h3>
                </div>
                <form>
                    {achievementSections.map((section) => (
                        <div className="repeater" data-repeater-list="group-d" key={section.id}>
                            <div data-repeater-item="">
                                <div className="cv-form-row cv-form-row-achievement">
                                    <div className="cols-2">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                name="achieve_title"
                                                type="text"
                                                className="form-control achieve_title"
                                                id=""
                                                placeholder="e.g. johndoe@gmail.com"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Recoginition
                                            </label>
                                            <input
                                                name="achieve_description"
                                                type="text"
                                                className="form-control achieve_description"
                                                id=""
                                                placeholder="e.g. johndoe@gmail.com"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <button
                                            data-repeater-delete=""
                                            type="button"
                                            className="repeater-remove-btn"
                                            onClick={() => removeAchievementSection(section.id)}
                                        >
                                            -
                                        </button>



                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                ))}
                    <button
                        type="button"
                        data-repeater-create=""
                        value="Add"
                        className="repeater-add-btn"
                        onClick={addAchievementSection}
                    >
                        +
                    </button>

                    <div className="submit-button">
                        <input type="submit" className="button" />
                    </div>
                </form>
            </div>


            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>language</h3>
                </div>
                <form>
                    {languageSections.map((section) => (
                        <div className="repeater" data-repeater-list="group-d" key={section.id}>
                            <div data-repeater-item="">
                                <div className="cv-form-row cv-form-row-language">
                                    <div className="cols-3">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                name="proj_title"
                                                type="text"
                                                className="form-control proj_title"
                                                id=""
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
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <button
                                            data-repeater-delete=""
                                            type="button"
                                            className="repeater-remove-btn"
                                            onClick={() => removeLanguageSection(section.id)}
                                        >
                                            -
                                        </button>




                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                    <button
                        type="button"
                        data-repeater-create=""
                        value="Add"
                        className="repeater-add-btn"
                        onClick={addLanguageSection}
                    >
                        +
                    </button>

                    <div className="submit-button">
                        <input type="submit" className="button" />
                    </div>
                </form>
            </div>


            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>skills</h3>
                </div>
                <form>
                    {skillSections.map((section) => (
                        <div className="repeater" data-repeater-list="group-d" key={section.id}>
                            <div data-repeater-item="">
                                <div className="cv-form-row cv-form-row-skill"> 
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Skill
                                        </label>
                                        <input
                                            name="skill"
                                            type="text"
                                            className="form-control skill"
                                            id=""
                                        />
                                        <span className="form-text" />
                                    </div>

                                    <button
                                        data-repeater-delete=""
                                        type="button"
                                        className="repeater-remove-btn"
                                        onClick={() => removeSkillSection(section.id)}
                                    >
                                        -
                                    </button>




                                </div>
                            </div>
                        </div>

                    ))}


                    <button
                        type="button"
                        data-repeater-create=""
                        value="Add"
                        className="repeater-add-btn"
                        onClick={addSkillSection}
                    >
                        +
                    </button>

                    <div className="submit-button">
                        <input type="submit" className="button" />
                    </div>
                </form>
            </div>





            <Footer />
        </>
    );
};

export default AdminPage;
