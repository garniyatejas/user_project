import path from "path";
import jsonfile from "jsonfile"
import {IUser} from "../models/IUser";
export class Userutil {
    private static userjsonPath = path.join(__dirname, "..", "data", "user.json");
    public static getalluser() :Promise<IUser[]>{
        console.log(this.userjsonPath);
        return new Promise((resolve,reject)=>{
        jsonfile.readFile(this.userjsonPath,(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                console.log(data);
                resolve(data);
            }
        })
        })
    }
}