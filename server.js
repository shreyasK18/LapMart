const express=require('express');
const app=express();
const connectDB=require('./config/db');
// Init Middleware
app.use(express.json());
// Create a PORT configuration
const PORT= process.env.PORT || 5000;

// Make a Connection to the database
connectDB();

// Application Routes
 app.use('/api/items',require('./api/routes/items'));
// app.use('/api/chargers',require('./api/routes/chargers'));
// app.use('/api/batteries',require('./api/routes/batteries'));
// app.use('/api/profile',require('./api/routes/profile'));
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
