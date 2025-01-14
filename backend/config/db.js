const mongoose= require('mongoose');
const config=require('config');
// const db='mongodb+srv://admin430:jvwi9KyLlqyotxGg@cluster0.doytz.mongodb.net/lapmart?retryWrites=true&w=majority&appName=Cluster0';//config.get('mongoURI');
const db=process.env["NODE_CONFIG_DIR"];
const connectDB= async()=>{
   try {
    await mongoose.connect(db,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        
    });
    console.log('MongoDB Connected..')
   } catch (error) {
       console.error(error.message);
       process.exit(1);
   }
}

module.exports=connectDB;