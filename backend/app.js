const express=require('express')
const app=express()
var config = require("./config/db");
const graphqlHttp=require('express-graphql')
const mongoose=require('mongoose')
const schema=require('./schema')
const cors=require('cors')
app.use(cors())
app.use('/graphql',graphqlHttp({
    schema,
    graphiql:true
}))
app.listen(4000,()=>{
    console.log("now listening on port 4000")
})