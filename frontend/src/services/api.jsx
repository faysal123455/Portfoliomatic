import { useNavigate } from "react-router-dom";

const createUser = async (data) => {
    const requestInfos = new Request('https://localhost:3000/api/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const request = await fetch(requestInfos);
    const response = await request.json();

    console.log(response);
}


const loginUser = async (data) => {
   
    const requestInfos = new Request('https://localhost:3000/api/users/login', {
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

export { createUser, loginUser }