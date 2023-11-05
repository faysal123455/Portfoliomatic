import dbConnection from "../service/dbconnection.js";

const getSummary = async () => {
    const sql = `
    SELECT summary.*
    FROM portfoliomatic.summary;`

    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
};

const createOneSummary = async (data) => {
    const sql = `
    INSERT INTO portfoliomatic.summary
    VALUES
        (NULL, 'Highly motivated [Job Title] with [X] years of experience.
        Skilled in [Key Skills]. Proven track record of [Notable Achievements].
        Seeking new challenges to drive success in a dynamic organization.','1'),
        (NULL, 'Experienced [Job Title] with expertise in [Key Skills]. Proven success
        in [Achievements]. A dedicated professional
        seeking opportunities to make a meaningful impact and drive results.','1');`


    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;

    } catch (error) {
        return error;
    }
};

export {
    getSummary, createOneSummary
};