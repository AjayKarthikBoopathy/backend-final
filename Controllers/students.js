import { ObjectId } from "bson";
import { client } from "../db.js";

//separate functions for queries
export function getAllStudents(req){
    return client
    .db("b45WD")
    .collection("students")
    .find(req.query)
    .toArray();
}

export function getStudentsById(id){
    return client
    .db("b45WD")
    .collection("students")
    .findOne({_id: new ObjectId(id)})   //ObjectId class used to get specific data
}

export function addStudentsData(data){
  return client
  .db("b45WD")
  .collection("students")
  .insertOne(data)

}

export function updateStudentData(id, updatedData){
    return client
    .db("b45WD")
    .collection("students")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updatedData})
}

export function deletaStudentsData(id){
    return client
  .db("b45WD")
  .collection("students")
  .deleteOne({_id: new ObjectId(id)})
}