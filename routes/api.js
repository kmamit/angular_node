/*
 * Serve JSON to our AngularJS client
 */
var models  = require('../models');

exports.doctor = function (req, res) {
    models.Doctor.findOne({
        include: [ models.Assistant ]
    }).then(function(data) {
//        console.log(data);
        res.json(data);
    });
};

exports.save_assistant = function (req, res) {
    
    
    models.Assistant.bulkCreate(req.body).then(function() { // Notice: There are no arguments here, as of right now you'll have to...
        res.send(200);
    }).catch(function(errors) {
        res.json(errors);
    })
//    console.log(req.body);
//    res.send(200);
};