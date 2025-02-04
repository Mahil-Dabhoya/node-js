const express = require('express');

const routes = express.Router();

routes.get('/' , (req , res)=>{
   console.log(" hello");
   
})


routes.use('/crud' , require('./crudRoute'));

routes.use('/product' , require('./productRoute'));

module.exports = routes;
