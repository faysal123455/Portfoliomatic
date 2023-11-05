import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./AboutPage.css";


const AboutPage = ()  => {
    return <div className="container_about">
        
        <section className="about">
            <form method="post">
                <input type="text" placeholder="Name" id ="name" autoComplete="off"></input>
                <input type="email" placeholder="Email" id ="email" autoComplete="off"></input>
                <input type="text" placeholder="Subject" id="subject" autoComplete="off"></input>
                <textarea id="message" placeholder="Message" cols="30" rows="30"></textarea>
                <button id="btn">Send</button>
            </form>

        </section>
        <Header/>
        <Footer/>
    </div>
}


export default AboutPage;