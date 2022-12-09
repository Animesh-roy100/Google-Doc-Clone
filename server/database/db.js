import mongoose from "mongoose";

const Connection = async (username = 'user1', password = '12345') => {
    const URL = `mongodb://${username}:${password}@ac-fzzrpvl-shard-00-00.klsdnny.mongodb.net:27017,ac-fzzrpvl-shard-00-01.klsdnny.mongodb.net:27017,ac-fzzrpvl-shard-00-02.klsdnny.mongodb.net:27017/GOOGLE-DOC_CLONE?ssl=true&replicaSet=atlas-qjs83y-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;