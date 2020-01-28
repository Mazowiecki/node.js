var express = require('express');
var router = express.Router();
var DB = require('nosql');
var nosql = DB.load('./databases/users');

/* GET home page. */
router.post('/', function (req, res, next) {
    nosql.find().make(function (builder) {
        builder.where('email', req.body.email);
        builder.where('password', req.body.password);
        builder.callback(function (err, response) {
            if (response.length > 0) {
                res.send(true);
            } else {
                res.send('Brak usera o podanych danych');
            }
        });
    });
});

module.exports = router;