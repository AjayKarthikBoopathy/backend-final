import {MongoClient} from "mongodb"
//to get data using ObjectId class
import Obj from "mongodb"

//const MongoURL = "mongodb+srv://sanjay:sanjay15@cluster0.iqhbdif.mongodb.net/?retryWrites=true&w=majority"
//const MongoURL = "mongodb+srv://<username>:<password>@cluster0.c76i2k0.mongodb.net/?retryWrites=true&w=majority"
const MongoURL = "mongodb+srv://ajay15:ajay15@cluster0.c76i2k0.mongodb.net/?retryWrites=true&w=majority"

async function createConnection(){
   const client = new MongoClient(MongoURL);        //MongoClient -> class
    await client.connect()                          //connect -> method      //connection has to wait so await used
    console.log("MongoDB is connected Sucessfully")
    return client
}

export var ObjectId = Obj.ObjectId;                 //exporting to use the ObjectId class
export const client = await createConnection();     //createConnection is called & client is exported out


//.gitignore file with content 'node_modules/' will hide unused node modules

//nodemailer - for forget password & resetting