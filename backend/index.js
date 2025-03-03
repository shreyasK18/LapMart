const express=require('express');
const app=express();
const connectDB=require('./config/db');
const cors = require('cors');
const sessionMiddleware = require('./session-middleware');
const path=require('path')
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE'
    ],
  
    allowedHeaders: [
      'Content-Type',
      'Access-Control-Allow-Origin'
    ],
  };
app.use(cors(corsOpts));
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
 app.get('/',(req,res)=>res.send("Server is running"))
//  Serve static assets in production
//  if(process.env.NODE_ENV=='production'){
//     // Set Static folder
//     app.use(express.static('./frontend/dist'))

//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'./frontend','dist','index.html'))
//     })
//  }


app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
