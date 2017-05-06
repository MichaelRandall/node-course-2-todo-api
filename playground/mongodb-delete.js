// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log("unable to connect to Mongo database server");
  }
  console.log("Connected to MongoDB server");

  //deleteMany
    // db.collection('Users').deleteMany({name: 'Michael Randall'});

  //findOneAndDelete
    // db.collection('Users').findOneAndDelete({name: 'Bob'}).then((result)=>{
    //   console.log(result);
    // });

  //findOneAndDelete by _id
    // db.collection('Users').findOneAndDelete({
    //   _id: new ObjectID("1234")
    // }).then((results)=>{
    //   console.log(JSON.stringify(results, undefined, 2));
    // });

  // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //   console.log(result);
    // });
  // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //   console.log(result);
    // });
  // findOneAndDelete - finds a specific record, deletes it and returns it
    // db.collection('Todos').findOneAndDelete({status: false}).then((result)=>{
    //   console.log(result);
    // });



  //db.close();
});
