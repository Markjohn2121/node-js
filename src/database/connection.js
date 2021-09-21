const mysql = require("mysql");


var data = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'login'


});


module.exports = (query) => {
    return new Promise((resolve, reject) => {

        data.connect((error) => {
            if (error) {

                throw error;
            } else {

                data.query(query, (error, results) => {

                    if (error) {
                        console.log(error);
                        reject(error);

                    } else {
                        resolve(results);
                    }

                });



            }


        });


    });


}