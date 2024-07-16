import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const apiURL = import.meta.env.VITE_API_URL;


const createUser = async (data) => {
    console.log(data)
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



const createLanguage = async (data) => {
    console.log(data)
    const requestInfos = new Request(`${apiURL}/languages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();
    console.log(response)

    // console.log(data);
}

const createSkill = async (data) => {
    console.log(data)
    const requestInfos = new Request(`${apiURL}/skills`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();
    console.log(response)

    // console.log(data);
}

const createContact = async (data) => {
    console.log(data)
    const requestInfos = new Request(`${apiURL}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();
    console.log(response)

    // console.log(data);
}

const createWork = async (data) => {
    console.log(data)
    const requestInfos = new Request(`${apiURL}/works`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();
    console.log(response)

    // console.log(data);
}

const createEducation = async (data) => {
    console.log(data)
    const requestInfos = new Request(`${apiURL}/educations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();
    console.log(response)

    // console.log(data);
}

const createArchivment = async (data) => {
    console.log(data)
    const requestInfos = new Request(`${apiURL}/archivments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();
    console.log(response)

    // console.log(data);
}


const createSummary = async (data) => {
    console.log(data)
    const requestInfos = new Request(`${apiURL}/summarys`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();
    console.log(response)

    // console.log(data);
}








export async function getInfoOfCvId(createdCvId) {
    // const { user, setUser } = useContext(UserContext);
    // console.log(user)
    const URL = `${ apiURL }/cvs/${createdCvId}`;
    console.log(URL)
    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des cours : ${ req.status }`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des cours : ${ error.message }`);
    }
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


export async function createCv(data) {

    const URL = `${ apiURL }/cvs`;
    try {
        const requestInfos = new Request(URL, {
            method: "POST",
            body: data,
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error();
        }

        const res = await req.json();
        console.log(res)
        return res;
        
    } catch (error) {
        throw new Error();
    }
}


export async function getCitys() {
    // const { user, setUser } = useContext(UserContext);
    // console.log(user)
    const URL = `${apiURL}/citys`;
    console.log(URL)
    try {
        const requestInfos = new Request(URL, {
            method: "get",
        });

        const req = await fetch(requestInfos);

        if (!req.ok) {
            throw new Error(`Erreur lors de la récupération des villes : ${req.status}`);
        }

        const res = await req.json();
        return res;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des villes : ${error.message}`);
    }
}


export { createUser, createLanguage, createSkill, createContact, createWork, createEducation, createArchivment, createSummary, loginUser, createPersonalInformations }