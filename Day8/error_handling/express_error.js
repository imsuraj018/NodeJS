
const express=require("express");

const app=express();

// app.get("/", (req, res) =>{
//     res.send("Home page");
// });

// app.listen(3001, () =>{
//     console.log("Server running on port 3001");
// });

// express can catch sync errors and pass them to its error handling mechanism but we need to our own error middleware

// express hs 4 parameters


app.get("/", (req, res) =>{
    res.json({
        message:"Welcome"
    });
});

app.get("/students", (req, res) =>{
    throw new Error("unable to fetch students");
});

app.get("/students/:id", async(req, res) =>{
    const id=req.params.id;
    debugger;
    const student=await findStudent(id);
    res.json(student);
}
);



app.use((req, res, next) =>{
    res.status(404).json({
        success:false,
        message:"Route not exist"
    });
});

app.use((error, req, res, next) => {
    console.log(error.stack);
    res.status(500).json({
        success:false,
        message:"Internal server error"
    });
});


app.listen(3001, () =>{
    console.log("Server running on port 3001");
});