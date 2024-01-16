import Footer from "../../components/footer/Footer";
import "./HomePage.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from 'react';


import logo from '../../assets/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b.svg';
import one from '../../assets/feature-1-edf4481d69166ac81917d1e40e6597c8d61aa970ad44367ce78049bf830fbda5.svg';
import two from '../../assets/feature-2-a7a471bd973c02a55d1b3f8aff578cd3c9a4c5ac4fc74423d94ecc04aef3492b.svg';
import three from '../../assets/feature-3-4e87a82f83e260488c36f8105e26f439fdc3ee5009372bb5e12d9421f32eabdd.svg';

const HomePage = () => {

    const [part, setPart] = useState('');

    useEffect(() => {
        const words = ['Less than 15 min', 'Choose from our professional CV templates.', 'Download in PDF format', 'A selection of professional templates', 'Your CV will impress!', 'Try for free...'];
        let i = 0;
        let offset = 0;
        const len = words.length;
        let forwards = true;
        let skip_count = 0;
        const skip_delay = 15;
        const speed = 70;

        const wordflick = () => {
            setInterval(() => {
                if (forwards) {
                    if (offset >= words[i].length) {
                        ++skip_count;
                        if (skip_count === skip_delay) {
                            forwards = false;
                            skip_count = 0;
                        }
                    }
                } else {
                    if (offset === 0) {
                        forwards = true;
                        i++;
                        offset = 0;
                        if (i >= len) {
                            i = 0;
                        }
                    }
                }
                const newPart = words[i].substr(0, offset);
                if (skip_count === 0) {
                    if (forwards) {
                        offset++;
                    } else {
                        offset--;
                    }
                }
                setPart(newPart);
            }, speed);
        };

        wordflick();
    }, []);


    return <>
        <div className="container-home">

            <header className="headline-h" id="headline-h">

                <div className="">

                    <div className="header-content1">

                        <h1 className="big-title">{part}

                        </h1>
                        {/* <div className="word">{part}</div> */}
                        <p className="for-free">
                            Use professional field-tested resume templates that follow that exact
                            resume rules employers look for. Easy to use and done within minutes
                            - try now for free!
                        </p>
                        <Link to="/login" className="btn btn-primary text-uppercase">
                            Create My Resume
                        </Link>

                    </div>
                </div>
            </header>



            <div className="section-one">
                <div className="container">
                    <div className="section-one-content">
                        <div className="section-one-l">
                            <img src={logo} alt="" />
                        </div>
                        <div className="section-one-r text-center">
                            <h2 className="lg-title">Use the best resume maker as your guide!</h2>
                            <p className="text">
                                Getting that dream job can seem like an impossible task. We are here
                                to change that. Give yourself a real advantage with the best online
                                resume maker: created by experts, imporved by data, trusted by
                                millions of professionals.
                            </p>
                            <div className="btn-group">
                                <a href="resume.html" className="btn btn-primary text-uppercase">
                                    create my resume
                                </a>
                                <a href="https://www.youtube.com/watch?v=mzvfCPtuWT4" className="btn btn-secondary text-uppercase">
                                    watch video
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className="section-two bg-bright">
                <div className="container">
                    <div className="section-two-content">
                        <div className="section-items">
                            <div className="section-item">
                                <div className="section-item-icon">
                                    <img src={one} alt="" />
                                </div>
                                <h5 className="section-item-title">
                                    Make a resume that wins interviews!
                                </h5>
                                <p className="text">
                                    Use our resume maker with its advanced creation tools to tell
                                    professional story that engages recruiters, hiring managers and
                                    even CEOs.
                                </p>
                            </div>
                            <div className="section-item">
                                <div className="section-item-icon">
                                    <img src={two} alt="" />
                                </div>
                                <h5 className="section-item-title">Resume writing made easy!</h5>
                                <p className="text">
                                    Resume writing has never been this effortless. Pre-generated text,
                                    visual designs and more - all already integrated into the resume
                                    maker. Just fill in your details.
                                </p>
                            </div>
                            <div className="section-item">
                                <div className="section-item-icon">
                                    <img src={three} alt="" />
                                </div>
                                <h5 className="section-item-title">
                                    A recruiter-tested CV maker tool
                                </h5>
                                <p className="text">
                                    Our resume builder and its pre-generated content are tested by
                                    recruiters and IT experts. We help your CV become truly
                                    competitive in the hiring process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>

}

export default HomePage;