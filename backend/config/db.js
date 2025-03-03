const mongoose= require('mongoose');
const db=process.env["NODE_CONFIG_DIR"];
const connectDB= async()=>{
   try {
    await mongoose.connect(db,{});
    console.log('MongoDB Connected..')
   } catch (error) {
       console.error(error.message);
       process.exit(1);
   }
}

module.exports=connectDB;