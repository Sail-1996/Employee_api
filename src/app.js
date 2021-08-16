const express = require("express");
const cors = require('cors');
require("./db/conn");

const employeeRouter=require("./routers/employee")

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(employeeRouter);


app.use(cors());
 

// const corsOptions ={
//     origin:'http://localhost:4000/students', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
