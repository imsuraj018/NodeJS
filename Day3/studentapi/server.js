const express=require('express');

const app=express();
const port=3001;
app.use(express.json());

let students=[
    {
        id:1,
        name:"Rambhau",
        email:"bhau@gmail.com",
        course:"GenAI"
    },{
        id:2,
        name:"Gana",
        email:"gana@gmail.com",
        course:"CV"
    }
];

app.get("/api/students", (req, res) =>{
    res.status(200).json(students);
});

app.get("/api/students/:id", (req, res) =>{
    const id=Number(req.params.id);
    const student=students.find(student => student.id === id);
    if(!student){
    return res.status(404).json({
        message:"Student not found"
    });
}
    res.status(200).json(student);
});

app.post("/api/students", (req, res) => {
    const {name, email, course}=req.body;
    const newStudent={
        id:students.length + 1,
        name,
        email,
        course
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.put("/api/students/:id", (req, res) => {
    const id =Number(req.params.id);
    const student=students.find(student => student.id === id);
    if(!student){
        return res.status(404).json({
            message:"Student not found"
        });


    }
    const {name, email, course}=req.body;
    student.name=name;
    student.email=email;
    student.course=course;
    res.status(200).json(student);
});

app.delete("/api/students/:id", (req, res) =>{
    const id=Number(req.params.id);
    const studentIndex=students.findIndex(student => student.id===id);
    if(studentIndex===-1){
        return res.status(404).json({
            message:"Student not found"
        });

    }
    students.splice(studentIndex, 1);
    res.status(200).json({
        message:"Student deleted successfully"
    });
});



// Query Parameters

app.get("/api/students", (req, res) => {
    const {course}=req.query;
    if(course){
        const filterStudent=student.filter(
            student=>student.course===course
        );
        return res.json(filterStudent);
    }
    res.json(students);
});


app.get("/", (req, res) =>{
    res.json({
        message:"Student api is running"
    });

});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});


