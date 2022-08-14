import mongoose from 'mongoose';

const Connection = async(username,password) =>{
    const URL=`mongodb://${username}:${password}@crud-app-shard-00-00.gmy7caj.mongodb.net:27017,ac-mwdfpsk-shard-00-01.gmy7caj.mongodb.net:27017,ac-mwdfpsk-shard-00-02.gmy7caj.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-g6hsqx-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("succesfully connected database")
    }
    catch(error){
        console.log("error",error);
    }
}

export default Connection;