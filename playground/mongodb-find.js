// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log("unable to connect to Mongo database server");
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').find({
  //   _id: new ObjectID('590a8867cb737ce0e65653c1')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);

  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
});
