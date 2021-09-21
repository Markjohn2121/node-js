const connection = require("../database/connection");


module.exports = async(username, password) => {
    try {

        const query = `SELECT * FROM profile WHERE username = ` +
            `'${username}' ` +
            `AND ` +
            `userpassword = ` + `'${password}'`

        await connection(query, (error, results) => {

            if (results.length > 0) {
                return true;
            } else {
                return false;
            }



        });


    } catch (error) {
        console.log("cacth false");
        return false;
    }






}