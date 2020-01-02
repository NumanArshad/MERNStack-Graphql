
const mongoose = require("mongoose");

const connectionstr =  "mongodb+srv://NumanArshad:Numan557645@cluster0-ttupt.mongodb.net/test?retryWrites=true&w=majority"//"mongodb://localhost:27017/";

const options = {
 // reconnectTries: Number.MAX_VALUE,
 // poolSize: 10,
  useNewUrlParser: true
 // useUnifiedTopology: true
};

mongoose.connect(connectionstr, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);


// const MongoClient = require('mongodb');
// const options = {
//   reconnectTries: Number.MAX_VALUE,
//   poolSize: 10,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// };
// const uri = "mongodb+srv://NumanArshad:Numan311@cluster0-ttupt.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri,options);
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//        //db.createCollection('Movies')
//             collection.insertOne({phone:68676},(err,res)=>{
//                 if(err){
//                     console.log('insert failed',err)
//                 }
//                 else{
//                     console.log("data insert success",res)
//                 }
//             })
//   // perform actions on the collection object
//   client.close();
// });
