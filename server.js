import express from "express"
import add from "./add.js"
import {appendFile, readFile} from "fs/promises"

const app = express()
app.listen(3000)

//logger using middleware to write logs in text file
const logger = async(req,res,next)=>{
    const txt = `[${req.ip}] [${req.method} ${req.path}] ${new Date()},\n`
    await appendFile("logs.txt",txt)
    next() // is function that pass control to next step
}
app.use(logger)

app.get("/readlogs",async(req,res)=>{
    const logs = await readFile("logs.txt","utf8")
    res.json(logs)
})

app.get("/add/:x/:y",async(req,res)=>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)

    const result = await add(x,y)
    res.json(result)
})
