import "./Contact.css"
// import { json, useParams } from "react-router-dom"
// import { createContact } from '../../../services/api';
// import { useState } from 'react';



const Contact = () => {

    // const [contactSections, setContactSections] = useState([{ id: 1 }]);



    // const addContactSection = () => {
    //     const newSection = { id: contactSections.length + 1 };
    //     setContactSections([...contactSections, newSection]);
    // };
    // const removeContactSection = (id) => {
    //     const updatedSections = contactSections.filter((section) => section.id !== id);
    //     setContactSections(updatedSections);
    // };


    // const apiURL = import.meta.env.VITE_API_URL;

    // const handleContactSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);

        // Append cv_id to the FormData


    //     const requestInfos = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(Object.fromEntries(formData))
    //     };

    //     try {
    //         const response = await fetch(`${apiURL}/languages`, requestInfos);

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


{/* 
            <div className="cv-form-blk">
                <div className="cv-form-row-title">
                    <h3>Contact</h3>
                </div>
                <form onSubmit={handleContactSubmit}>
                    {contactSections.map((section) => (
                        <div className="repeater" data-repeater-list="group-d" key={section.id}>
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
                    >

                    </button>

                    <div className="form-item">
                        <input type="submit" className="send-button" />

                    </div>
                </form>
            </div> */}

        </>
    )


}


export default Contact;