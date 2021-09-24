const mysql = require("mysql");


var data = mysql.createPool({
   host: 'mysql-51342-0.cloudclusters.net',
   user: 'admin',
   password: 'ssRl7GAX',
   database: 'login',
   port: '18691'


});


module.exports = (query) => {
   return new Promise((resolve, reject) => {

      data.getConnection((error, sql) => {
         if (error) {

            throw error;
         } else {
            console.log("connected to database");

            sql.query(query, (error, results) => {

               if (error) {
                  console.log(error);
                  reject(error);

               } else {
                  resolve(results);
               }
               sql.release();
            });



         }


      });


   });


}