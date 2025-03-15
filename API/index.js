const express = require('express');

const app = express();

const port = 9000;

const cors = require('cors');
app.use(cors());


app.get('/users', (req,res)=>{
    return res.status(200).json({
        success: true,
        message: "User successfully fetch",
        users:[
            {id:1, name:"jay", phone:1234},
            {id:1, name:"yash", phone:123467},
            {id:1, name:"mahil", phone:1234},
            {id:1, name:"vraj", phone:123456},
        ]
    })
})
app.listen(port,(err)=>{
    if(err) {
        console.log(err);
    }
    console.log(`server is start on port ${port}`);
    
})
