import { client } from "../db.js";
import jwt from "jsonwebtoken";

export function addUsers(userInfo){
    return client
    .db("b45WD")
    .collection("users")
    .insertOne(userInfo)
}

export function getUser(userEmail){
    return client
    .db("b45WD")
    .collection("users")
    .findOne({email : userEmail})
}

//unique token generation with the common Secretkey according to the unique value(Object_id) 
export function generateJwtToken(id){
    return jwt.sign(
        {id}, 
        process.env.SECRETKEY, 
        {expiresIn:"30d"}
        )
}