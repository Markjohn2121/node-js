const connection = require("../database/connection");


module.exports = async(username, password) => {
    try {

        const query = `SELECT * FROM profile WHERE username = ` +
            `'${username}' ` +
            `AND ` +
            `userpassword = ` + `'${password}'`

     const confirm  = await connection(query);
       return confirm;  

    } catch (error) {
        console.log("cacth false");
        return false;
    }






}