import dbConnection from "../service/dbconnection.js";



const createOnePersonalInfos = async (data) => {

    /*
        {
        firstname: 'Faysal',
        lastname: 'SARKER',
        designation: 'dessss',
        address: 'aadre',
        email: 'faysal.sarker@pernod-ricard.com',
        phoneno: '0662064083',
        summary: 'sssdummm',
        image: '7e846f133300f514e637025f9d7540f4.png'
        }
    */
    const sql = `
    INSERT INTO portfoliomatic.work
    VALUES
    (NULL, 'Pernod Ricard', 'paris','14-01-23', '01-01-2024','Project Manager','1');`


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { createOnePersonalInfos };
