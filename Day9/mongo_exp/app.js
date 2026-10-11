const express=require("express");
const app=require(express);
const mongoose=require("mongoose");

const debug=require("debug");

const logger=require("./logger");
const dbDebug=debug("app:db");

const crudDebug=debug("app:crud");

app.use(express.json());

app.use((req, res, next) =>{
    logger.info("HTTP request received",{
    method:req.method,
    url:req.originalUrl})
    crudDebug("Request: %s %s", re)
});


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        min:1
    },
    course:{
        type:String,
        trim:true
    }
});

const Student=mongoose.model("Student", studentSchema);

app.post("/students", async(req, res) =>{
    try{
        crudDebug("Creating Student");
        const student=await Student.create(req.body);

        logger.info("Student created", {
            studentId:student_id.toString()

        });
        crudDebug("Student created with ID : %s", student_id);
        res.status(201).json(student);
    }catch(error){
        logger.error("Failed to create student");

        message:error.message;
    }
    res.status(400).json({error:error.message});
});

async function startServer(){
    try{
        dbDebug("Connecting to mongoosdb");
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/studentDB"
        );
        logger.info("MongoDB connected successfully");
        dbDebug("MongoDB connected successfully");

        const port=3001;
        app.listen(port, () =>{
            logger.info("Server started");
            console.log("Server running on port 3001");
        });

    }catch(error){
        logger.error("Application startup failed");
        message:error.message
    }
}