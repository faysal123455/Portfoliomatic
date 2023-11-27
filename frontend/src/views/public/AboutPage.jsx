import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./AboutPage.css";


const AboutPage = ()  => {
    return <section className="container-about">
        <section className="info-about">
            <section className="slider-container about">
                <section className="full">
                    <img src="https://www.presse-tribune.fr/rep/rep_article/20230918142736.jpeg" />
                    <figcaption>
                        <span>
                            About Bibis
                        </span>
                    </figcaption>
                </section>
            </section>

            <section className="about-content">
                <section className="about-standfirst">
                    <section>
                    </section>
                    <p>Bibis is a cosy neighbourhood cafe serving</p>
                    <p>breakfast, lunch and brunch at the weekends. The</p>
                    <p>ever-changing and evolving menus are driven by</p>
                    <p>creatiity, innoation and the use of prime</p>
                    <p>produce from Ireland and abraod. Chef and owner</p>
                    <p>Maisha Lenehan, working with her brother Geoff,</p>
                    <p>have combined their individual skills to create a</p>
                    <p>unique dining experience in the heart of Dublin 8.</p>
                </section>

                <section className="about-img">
                    <img src="https://www.goskills.com/blobs/blogs/460/5aa2e571-4597-48f2-8045-37013ee9de5d_lossy.webp" />
                </section>
            </section>
        </section>
        <Header/>
        <Footer/>
    </section>
}


export default AboutPage;