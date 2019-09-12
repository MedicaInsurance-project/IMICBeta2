var express = require('express');
var router = express.Router();

var agent = require("../controllers/agentController");

router.post('/create', function (req,res){
    agent.save(req,res);
})

module.exports = router;