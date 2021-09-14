
// /** Clase que representa a un usuario de la plataforma*/
// class Usuario {
//     constructor(id, username, nombre, apellido, email, password, tipo) {
//       this.id = id;
//       this.username = username;
//       this.nombre = nombre;
//       this.apellido = apellido;
//       this.email = email;
//       this.password = password;
//       this.tipo = tipo; // tipo normal o anunciante
//     }
//   }
//   module.exports = Usuario;
const mongoose = require('mongoose');
const UsuarioSchema = new mongoose.Schema({      
  username: String,                              
  nombre: String,
  apellido: String, 
  email: String,
  password: String,
  ubicacion: String,
  telefono: String,
  bio: String,
  foto: String,
  tipo: String,
}, { timestamps: true, collection: 'Usuarios' });     

UsuarioSchema.methods.publicData = () => {
  return {
    id: this.id,
    username: this.username,
    email: this.email,
    nombre: this.nombre,
    apellido: this.apellido,
    bio: this.bio,
    foto: this.foto,
    tipo: this.tipo,
    ubicacion: this.ubicacion,
    telefono: this.telefono,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};
mongoose.model("Usuario", UsuarioSchema); 

