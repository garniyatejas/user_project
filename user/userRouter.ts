import express, { Router,Request,Response } from "express";
import jsonfile from 'jsonfile';
import path from "path";
import { IUser } from "../models/IUser";
import { Userutil } from "../util/Userutil";

const userRouter :Router = Router();


/*
    use:get all users
    url:
*/

userRouter.get("/",async(req:Request,res:Response)=>{
    const userjsonPath=path.join(__dirname,"..","data","user.json");
    try{
        let userData:IUser[]=await Userutil.getalluser();
        res.status(200).json(userData)
    }
    catch{
        res.status(500).json({
            msg:"server error",
            userjsonPath:userjsonPath
        })
    }
})

export default userRouter;