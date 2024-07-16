import dbConnection from "../service/dbconnection.js";

const getWork = async () => {
    const sql = `
    SELECT work.*
    FROM portfoliomatic.work;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const getWorkByListIds = async (listIds) => {
    const sql = `
    SELECT work.*, city.name AS city, country.name AS country
    FROM portfoliomatic.work
    JOIN portfoliomatic.city
    ON city.id = work.city_id
    JOIN portfoliomatic.country
    ON country.id = city.country_id
    WHERE work.id IN(${listIds});`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneWork = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.work
    VALUES
    (NULL, :company_name, :job_title, :date_start, :date_end, :cv_id, :city_id);
    `;


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getWork, createOneWork, getWorkByListIds };
