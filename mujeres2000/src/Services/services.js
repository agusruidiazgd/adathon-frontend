import axios from 'axios';


const URLBase = 'https://adathon-ms.herokuapp.com';

export const getBalance = async (endPoint, date) => {
    try {
        const res = await axios.post(`${URLBase}/${endPoint}`, date);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getBalance: ${err}`);
    }
}

export const post = async (endPoint, newPost) => {
    try {
        const res = await axios.post(`${URLBase}/${endPoint}`, newPost);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - postVenta: ${err}`);
    }  
}


