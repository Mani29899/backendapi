const { response } = require('express');
var express = require('express');

var constants = require('../constants')

const app = express();

const PORT = 8000;

var database = require('../server');


app.get(constants.home, (req, response, next) => {
    database.connect((err) => {
         if (err) console.log(err)
        let selectQuery = `select * from user`
        database.query(selectQuery, (err, res) => {
            if (err) throw err;
            console.log(res, 'values are selected successfully');
            response.send(res)
        })
    })
})


app.post(constants.home, (req, response, next) => {
    database.connect((err) => {
        if (err) console.log(err);
        let insertQuery = `insert into user(firstName ,middleName ,lastName ,email, phone ,registeredAt ,lastLogin ,rollNo) values(
            'ravi' ,'kumar','s','ravikumar@gmail.com','680272174543',curdate(),curdate(),4    
        )`
        database.query(insertQuery, (err, res) => {
            if (err) throw err;
            console.log('values are inserted in the user table');
            response.send(res)
        })
    })
})


app.put(constants.home, (req, response, next) => {
    database.connect((err) => {
        if (err) console.log(err);
        console.log('database connected Successfully');
        let updateQuery = `update user set firstName = 'shivangi' ,middleName = 'lisha',lastName = 'h',email = 'shivangilisa@gmail.com',phone = '7980145891',
        rollNo = 3 where id = 13`;
        database.query(updateQuery, (err, res) => {
            if (err) throw err;
            console.log('values are updated in the table');
            response.send(res)
        })
    })
})



app.delete(constants.home, (req, response, next) => {
    database.connect((err) => {
        if (err) console.log(err)
        let deleteQuery = `delete from user where id = 13`
        database.query(deleteQuery, (err, res) => {
            if (err) throw err;
            console.log('values are deleted in the user table');
            response.send(res)
        })
    })
})


// error handling when next function triggers it will calls


// first error occurs it will triger below the function before the next function.. after that next function triggers...
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err)
})


// when the next function triggers below function calls...
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})




app.listen(PORT, () => console.log('listening port on 8000'));



