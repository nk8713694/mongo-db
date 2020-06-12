const {MongoClient}=require('mongodb');

const MONGO_URL= 'mongodb://localhost:27017';

const DB_Name ='tododb';

//IIFE immediately invoked funntion expresssion
(async ()=>{

  const client = await MongoClient.connect(MONGO_URL);

  const tododb= client.db(DB_Name);


  console.log(tododb);
  

})()