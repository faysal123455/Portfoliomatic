import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone, faRightFromBracket, faLongArrowAltRight, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

import "./ExperiencesPage.css";
import { useEffect, useState } from "react";
import { getCitys, getInfoOfCvId } from "../../services/api";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { getMonthAndYearFromDate } from '../../services/date';


const ExperiencesPage = () => {
    const { createdCvId } = useParams();
    console.log(createdCvId)
    const [cv, setCv] = useState({})
  

    useEffect(() => {
        getInfoOfCvId(createdCvId)
            .then((data) => {
                if (data && data.data) {
                    console.log(data)
                    console.log('cv');
                    setCv(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
                // Handle the error as needed
            });
    }, [createdCvId]);

    

    return (
        <>
            <section className="real-cv">
                <div className="cv-container">

                    <div className="left-column">
                        {/* <img
                            className="portait"
                            src="https://www.codeur.com/tuto/wp-content/uploads/2022/01/MG_0110-4-293x300.jpg"
                        /> */}
                        <img
                            className="portait"
                        
                            src={ `https://localhost:3000/img/${cv.image}` }
                        />
                        <div className="section">
                            <ul className="infos">
                                <h2>Contact</h2>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} className="text-blue" /> {cv.Telephone}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="text-blue" />
                                    <a href={`mailto:${cv.social_media1}`}> {cv.social_media1}</a>


                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLinkedin} className="text-blue" /> {cv.social_media2}
                                </li>
                            </ul>
                        </div>
                        <div className="section">
                            <h2>Skills</h2>
                            <ul className="skills">
                                {cv.skills && cv.skills.map((skill, skillIndex) => (<li key={skillIndex}>{skill.name}</li>))}
                            </ul>
                        </div>

                        <div className="section">
                            <h2>Languages</h2>
                            <div className="flex">
                                {cv.languages && cv.languages.map((language, langIndex) => <p key={langIndex}>{language.name} - {language.level}</p>)}
                            </div>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="header">
                            <div className="wave">
                                <h1 className="nom">{cv.prenom} {cv.nom}</h1>
                                <p>Freelance Front-end Developer</p>
                                <h6 className="summary">
                                    <p>{cv.goal}</p>
                                </h6>
                            </div>
                        </div>

                        <div className="content">
                            <div className="section">
                                <h2><span className="text-blue">Works</span></h2>
                                {
                                    cv.works && cv.works.map((work, workIndex) => <article key={workIndex}>
                                        <p>
                                            <strong>
                                                {getMonthAndYearFromDate(work.date_start)}

                                                <FontAwesomeIcon icon= {faLongArrowAltRight} />  {getMonthAndYearFromDate(work.date_end)}
                                            </strong>
                                            <br />
                                            {work.job_title} -<em> {work.company_name}</em> -<em> {work.city} </em> -<em> {work.country} </em>
                                        </p>
                                        <ul className="experience-list">
                                            <li>Réalisations de sites web, d’e-shops, d’interfaces et d’applications web</li>
                                        
                                        </ul>
                                    </article>)
                                }


                            </div>

                            <div className="section">
                                <h2><span className="text-blue">Educations</span></h2>
                                {cv.educations && cv.educations.map((education, educationIndex) => <article key={educationIndex}>
                                    <p>
                                        <strong>
                                            {getMonthAndYearFromDate(education.date_start)}

                                            <FontAwesomeIcon icon={faLongArrowAltRight} />
                                            {getMonthAndYearFromDate(education.date_end)}
                                        </strong>
                                        <br />
                                        {education.name} -<em> {education.city} </em> -<em> {education.country} </em> - <em> {education.details}</em>

                                

                                    </p>
                                    <ul>
                                        <li>Réalisations de sites web, d’e-shops, d’interfaces et d’applications web</li>

</ul>

                                </article>)
                                }


                            </div>
                            <div className="section">
                                <h2><span className="text-blue">Achievements</span></h2>
                                {/* <p>
                                    Permis B, possession d’une voiture
                                    <br />
                                    Animateur Scout pendant 6 ans
                                    <br />
                                    Brevet d’animateur de Centre de Vacances
                                </p> */}

                                {cv.archivments && cv.archivments.map((archivment, archivmentIndex) => (
                                    <li key={archivmentIndex}>{archivment.name} - {archivment.recognitation}</li> 
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ExperiencesPage;
