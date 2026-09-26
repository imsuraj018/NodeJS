const express=require('express');

const app=express();
const port=3001;
app.use(express.json());
let students=[
    {
    id:1,
    name: "Rambhau",
    course: "CSE"
},
{
    id:2,
    name: "Gana",
    course: "CSE"
},
];

app.get("/students", (req, res) =>{
    res.json(students);
});

app.get("/students/:id", (req, res) =>{
    const id=Number(req.params.id);
    const student=students.find(student => student.id===id);
    if(!student){
        return res.status(404).json({
            message:"Student not found"
        });
    }
    res.status(200).json(student);
});

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`);
})

