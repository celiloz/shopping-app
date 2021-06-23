const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    // MongoClient.connect('mongodb://localhost/node-app')
    MongoClient.connect('mongodb+srv://celiloz:Celil147369@cluster0.wtfup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useUnifiedTopology: true })
        .then(client => {
            console.log('connected');
            callback(client);
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}


module.exports = mongoConnect;