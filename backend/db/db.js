const { MongoClient } = require('mongodb');

const mongoConnect = async () => {
  try {
    const client = await MongoClient.connect("mongodb://Neelava20:glOmrgMg9NXsl8Hj@ac-oi7szx7-shard-00-00.ilgrubo.mongodb.net:27017,ac-oi7szx7-shard-00-01.ilgrubo.mongodb.net:27017,ac-oi7szx7-shard-00-02.ilgrubo.mongodb.net:27017/?ssl=true&replicaSet=atlas-nc2lc3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
    });
    const db = client.db('notes');
    console.log('Connected to MongoDB sucessfully');
    return db;
    // You can do further operations with the database here
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports= mongoConnect
