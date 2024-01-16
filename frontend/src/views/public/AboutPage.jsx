import Footer from "../../components/footer/Footer";
import "./AboutPage.css";


const AboutPage = () => {
    return (
        <div className="container-about">

            <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container bottomContainer">
                    <div className="allText bottomText">
                        <p className="text-blk headingText">Who we are ?</p>
                        <p className="text-blk subHeadingText">We build to your bespoke</p>
                        <p className="text-blk description">
                            Portfoliomatic revolutionizes portfolio creation, offering unmatched customization, extensive features, and a user-friendly experience. It stands out for its flexibility, providing personalized layouts and interactive elements.

                            Key advantages include being entirely free, removing financial barriers, and streamlining the job search process. Its intuitive interface makes portfolio creation easy, even for those with limited technical skills.

                            Tailor your portfolio for each application by aligning it with job descriptions, highlighting relevant skills, experiences, and projects. Proofread for a polished presentation, reinforcing a professional image.
                        </p>
                        <a>
                            <button className="explore">lets start</button>
                        </a>
                    </div>
                    <div className="videoContainer">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/UMOe0glzPmU?si=JR3EXdMEUoH8IxRD&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>


    );
};


export default AboutPage;