const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: true,
    
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3
  },
  middleName: {
    type: String,
    required: true,
 
  },
  lastName: {
    type: String,
    required: true,
   
  },
  gender: {
    type: String,
    required: true,
   
  },
  dateOfBirth:{
type:String,
required:true
  },
  maritalStatus: {
    type: String,
    required: true,
   
  },
  idProof: {
    type: String,
    required: true,
    
  },
   
  phoneNo:{
    type:Number,
    min:10,
    
    required:true,
    unique:true
},
landLineNo:{
    type:Number,
  
    
    required:true,
    unique:true
},


  email: {
    type: String,
    required: true,
    unique: [true, "Email is already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
 
  permanentAddress:{
      type:String,
      required:true
  },
  localAddress:{
    type:String,
   // required:true
}
 

});

//we will create a new collection
const Employee=new mongoose.model('Employee',employeeSchema)
module.exports=Employee;