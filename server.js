const express = require("express");
const app = express();
require('dotenv').config();
const dbConfig = require("./config/dbConfig.js");
const userRoute = require('./routes/user_routes');
const adminRoute = require('./routes/admin_routes');
const doctorRoute = require('./routes/doctor_routes');


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Node Server started at port',port));
app.use(express.json());
app.use('/api/user',userRoute);
app.use('/api/admin',adminRoute);
app.use('/api/doctor',doctorRoute);