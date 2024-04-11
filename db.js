const mysql= require('mysql2');
const connection=mysql.createConnection({
    user:"root",
    host:"localhost",
    port:3306,
    password:"Ishita@123",
    database:"test"

});

connection.connect((err) => {
    if (err){
    console.log(err)
}
    else{
        console.log("connected")
    }
});