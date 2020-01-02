const mongoose=require("mongoose")
const schema=mongoose.Schema
const Author=new schema({
name:{
    type:String
},
age:{
    type:Number
}
})
module.exports=mongoose.model('AuthorMS',Author)