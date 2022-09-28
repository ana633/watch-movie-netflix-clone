const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const  userRoutes = require("./routes/UserRoutes");
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://movies-netflix-clone:spkBp9mI2vQLEg3B@movies-netflix-clone.zxrvnkv.mongodb.net/netflix?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

app.use("/api/user", userRoutes);

app.listen(process.env.PORT || 3000, console.log("server started"));