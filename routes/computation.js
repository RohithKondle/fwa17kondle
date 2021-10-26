var express = require('express');
var router = express.Router();
var url = require('url')



/* GET home page. */
router.get('/', function(req, res, next) {
    var randomValue = Math.random().toFixed(2);
    console.log(randomValue)
    var urlObject = url.parse(req.url,true).query

    var x = urlObject.x;
    if(x == undefined){
        x = randomValue;
    }
    res.send(`Math.cosh() applied to ${x} is <b>${Math.cosh(x)}</b>`);
});

module.exports = router;