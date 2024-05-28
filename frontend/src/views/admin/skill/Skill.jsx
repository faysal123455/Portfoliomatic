import "./Skill.css"
import { json, useParams } from "react-router-dom"
import { createSkill } from '../../../services/api';
import { useState } from 'react';


const Skill = () => {

    const { createdCvId } = useParams();
    console.log(cvIdAsString)
    const cvIdAsString = String(createdCvId);




    // const [skillSections, setSkillSections] = useState([{ id: 1 }]);


    // const addSkillSection = () => {
    //     const newSection = { id: skillSections.length + 1 };
    //     setSkillSections([...skillSections, newSection]);
    // };
    // const removeSkillSection = (id) => {
    //     const updatedSections = skillSections.filter((section) => section.id !== id);
    //     setSkillSections(updatedSections);
    // };


    // const apiURL = import.meta.env.VITE_API_URL;


    // const handleSkillSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);

    //     // Append cv_id to the FormData
    //     formData.append('cv_id', createdCvId);


    //     const requestInfos = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(Object.fromEntries(formData))
    //     };

    //     try {
    //         const response = await fetch(`${apiURL}/skills`, requestInfos);

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }

    //         const responseData = await response.json();
    //         console.log(responseData);
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }

    // };

    return (
        <>
            {/* <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>skills</h3>
                </div>
                <form onSubmit={handleSkillSubmit}>

                    {skillSections.map((section) => (
                        <div className="repeater" data-repeater-list="group-d" key={section.id}>
                            <div data-repeater-item="">
                                <div className="cv-form-row cv-form-row-skill">
                                    <div className="form-elem">
                                        <label htmlFor="" className="form-label">
                                            Skill
                                        </label>
                                        <input
                                            name="name"
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

                    <div className="form-item">
                        <input type="submit" className="send-button" />

                    </div>
                </form>
            </div> */}

        </>
    )
}


export default Skill;