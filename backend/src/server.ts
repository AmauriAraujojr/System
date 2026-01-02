import app from "./app";
import * as dotenv from "dotenv";
import { AppDataSource } from "./data-source";

dotenv.config({path: "../.env"})

AppDataSource.initialize()
.then(()=>{
    console.log("database is connected")
    const PORT = process.env.PORT || 3000
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`)
    })
})
.catch((err)=>console.log(err))