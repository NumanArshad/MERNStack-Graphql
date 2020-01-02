const mongoose=require("mongoose")
const schema=mongoose.Schema
const Login=new schema({
username:{
    type:String
},
password:{
    type:String
}
})
module.exports=mongoose.model('LoginMS',Login)