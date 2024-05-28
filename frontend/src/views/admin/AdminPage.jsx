import "./AdminPage.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import { json, useParams } from "react-router-dom";
import { createLanguage } from "../../services/api";

import Skill from "./skill/Skill";

import { Link } from "react-router-dom";

const AdminPage = () => {
    const { createdCvId } = useParams();
    const cvIdAsString = String(createdCvId);
    console.log(cvIdAsString);

    const [contactSections, setContactSections] = useState([{ id: 1 }]);
    const [experienceSections, setExperienceSections] = useState([{ id: 1 }]);
    const [educationSections, setEducationSections] = useState([{ id: 1 }]);
    const [achievementSections, setAchievementSections] = useState([{ id: 1 }]);
    const [languageSections, setLanguageSections] = useState([{ id: 1 }]);
    const [summarySections, setSummarySections] = useState([{ id: 1 }]);

    const addContactSection = () => {
        const newSection = { id: contactSections.length + 1 };
        setContactSections([...contactSections, newSection]);
    };
    const removeContactSection = (id) => {
        const updatedSections = contactSections.filter(
            (section) => section.id !== id
        );
        setContactSections(updatedSections);
    };

    const addExperienceSection = () => {
        const newSection = { id: experienceSections.length + 1 };
        setExperienceSections([...experienceSections, newSection]);
    };
    const removeExperienceSection = (id) => {
        const updatedSections = experienceSections.filter(
            (section) => section.id !== id
        );
        setExperienceSections(updatedSections);
    };

    const addEducationSection = () => {
        const newSection = { id: educationSections.length + 1 };
        setEducationSections([...educationSections, newSection]);
    };
    const removeEducationSection = (id) => {
        const updatedSections = educationSections.filter(
            (section) => section.id !== id
        );
        setEducationSections(updatedSections);
    };

    const addAchievementSection = () => {
        const newSection = { id: achievementSections.length + 1 };
        setAchievementSections([...achievementSections, newSection]);
    };
    const removeAchievementSection = (id) => {
        const updatedSections = achievementSections.filter(
            (section) => section.id !== id
        );
        setAchievementSections(updatedSections);
    };

    const addLanguageSection = () => {
        const newSection = { id: languageSections.length + 1 };
        setLanguageSections([...languageSections, newSection]);
    };
    const removeLanguageSection = (id) => {
        const updatedSections = languageSections.filter(
            (section) => section.id !== id
        );
        setLanguageSections(updatedSections);
    };

    const addSummarySection = () => {
        const newSection = { id: summarySections.length + 1 };
        setSummarySections([...summarySections, newSection]);
    };
    const removeSummarySection = (id) => {
        const updatedSections = summarySections.filter(
            (section) => section.id !== id
        );
        setSummarySections(updatedSections);
    };

    const apiURL = import.meta.env.VITE_API_URL;

    const handleLanguageSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // Append cv_id to the FormData

        const requestInfos = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(formData)),
        };

        try {
            const response = await fetch(`${apiURL}/languages`, requestInfos);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const handleSummarySubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // Append cv_id to the FormData

        const requestInfos = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(formData)),
        };

        try {
            const response = await fetch(`${apiURL}/summarys`, requestInfos);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <>
            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>language</h3>
                </div>
                <form onSubmit={handleLanguageSubmit}>
                    {languageSections.map((section) => (
                        <div
                            className="repeater"
                            data-repeater-list="group-d"
                            key={section.id}
                        >
                            <div data-repeater-item="">
                                <div className="cv-form-row cv-form-row-language">
                                    <div className="cols-2">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                CV ID
                                            </label>
                                            <input
                                                name="cv_id"
                                                type="text"
                                                className="form-control proj_title"
                                                defaultValue={createdCvId} // Set the cv_id directly
                                                readOnly // To make it read-only in case you don't want users to modify it
                                            />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control proj_title"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Level
                                            </label>
                                            <input
                                                name="level"
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
                    ></button>

                    <div className="form-item">
                        <button type="submit" className="send-button">
                            send
                        </button>
                    </div>
                </form>
            </div>

            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>Summary</h3>
                </div>
                <form onSubmit={handleSummarySubmit}>
                    {summarySections.map((section) => (
                        <div
                            className="repeater"
                            data-repeater-list="group-d"
                            key={section.id}
                        >
                            <div data-repeater-item="">
                                <div className="cv-form-row cv-form-row-summary">
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            CV ID
                                        </label>
                                        <input
                                            name="cv_id"
                                            type="text"
                                            className="form-control proj_title"
                                            defaultValue={createdCvId} // Set the cv_id directly
                                            readOnly // To make it read-only in case you don't want users to modify it
                                        />
                                    </div>
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Goal
                                        </label>
                                        <input
                                            name="goal"
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
                                        onClick={() => removeSummarySection(section.id)}
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* 
                    <button
                        type="button"
                        data-repeater-create=""
                        value="Add"
                        className="repeater-add-btn"
                        onClick={addSummarySection}
                    >
                        +
                    </button> */}

                    <div className="form-item">
                        <button type="submit" className="send-button">
                            Send
                        </button>
                    </div>
                </form>
            </div>

            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>Contact</h3>
                </div>
                <form>
                    {contactSections.map((section) => (
                        <div
                            className="repeater"
                            data-repeater-list="group-d"
                            key={section.id}
                        >
                            <div data-repeater-item="">
                                <div className="cv-form-row cv-form-row-contact">
                                    <div className="cols-2">
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Telephone
                                            </label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control proj_title"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Social Media
                                            </label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control proj_title"
                                            />
                                            <span className="form-text" />
                                        </div>
                                        <div className="form-elem">
                                            <label htmlFor="" className="form-label">
                                                Social Media
                                            </label>
                                            <input
                                                name="level"
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
                                            onClick={() => removeContactSection(section.id)}
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
                        onClick={addContactSection}
                    ></button>

                    <div className="form-item">
                        <input type="submit" className="send-button" />
                    </div>
                </form>
            </div>

            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>Work experience</h3>
                </div>
                <form>
                    {experienceSections.map((section) => (
                        <div
                            className="repeater"
                            data-repeater-list="group-b"
                            key={section.id}
                        >
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
                                        onClick={() => removeExperienceSection(section.id)}
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
                        onClick={addExperienceSection}
                    >
                        +
                    </button>

                    <div className="form-item">
                        <button type="submit" className="send-button">
                            Send
                        </button>
                    </div>
                </form>
            </div>

            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>education</h3>
                </div>
                <form>
                    {educationSections.map((section) => (
                        <div
                            className="repeater"
                            data-repeater-list="group-c"
                            key={section.id}
                        >
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
                                            details
                                        </label>
                                        <input
                                            name="details"
                                            type="text"
                                            className="form-control edu_country"
                                            id=""
                                        />
                                        <span className="form-text" />
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

                    <div className="form-item">
                        <button type="submit" className="send-button">
                            Send
                        </button>
                    </div>
                </form>
            </div>

            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>achievement</h3>
                </div>
                <form>
                    {achievementSections.map((section) => (
                        <div
                            className="repeater"
                            data-repeater-list="group-d"
                            key={section.id}
                        >
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

                    <div className="form-item">
                        <button type="submit" className="send-button">
                            Send
                        </button>
                    </div>
                </form>
            </div>

            <Link
                to={`/admin/template/${createdCvId}`}
                className="btn btn-primary text-uppercase"
            >
                go template
            </Link>
            <Footer />
        </>
    );
};

export default AdminPage;
