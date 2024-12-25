const express = require('express')

const port = 8000;

const app = express();

app.set('view engine','ejs'); 

app.get('/',(req,res)=>{
    return res.render('home')
})

app.get('/about',(req,res)=>{
    return res.render('about')
})

app.get('/conntact',(req,res)=>{
    return res.render('conntact')
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
        
    }
    console.log(`server is running on port http://localhost:${port}`);
    
   
})