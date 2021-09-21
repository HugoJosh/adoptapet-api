// Express
const express = require("express");
const app = express();
const Sequelize = require("sequelize");

//Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ESTE ES EL CÓDIGO A AGREGAR

//Configurando las rutas

//Configuracion de base de datos
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://introabd:introabd1234@cluster0.jso3y.mongodb.net/AdoptPet?retryWrites=true&w=majority"
  );
  mongoose.set("debug", true);
  
  require("./models/Usuario");
  require("./models/Mascota");
  require("./models/Solicitud");
  require('./config/passport');
  
  app.use("/v1", require("./routes"));

// const sequelize = new Sequelize("a", "superAdmin", "pass1234", {
//   host: "localhost:27017",
//   // una de estas opciones dependiendo el gestor de la base
//   dialect: "mysql",
// });



// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("It's alive!!!!");
//   })
//   .catch((err) => {
//     console.log("No se conecto :(");
//   });

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// {name:1,email:1}
// {name:1,text:1,date:1}
// {title:1,cast:1,year:1}
// {name:1,password:1}

// $ mongo --port 27017
//   use admin
// $ db.createUser(
//   {
//     user: "superAdmin",
//     pwd: "pass1234",
//     roles: [ { role: "root", db: "admin" } ]
//   })
