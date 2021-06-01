const express=require('express');
const app=express();
const connectDB=require('./config/db');
const sessionMiddleware = require('./session-middleware');

app.use(sessionMiddleware);
// Init Middleware
app.use(express.json());

// Create a PORT configuration
const PORT= process.env.PORT || 5000;

// Make a Connection to the database
connectDB();

// Application Routes
 app.use('/api/item',require('./api/routes/item'));
 app.use('/api/cart',require('./api/routes/cart'));

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
