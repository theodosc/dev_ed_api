const mongoose= require('mongoose');

const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
    type:String,
    required:true
    },
    date:{
    type:Date,
    default:Date.now
    }

});
// 'Posts' is the used module and PostSchema is what schema Posts is
module.exports=mongoose.model('Posts',PostSchema)