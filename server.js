// require('dot.env').config()
const express = require('express')
const port= 1900
const app = express()
app.use(express.json())

// the process.env.port is used when hosting online 
// ||we 

app.get("/",(req, res)=> {
    res.send("Hello user, you are most welcome to my database")
})

app.listen(port, ()=> {
    console.log(`Server is listening  to ${port}`);
})