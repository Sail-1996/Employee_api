const express=require("express");

const cors = require('cors');

const router=new express.Router();
const Employee=require("../models/personalDetails")


//2: we need to define router

router.use(cors());

router.post("/employee", async (req, res) => {
    try {
      const emp = new Employee(req.body);
      console.log(req.body);
      const createEmployee = await emp.save();
      res.status(201).send(createEmployee);
    } catch (e) {
      res.status(400).send(e);
    }
  });

 
  
  //read the data of registered students
  router.get("/employee", async (req, res) => {
    try {
      const employeeData = await Employee.find();
      res.send(employeeData);
    } catch (e) {
      res.send(e);
    }
  });
  
  //get the indivisual Student data using id
  
  router.get("/employee/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const employeeData = await Employee.findById(_id);
      console.log(employeeData);
      if (!employeeData) {
        return res.status(404).send();
      } else {
        res.send(employeeData);
      }
    } catch (e) {
      res.status(500).send(e);
    }
  });
  //delete the students by it id
  router.delete("/employee/:id", async (req, res) => {
    try {
     
     const deleteEmployee= await Employee.findByIdAndDelete(req.params.id);
     if(!req.params.id){
         return res.status(400).send()
     }
     res.send(deleteEmployee);
    } catch (e) {
        res.status(500).send(e);
    }
  });
  //update the students by its id
  router.patch("/employee/:id", async (req, res) => {
      try {
       const _id=req.params.id;
       const updateEmployee= await Employee.findByIdAndUpdate(_id,req.body,{
           new:true
       });
      //  if(!req.params.id){
      //      return res.status(400).send()
      //  }
       res.send(updateEmployee);
      } catch (e) {
          res.status(404).send(e);
      }
    });

module.exports=router;