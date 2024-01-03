import dbConnection from "../service/dbconnection.js";



const createOneGetbill = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.getbill
    VALUES
        (NULL, :name, :email, :message );
        `;

    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export default createOneGetbill;