require('dotenv').config()
const db=require('./db');
const PORT=process.env.PORT||3000
const express=require('express')
const cors= require('cors')


const app=express()
app.use(cors(

))
app.use(express.json())
const auth=require('./routes/auth')
const notes=require('./routes/notes')
app.use('/user',auth)
app.use('/notes',notes)




app.listen(PORT,()=>{
    console.log(`App listening at ${PORT}`)
})