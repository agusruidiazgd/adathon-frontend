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

export const getData = async (endPoint) =>{
    try {
        const res = await axios.get(`${URLBase}/${endPoint}`);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getData: ${err}`);
    }
}

// export const getProductos = async (endPoint) =>{
//     try {
//         const res = await axios.get(`${URLBase}/${endPoint}`);
//         return res.data;
//     }catch(err) {
//         throw new Error(`Unhandled - getProducto: ${err}`);
//     }
// }

export const postData = async (endPoint, newPost) => {
    try {
        const res = await axios.post(`${URLBase}/${endPoint}`, newPost);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - postVenta: ${err}`);
    }  
}


// POST
// // /productos
// {   
//     "nombre": "Mochila",
//     "precio": 5000.00,
//     "costoVariable": 1500.00
// }
