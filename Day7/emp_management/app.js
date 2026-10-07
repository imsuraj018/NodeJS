
const express=require('express');

const db=require('./db');
const app=express();
const port=3001;

app.use(express.json());

app.post("/add-employee", (req, res) => {
    const {
        emp_name, dept, salary, email
    }=req.body;
    const sql="INSERT INTO employees(emp_name, dept, salary, email) values(?,?,?,?)";
    db.query(sql, [emp_name, dept, salary, email],
        (err, result) =>{
            if(err){
                  return res.send(err);
                  res.send("Employee added successfully");
            }
        } 
    );
});

app.get("/employees", (req, res) =>{
    const sql="SELECT * FROM employees";
    db.query(sql, (err, result) =>{
        if(err){
            return res.send(err);
        }
        res.json(result);
    });
}); 

app.get("/employee/:id", (req, res) => {
    const id=req.params.id;
    db.query("SELECT  * FROM employees where emp_id=?", [id], (err, result) => {
        if(err) return res.send(err);
        res.json(result);

        }
    );
});

 
app.put("/update-employee/:id", (req, res)=>{
    const {emp_name, dept, salary, email} = req.body;
    const id=req.params.id;
    const sql="UPDATE employees SET emp_name=?, dept=?, salary=?, email=? WHERE emp_id=?";
    db.query(sql, [emp_name, dept, salary, email, id], 
        (err, result) => {
            if(err) return res.send(err);
            res.send("Employee updated successfully");
        }
    );
});


app.delete("/delete-employee/:id", (req, res) =>{
    const id=req.params.id;
    db.query("DELETE FROM employees WHERE emp_id=?", 
        [id], (err, result) =>{
            if(err) return res.send(err);
            res.send("Employee deleted successfully");
        }
    );
});
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});