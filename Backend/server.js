require('dotenv').config()
const db=require('./db');
const PORT=process.env.PORT||3000
const express=require('express')
const cors= require('cors')


const app=express()
app.use(cors(

))
app.use(express.json())

app.use('/api/auth',require('./routes/auth')
)
app.use('/api/notes',require('./routes/notes'))

app.listen(PORT,()=>{
    console.log(`App listening at ${PORT}`)
})