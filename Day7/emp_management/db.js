
const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'companydb'
});

connection.connect((err) => {
    if(err){
        console.log("Database Connection failed");
    }else{
        console.log("MySQL connected successfully");
    }

});


module.exports=connection;