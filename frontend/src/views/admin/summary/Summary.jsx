import "./Summary.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getInfoOfCvId } from "../../../services/api";

const Summary = () => {

    const { createdCvId } = useParams();
    console.log(createdCvId)
    const [cv, setCv] = useState([])

    useEffect(() => {
        getInfoOfCvId(createdCvId)
            .then((data) => {
                if (data && data.data) {
                    console.log(data)
                    setCv(data.data);
                }
            })
            .catch((error) => {
                console.error(error);
                // Handle the error as needed
            });
    }, [createdCvId]);

    return (
        <>




        </>
    )


}


export default Summary;