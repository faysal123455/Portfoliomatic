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

const getEducationByListIds = async (listIds) => {
    const sql = `
    SELECT education.*, city.name AS city, country.name AS country
    FROM portfoliomatic.education
    JOIN portfoliomatic.city
    ON city.id = education.city_id
    JOIN portfoliomatic.country
    ON country.id = city.country_id
    WHERE education.id IN(${listIds});`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneEducation = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.education
    VALUES
        (NULL, :name, :date_start, :date_end, :details, :cv_id, :city_id );
        `;
    
    
    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getEducation, createOneEducation, getEducationByListIds };
