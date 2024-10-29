import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!uri) {
  throw new Error("Add Mongo URI to env file");
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
