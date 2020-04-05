const express = require('express');
const app = express();

const adUnitRoute = express.Router();

const AdUnit = require('../model/AdUnit');

// ad POST Request
adUnitRoute.route('/add').post(function (req, res){
    let adUnit = new AdUnit(req.body);
    adUnit.save()
    .then(game => {
    res.status(200).json({adUnit});
    console.log({adUnit});
    }).catch(err => {
        res.status(400).send("unable to save to database");
     });
});



// adUnitRoute.route('/add').post(function (res, req) {
//     let adUnit = new AdUnit(req.body);
//     adUnit.save()
//       .then(game => {
//       res.status(200).json({adUnit});
//       })
//       .catch(err => {
//       res.status(400).send("unable to save to database");
//       });
//   });

adUnitRoute.route('/').get(function (req, res){
    AdUnit.find(function(err, documents){
        if(err){
            console.log(err);
        } else {
            res.json(documents);
            
        }
    });
});


// edit request
adUnitRoute.route('/edit/:id').get(function (req, res){
    let id = req.params.id;
    AdUnit.findById(id, function(err, adUnit){
        res.json(adUnit);
    });
});


// update required
adUnitRoute.route('/update/:id').post(function (req, res){
    let id = req.params.id;

    AdUnit.findById(req.params.id, function(err, adUnit){
        if(!AdUnit)
        return next (new Error('could not load Documents'));
        else {
            adUnit.unit_name = req.body.unit_name;
            adUnit.unit_price = req.body.unit_price;

            adUnit.save().then(adUnit =>{
                res.json('update Add Unit')

            })
            .catch(err =>{
                res.status(400).send("Unable to update the database");
            });
        }
    });
});



// Delete ad unit

adUnitRoute.route('/delete/:id').get(function (req, res){
    AdUnit.findByIdAndRemove({_id: req.params.id}, function(err, adUnit){
        if(err) res.json(err);
        else res.json(" successfully remove")
    })
})


module.exports = adUnitRoute;