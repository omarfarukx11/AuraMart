const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONODO_DB_URI;
const dbName = process.env.DB_NAME;
 export const collection = {
    PRODUCTS  : "products",
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = (cname) => { 
    return client.db(dbName).collection(cname)
 }