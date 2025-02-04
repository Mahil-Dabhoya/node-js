const express = require('express');

const routes = express.Router();

const multer = require('multer');

const { addPage , viewPage , insertRecord } = require('../controllers/CrudController');

routes.get('/',viewPage)
routes.get('/add',addPage)


const st = multer.diskStorage({
    destination : (req , res , cb)=>{
        cd(null, 'uplods')
    },
    filename : (req , res , cb)=>{
        const uniq = Math.floor(Math.random() * 1000000);
        cd(null, `${file.fildname}-${uniq}`)
    }
})

const fildUplods = multer({storage: st}).single('avatar');
routes.post('/insertrecord',fileUpload,insertRecord)

module.exports = routes;