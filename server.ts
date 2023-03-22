import express,{ application,Request,Response } from "express"
import userRouter from "./user/userRouter";



const app:express.Application = express()

const hostname :string = "127.0.0.1";
const port:number = 2222;

app.get("/",(req:Request,res:Response)=>{
    // res.status(200);
    res.json({msg:"Home Page"})
})
app.use("/user",userRouter)


app.listen(port,hostname,()=>{
    console.log(`Server started at http://${hostname}:${port}`);
});