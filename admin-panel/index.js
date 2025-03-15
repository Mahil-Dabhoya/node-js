const express = require('express');
const port =8088;
const app = express();

app.set('view engine','ejs');

const path = require('path');

app.use('/',express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    return res.render('dasebord');
})

app.get('/buttons',(req,res)=>{
    return res.render('buttons');
})
app.get('/alerts',(req,res)=>{
    return res.render('alerts');
})
app.get('/cards',(req,res)=>{
    return res.render('cards');
})
app.get('/forms',(req,res)=>{
    return res.render('forms');
})
app.get('/typography',(req,res)=>{
    return res.render('typography');
})




app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
        
    }
    console.log(`server is run onthise port :- ${port}`);
    
})