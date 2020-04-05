const express = require('express'),
 path = require('path'),
 bodyParser = require('body-parser'),
 cors =require('cors'),
 mongoose = require('mongoose'),
 config = require('./config/DB'),
 coinRoutes = require('./expressRoutes/coinRoutes'),
 adUnitRoute = require('./expressRoutes/adUnitRoutes'),
 businessRoute = require('./expressRoutes/business.route'),
productRoutes = require('./expressRoutes/productRoutes');



 mongoose.Promise = global.Promise;

 mongoose.connect(config.DB).then(
     () => { console.log('Database is connected')},
     err => {console.log('Can not connect to the database' +err)}
 );

 const app = express();
        app.use(bodyParser.json());
        app.use(cors());

 
const  port = process.env.PORT || 4001;
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

app.use('/coins', coinRoutes);
app.use('/adunits', adUnitRoute);
app.use('/business', businessRoute);
app.use('/products', productRoutes);
 

 const server = app.listen(port, function(){
     console.log('Server listening on post ' + port);
 });