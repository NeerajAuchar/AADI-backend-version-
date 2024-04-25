const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

port =  process.env.PORT || 5000;


app.use(express.json()); // this is body parser where we can post the data from body to the server
app.use("/patient/data",require("./routes/patientRoutes"));

app.use(errorHandler); // this is for to handler the error !!

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});