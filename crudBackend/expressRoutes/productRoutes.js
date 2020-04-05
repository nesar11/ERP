const express = require('express');
const app = express();

const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function( req, file, cb){
        cb(null, './uploads/');

    },
    filename: function(req, file, cb){
cb(null, new Date().toISOString().replace(/:/g, '-') +  file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg') {
    cb(null, true);
    }
   else{
    cb(null, false);
   }         
};

const upload = multer({storage: storage, 
    limits:{
        fileSize: 1024 * 1024 * 5
        }, 
        fileFilter: fileFilter
    });


const productRoutes = express.Router();
const Product = require('../model/Product');

productRoutes.post('/add', upload.single('productImage'), (req, res, next) =>{
    console.log(req.file);
    let product = new Product({
        _id: new mongoose.Types.ObjectId(),
        ProductName: req.body.ProductName,
        ProductDescription: req.body.ProductDescription,
        ProductPrice: req.body.ProductPrice,
        productImage : req.file.path
    });
    product.save()
    .then(product => {
        res.status(200).json({product});
        console.log({product});
    })
    .catch(err => {
        res.status(400).send(" Unable to save product in the database")
    });
});

productRoutes.route('/').get( (req, res) =>{
    Product.find( ( err, Products) =>{
        if(err){
            console.log(err);
        } else {
            res.json(Products);
            console.log(Products);
        }
    })
})

productRoutes.route('/edit/:id').get( (req, res) =>{
    let id = req.params.id;
    Product.findById(id, (err, product) =>{
        res.json(product)
    })
})

productRoutes.route('/update/:id').post((req, res)=>{
    Product.findById(req.params.id, (err, product) =>{
        if (!product)
        res.status(404).send(" record not found");
        else {
            
            ProductName = req.body.ProductName;
            ProductDescription = req.body.ProductDescription;
            ProductPrice = req.body.ProductPrice;
            productImage = req.file.path;
            product.save().then(product =>{
                res.json('Update complete')
            })
            .catch(err =>{
                res.status(200).send(" unable to update product from db")
            })

        }

    })
})


productRoutes.route('/delete/:id').get( (req, res) => {
 Product.findByIdAndRemove({_id: req.params._id}, (err, prodcut) =>{
     if(err){
         console.log(err)
     }
     else {
         console.log('product has been removed')
     }
 })
})

module.exports = productRoutes;