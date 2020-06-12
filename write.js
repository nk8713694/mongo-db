
const {MongoClient}=require('mongodb');


const URL="mongodb://localhost:27017";


const DB_Name='tododb';


async function writeTask()
{
    const client = await MongoClient.connect(URL);

    const tododb= client.db(DB_Name);

    // now creating a table name todos

    const todos=tododb.collection('todos');     // collection is the table here

    const todo={
        task:'an important task',
        priority:2,
        owner:'manager'
    }
    //const result=await todos.insertOne(todo);

    const result = await todos.insertMany([
        {task:'simple tyask',priority:4,owner:'ceo self made'},
        {task:'complicated task',priority:3,owner:'ceo nepotism'},
        {task:'aur jada comp',priority:1,owner:'ceo bhai' },
        {task:'boht easy',priority:5,owner:'ceo kaa ma'},
    ])

    console.log(result);
    
}
writeTask()