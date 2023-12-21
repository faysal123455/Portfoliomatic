import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./AboutPage.css";


const AboutPage = ()  => {
    return <section className="container-about">

        <section className="">
            <div className="">
                <div className="ek">
                    <div className="">
                        <div className="">
                            <h3 className="">
                                Welcome To Lorem is the world
                            </h3>
                            <p className="">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. <br />
                                Lorem Ipsum has been the industrys standard dummy text.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="dui">
                    <div className="">
                        <div className="about_header_main">
                            <h4 className="about_heading">
                                Lorem Ipsum is simply dummy text of the printing industry.
                            </h4>
                            <p className="">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old.
                            </p>
                            <p className="">
                                {" "}
                                Richard McClintock, a Latin professor at Hampden-Sydney College in
                                Virginia, looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="img_about">
                            <img
                                src="https://i.ibb.co/qpz1hvM/About-us.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>


                <div className="tin">
                    
                    <div className="three-icon">
                        <div className="about_content_box_all">
                            <div className="about_detail">
                                <div className="about_icon">
                                    <i className="fas fa-pencil-alt" />
                                </div>
                                <h5 className="">
                                    Creative Design
                                </h5>
                                <p className="">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    

                    <div className="three-icon">
                        <div className="about_content_box_all">
                            <div className="about_detail">
                                <div className="about_icon">
                                    <i className="fab fa-angellist" />
                                </div>
                                <h5 className="">
                                    We make Best Result
                                </h5>
                                <p className="">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.{" "}
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="three-icon">
                        <div className="about_content_box_all">
                            <div className="about_detail">
                                <div className="about_icon">
                                    <i className="fas fa-paper-plane" />
                                </div>
                                <h5 className="">
                                    best platform{" "}
                                </h5>
                                <p className="">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.{" "}
                                </p>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </section>



        <Header/>
        <Footer/>
    </section>
}


export default AboutPage;