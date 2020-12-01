const mongodb = require('mongodb');
const  MongoClient = mongodb.MongoClient;


const mongoConnect = (cb)=>{
    
    const db = process.env.DATABASE.replace('<pass>', process.env.DATABASE_PASSWORD);

    MongoClient.connect(db)
    .then(result=>{
        console.log('connect with success 🙂 ');
        cb(result)
    })
    .catch(err => console.log(err));

}

module.exports = mongoConnect
