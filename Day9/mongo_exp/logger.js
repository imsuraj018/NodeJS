
const winston=require('winston');
const path=require('path');

const fs=require('fs');

const logDirectory=path.join(__dirname, "logs");

fs.mkdirSync(logDirectory, {recursive:true});

const logger=winston.createLogger({
    level:process.env.LOG_LEVEL || "debug", 
    format:winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({stack:true}),
    winston.format.json()
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({
            filename:path.join(logDirectory, "app.log")
        })
    ]
});

module.exports=logger;
