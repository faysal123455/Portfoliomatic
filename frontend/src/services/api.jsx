import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const apiURL = import.meta.env.VITE_API_URL;


const createUser = async (data) => {
    const requestInfos = new Request(`${apiURL}/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();

    // console.log(data);
}


const loginUser = async (data) => {



    const requestInfos = new Request(`${apiURL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();


    return response;


}



const createPersonalInformations = async (data) => {
    const requestInfos = new Request(`${apiURL}/personalinfos`, {
        method: 'POST',
        body: data,
    });

    const request = await fetch(requestInfos);
    const response = await request.json();
    return response;
}



export { createUser, loginUser, createPersonalInformations }