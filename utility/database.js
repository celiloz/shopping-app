const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    // MongoClient.connect('mongodb://localhost/node-app')
    MongoClient.connect('mongodb+srv://celiloz:Celil147369@cluster0.wtfup.mongodb.net/node-app?retryWrites=true&w=majority',{ useUnifiedTopology: true })
        .then(client => {
            console.log('connected');
            _db = client.db();
            callback(client);
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}

const getdb = ()=> {
    if(_db){
        return _db;
    }
    throw 'No Database'
}


exports.mongoConnect = mongoConnect;
exports.getdb = getdb;