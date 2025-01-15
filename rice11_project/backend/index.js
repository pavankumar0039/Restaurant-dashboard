const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3000'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, 
};

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions)); 

const connectDB = require('./database/db');
connectDB();


const ordersroute=require("../backend/routes/orderroutes/index")
const customersroute=require("../backend/routes/customerroutes/index")
const menuroute=require("../backend/routes/menuroutes/index")
// const dashboardroute=require("../backend/routes/dashboardroutes/index")
const userroute=require("../backend/routes/userroutes/index")
//routes/
app.use('/api/user',userroute)
app.use('/api/orders',ordersroute)
app.use('/api/customer',customersroute)
app.use('/api/menu',menuroute)
// app.use('/api/dashboard',dashboardroute)





const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
