import Footer from "../../components/footer/Footer";
import "./DashboardPage.css"

const DashboardPage = ()  => {
    return <div className="containerè">
        <div className="container-dashboard">
            <h1>Resume Generator</h1>
            <p>create your own portfolio</p>
            <form>
                <label>Enter your name:
                    <input type="text" />
                </label>
            </form>
        </div>

    <Footer/>
    </div>
}

export default DashboardPage;