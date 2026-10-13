const express=require("express");
const helmet=require("helmet");

const mysql=require("mysql2");

const app=express();
app.use(express.urlencoded({extended:false}));

app.use(express.json());

async function startServer(){
    const db=await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:12345,
        database:"Database_name"
    });


    console.log("Connected to MYSQL");

    app.post("/unsafe-login", async(req, res) =>{
        const username=req.body.username || "";
        const password=req.body.password || "";

        const [rows]=select id from users where username=? and password=? limit 1`, [us];
        
        try{
            const [rows] = await db.query(sql);
            if(rows.length > 0){
                res.send("Login successful");
            }else{
                res.send("Invalid username or password");
            }
        }catch(error){
            console.log(error.message);
            res.send("Unable to process login");
        }
    });

}