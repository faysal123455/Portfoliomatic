import dbConnection from "../service/dbconnection.js";

const getEducation = async () => {
    const sql = `
    SELECT education.*
    FROM portfoliomatic.education;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};


const createOneEducation = async (data) => {
    const sql =`
    INSERT INTO portfoliomatic.education
    VALUES
        (NULL, 'simplon university', 'New York City','06-07-22', '01-01-2024','Diploma in Hospitality Management','1');`
    
    
    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getEducation, createOneEducation };