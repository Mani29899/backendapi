
const mySql = require('mysql')

 const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'ecommerce'
});


module.exports = connection;