import Footer from "../../components/footer/Footer";
import { useState } from "react";

import { createPersonalInformations } from "../../services/api";

import "./WorkPage.css";
import countrydata from "./Countrydata.json";


const WorkPage = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);


        createPersonalInformations(formData);

        console.log(formData);

        // navigate('/login')
    }

    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');
    

        const handlecountry = (e) => {
            const getcountryId = e.target.value;
        

            const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
            setState(getStatedata);
            console.log(getcountryId);
    }


    const handlestate = (e) => {
        const stateid = e.target.value;
        console.log(stateid);
        setStateid(stateid);
    }

    
    return (
        <>
            <section id="about-sc">
                hello i am work
            </section>

            <Footer />
        </>
    );
};

export default WorkPage;
