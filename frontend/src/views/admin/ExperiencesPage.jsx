import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


import "./ExperiencesPage.css";
import { useEffect, useState } from "react";
import { getInfoOfCvId } from "../../services/api";

const ExperiencesPage = () => {

    const { createdCvId } = useParams();
    console.log(createdCvId)
    const [cv, setCv] = useState([])

    useEffect(() => {
        getInfoOfCvId(createdCvId)
            .then((data) => {
                if (data && data.data) {
                    console.log(data)
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
                        <img
                            className="portait"
                            src="https://www.codeur.com/tuto/wp-content/uploads/2022/01/MG_0110-4-293x300.jpg"
                        />
                        <div className="section">
                            <ul className="infos">
                                <h2>contact</h2>
                                <li>
                                    <i className="icon fas fa-at text-blue" />{" "}
                                    <a href="mailto:contact@pgomba.com">contact@pgomba.com</a>
                                </li>
                                <li>
                                    <i className="icon fas fa-phone text-blue" /> 04 75 53 80 50
                                </li>
                                <li>
                                    <i className="icon fas fa-phone text-blue" /> contact@pgomba.com
                                </li>
                                {/* 
                                <li>
                                    <i className="icon faRightFromBracket " /> hello
                                </li> */}

                            </ul>
                        </div>
{/* 
                        <div className="section">
                            <h2>Skill</h2>
                            <ul className="skills">
                                {cv.map((skill, skillIndex) => (


                                    <li key={skillIndex}>{skill.skillName}</li>
                                ))}
                            </ul>
                        </div> */}



                        <div className="section">
                            <h2>Language</h2>

                            <div className="flex">
                                {cv.map((language, langIndex) => (
                                    <p key={langIndex}>{language.languageName} - {language.languageLevel}
                                    
                                    </p>
                                ))}
                                {/* {cv.map((language, langIndex) => (
                        <p key={langIndex}>{language.languageLevel}</p>
                    ))} */}
                            </div>
                        </div>
                    </div>


                    <div className="right-column">


                        <div className="header">
                            <div className="wave">
                                <h1 className="nom">Pierre Gomba</h1>
                                <p>Freelance Front-end Developer</p>

                                <p className="summary">
                                    Le <strong>Front-end</strong> est une de mes passions : j’aime
                                    intégrer ou imaginer des interfaces modernes, les rendre
                                    responsive et les dynamiser avec des animations élégantes. Mes
                                    deux technos de coeur sont <strong>Angular</strong> et{" "}
                                    <strong>Bootstrap</strong>, que j’utilise depuis plus de 6 ans.
                                    Je suis aussi Fullstack : PHP, MySQL, Doctrine…
                                </p>
                            </div>
                        </div>




                        <div className="content">
                            <div className="section">
                                <h2>
                                    <span className="text-blue">work</span>
                                </h2>
                                <p>
                                    <strong>
                                        2015 <i className="fas fa-long-arrow-alt-right" /> 2021
                                    </strong>
                                    <br />
                                    Fullstack Developer à temps plein chez <em>Webadev SPRL</em>
                                </p>
                                <ul className="experience-list">
                                    <li>
                                        Réalisations de sites web, d’e-shops, d’interfaces et
                                        d’applications web sous Angular et Bootstrap
                                    </li>
                                    <li>
                                        Intégration de templates Photoshop, Illustrator, Sketch,
                                        Figma
                                    </li>
                                    <li>Projets sous npm et Webpack</li>
                                    <li>
                                        Collaboration avec d’autres studios graphique (Studio Debie,
                                        SOL,…)
                                    </li>
                                    <li>Optimisation des performances</li>
                                    <li>
                                        Développement de templates et de modules réutilisables
                                    </li>
                                    <li>
                                        Projets en équipe, utilisation quotidienne de SVN, Git et
                                        Github
                                    </li>
                                </ul>
                            </div>
                            <div className="section">
                                <p>
                                    <strong>2021</strong>
                                    <br />
                                    Freelance en activité
                                </p>
                                <ul className="experience-list">
                                    <li>Freelance Front-end Developer</li>
                                    <li>Unity Developer / Sound Designer</li>
                                </ul>
                            </div>
                            <div className="section">
                                <h2>
                                    <span className="text-blue">&amp; Education</span>
                                </h2>
                                <p>
                                    <strong>
                                        2015 <i className="fas fa-long-arrow-alt-right" /> 2019
                                    </strong>
                                    <br />
                                    <em>Bachelier en Informatique de Gestion</em>, Diplômé,
                                    Institut Saint Laurent
                                </p>
                                <p>
                                    <strong>2015</strong>
                                    <br />
                                    <em>STE-Formations Informatiques</em>, Formation qualifiante
                                    de Web Developer
                                </p>
                                <p>
                                    <strong>
                                        2013 <i className="fas fa-long-arrow-alt-right" /> 2014
                                    </strong>
                                    <br />
                                    <em>Bachelier en Sciences humaines</em>, Haute École de Liège
                                </p>
                            </div>
                            <div className="section">
                                <h2>
                                    <span className="text-blue">archivments</span>
                                </h2>
                                <p>
                                    Permis B, possession d’une voiture
                                    <br />
                                    Animateur Scout pendant 6 ans
                                    <br />
                                    Brevet d’animateur de Centre de Vacances
                                </p>
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
