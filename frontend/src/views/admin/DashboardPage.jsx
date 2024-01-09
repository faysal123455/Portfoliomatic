import Footer from "../../components/footer/Footer";
import "./DashboardPage.css"

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { createCv } from "../../services/api";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user)
    const [createdCvId, setCreatedCvId] = useState(null);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("user_id", user.id);


        try {
            const response = await createCv(formData);


            console.log(response)
            // Supposons que la réponse contienne un champ 'cvId'
            const data = response.data;

            setCreatedCvId(data.insertId);

            console.log("CV créé avec l'ID:", data.insertId);
        } catch (error) {
            console.error("Erreur lors de la création du CV:", error);
        }



        // console.log(formData);

        // navigate('/login')
    }
    useEffect(() => {
        console.log(createdCvId);
        // Perform any additional actions here after createdCvId is updated

    }, [createdCvId]);
    console.log(createdCvId)
    // console.log(user);
    navigate(`/admin/test/${createdCvId}`);
    // navigate('/admin/test/${createdCvId}')
    // email:"cat@gmail.com"
    // firstname:"cat"
    // id
    // :
    // 21
    // lastname:"dog"

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
                                                name="nom"
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
                                                name="prenom"
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
                                        {/* <div className="form-elem">
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
                                        </div> */}
                                    </div>
                                    {/* <div className="cols-3">
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
                                    </div> */}
                                </div>
                            </div>


                            <input type="submit" />


                        </form>
                    </div>
                </div>
            </section>
        </>
    )

}

export default DashboardPage;