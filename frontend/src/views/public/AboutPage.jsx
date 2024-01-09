import Footer from "../../components/footer/Footer";
import "./AboutPage.css";


const AboutPage = () => {
    return (
        <div className="container-about">

            <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container bottomContainer">
                    <div className="allText bottomText">
                        <p className="text-blk headingText">About</p>
                        <p className="text-blk subHeadingText">We build to your bespoke</p>
                        <p className="text-blk description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
                            pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
                            ullamcorper quis vestibulum ligula elementum ut. Congue in dignissim
                            tincidunt ut dolor eu. Mi, eget posuere vitae sed purus nisl lorem.
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