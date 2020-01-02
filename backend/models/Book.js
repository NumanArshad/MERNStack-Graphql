const mongoose=require("mongoose")
const schema=mongoose.Schema
const Book=new schema({
title:{
    type:String
},
genre:{
    type:Number
},
AuthorId:{
    type:String
}
})
module.exports=mongoose.model('BookMS',Book)