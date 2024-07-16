import dbConnection from "../service/dbconnection.js";

const getCity = async () => {
    const sql = `
    SELECT city.*, CONCAT(city.name, ' - ' , country.name) AS city_country 
    FROM portfoliomatic.city
    JOIN portfoliomatic.country
    ON country.id = city.country_id
    ;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneCity = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.city
    VALUES
    (NULL, :name, :country_id, :cv_id );
    `;

    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getCity, createOneCity };
