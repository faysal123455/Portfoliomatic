import dbConnection from "../service/dbconnection.js";

const getLanguage = async () => {
    const sql = `
    SELECT language.*
    FROM portfoliomatic.language;`
    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneLanguage = async (data) => {
    const sql =`
    INSERT INTO portfoliomatic.language
VALUES
    (NULL, 'Spanish','Beginner','1'),
    (NULL, 'English','Advanced','1');`
    
    
    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getLanguage, createOneLanguage };