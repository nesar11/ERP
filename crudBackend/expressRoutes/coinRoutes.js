var express = require('express');
var app = express();

var coinRoutes = express.Router();

var Coin = require('../model/Coin');

// POST REQUIRED FROM 
coinRoutes.route('/add').post(function(req, res){
    var coin = new Coin(req.body);
    coin.save().then(item =>{
        res.status(200).json({coin});
        console.log(coin);
    })
    .catch(err =>{
        res.status(400).send("Unable to save Coin to Databse")
    });
});

// GET ALL THE COINS FROM DB
coinRoutes.route('/').get(function(req, res){
    Coin.find(function(err, coins){
        if(err){
            console.log(err);
        } else {
            res.json(coins);
        }
    });

});

// GET BY ID
coinRoutes.route('/edit/:id').get(function(req, res){
    var id = req.params.id;
    Coin.findById(id, function(err, coin){
        res.json(coin);
    });
});

// update by id

coinRoutes.route('/update/:id').post(function(req, res){
    Coin.findById(req.params.id, function(err, coin){
        if(!coin)
        return next(new Error ('Could not load Document'))
    else {
        coin.name = req.body.name;
        coin.price = req.body.price;
         
        coin.save().then(coin =>{
            res.json('Updated coin successfull')
        })
        .catch(err =>{
            res.status(400).send("unable to update the databse")
        })

    }
    });
});

// COIN DELETE REQUEST
// coinRoutes.route('/delete/:id').get(function(req, res){
//     Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin){
//         if(err) res.json(err);
//         else res.json('Successfull Remove')
//     });

// });

coinRoutes.route('/delete/:id').get(function (req, res) {
    Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin){
         if(err)
       {
        console.log('remove coin');
        res.json(err);

       }
         else 
         res.json('Successfully removed');
        
     });
 });
 

module.exports = coinRoutes;