const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); 
const protectedRoutes = require('./routes/protectedRoutes'); 

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    credentials: true 
}));

app.use(bodyParser.json()); 


app.use('/api/auth', authRoutes);


app.use('/api/protected', protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
