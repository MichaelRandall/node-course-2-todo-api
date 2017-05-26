// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log("unable to connect to Mongo database server");
  }
  console.log("Connected to MongoDB server");

db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID("590a8867cb737ce0e65653c1")
},{
  $set:{
    completed: true
  }
},{
  returnOriginal: false
}).then((result)=> {
  console.log(result);
});



  //db.close();
});
