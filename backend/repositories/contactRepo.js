import dbConnection from "../service/dbconnection.js";

const getContact = async () => {
    const sql = `
    SELECT contact.*
    FROM portfoliomatic.contact;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const getContactByListIds = async (listIds) => {
    const sql = `
    SELECT contact.*
    FROM portfoliomatic.contact
    WHERE contact.id IN(${listIds});`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneContact = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.contact
    VALUES
    (NULL, :Telephone, :social_media1, :social_media2, :cv_id );
    `;


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export { getContact, createOneContact, getContactByListIds };
