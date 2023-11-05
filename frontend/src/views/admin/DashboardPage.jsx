import Footer from "../../components/footer/Footer";
import "./DashboardPage.css"

const DashboardPage = ()  => {
    return <div className="container">
        <div className="container-dashboard">
            <h1>Resume Generator</h1>
            <p>create your own portfolio</p>
        </div>

        <div className="container-info">
            <div className="col-1">
                <h3>personal</h3>

                
            </div>
            <div className="col-2">
                <h3>professional</h3>
            </div>
        </div>
    <Footer/>
    </div>
}

export default DashboardPage;