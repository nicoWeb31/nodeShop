const mongodb = require('mongodb');
const  MongoClient = mongodb.MongoClient;

let _bdC;

const mongoConnect = (cb)=>{
    
    const db = process.env.DATABASE.replace('<pass>', process.env.DATABASE_PASSWORD);

    MongoClient.connect(db, { useUnifiedTopology: true })
    .then(client=>{
        console.log('connect with success 🙂 ');
        _bdC = client.db()
        cb()
    })
    .catch(err => {
        console.log(err);
        throw err;
    })

}

const getDb =()=>{
    if(_bdC){
        console.log("🚀 ~ file: database.js ~ line 25 ~ getDb ~ _bdC", _bdC)
        return _bdC
    }
    throw 'No connect database .... '
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
