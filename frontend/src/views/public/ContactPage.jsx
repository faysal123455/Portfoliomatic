import Footer from "../../components/footer/Footer";
import { useState } from "react";
import "./ContactPage.css";

export default function MyContact() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const baseUrl = "http://localhost:3000/getbills";

    const sendEmail = async () => {
        let dataSend = {
            email: email,
            subject: subject,
            message: message,
        };

        const res = await fetch(`${baseUrl}/getbills/email/sendEmail`, {
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log(res);
                if (res.status > 199 && res.status < 300) {
                    alert("Send Successfully !");
                }
            });
    };


    return (
        <div className="container_contact">
            <section className="contact">

                <form onSubmit={sendEmail} className="form-contact">
                    {/* Input fields and button */}
                    {/* <input type="email" placeholder="Email" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />

                    <input type="text" placeholder="Subject" id="subject" autoComplete="off" onChange={(e) => setSubject(e.target.value)} />

                    <textarea id="message" placeholder="Message" cols="30" rows="30" onChange={(e) => setMessage(e.target.value)}></textarea>
                    
                    <button onClick={() => sendEmail()} id="btn">Send Email
                    </button> */}

                </form>

                <section className="contact">
                    <div className="form-box">
                        <h2>Contact Us</h2>
                        <form action="">
                            <div className="form-item">
                                <label htmlFor="name">Your name:</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="email">Your email:</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="message">Your message:</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols={30}
                                    rows={7}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="form-item">
                                <button type="submit" className="send-button">Send contact</button>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
}