
const  {MongoClient}= require("mongodb");
const url = "mongodb+srv://Puja098765:yuZhxdnFJbgZyNFh@namastenode.oyresk0.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

//   insert
const data={
    firstname:"Madhu",
    lastname:"Devi",
    city:"Gaya",
    phoneNumber:"65355358278",
};
const insertResult = await collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);

//  Read
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

// count
const countResult = await collection.countDocuments({});
console.log("Count of documents in the User collection =>", countResult);

// Find all documents with a filter of firstname:Madhu
const result = await collection.find({firstname:"Madhu"}).toArray();
console.log("result =>", result);

  return 'done.';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

  // go to mongodb website
// create a free M0 cluster 
// create a user
// get the connection string
// install mongo DB compass
// nodejs and MDB  connector= npm mongodb