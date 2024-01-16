import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";


import "./InformationPage.css";

const InformationPage = () => {
    return (
        <>
            <div className="info-container">
                <div className="header-page-title">
                    <h1 className="head-creative">
                        Creative landing <br /> page
                    </h1>
                    <p className="paragraph_creative">
                        A creative &amp; modern landing page with lazer
                        <br /> Template&amp; we love make this amaging
                    </p>
                    
                    <Link to="/admin/personal/details" className="btn btn-primary text-uppercase">
                            Create My Resume
                        </Link>
                </div>
                <div className="header-page-image">
                    <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxNAKZmyBqAAnvGhwSVyZAOWAYl7D_-kz5xjD-YBVZX-raEA3A"
                        alt=""
                    />
                </div>
            </div>
                <Footer />

        </>
    )
}

export default InformationPage;