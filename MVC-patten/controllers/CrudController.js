
const addPage = (req , res)=>{
    return res.render('crud/add')

}

const viewPage = (req , res)=>{
    try{
        let allrecord = await UserModal.find({});
        return res.render('crud/view' , {
            record :allrecord
        });
    }catch(err){
        console.log(err);
        return false;
    }

}

module.exports={
    addPage,viewPage
}