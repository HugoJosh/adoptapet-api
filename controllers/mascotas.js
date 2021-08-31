/*  Archivo controllers/mascotas.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de mascotas
const Mascota = require('../models/Mascota');

function crearMascota(req, res) {
  // Instanciaremos un nuevo Mascota utilizando la clase Mascota
  var Mascot = new Mascota(req.body)
  res.status(201).send(Mascot)
}

function obtenerMascotas(req, res) {
  // Simulando dos mascotas y respondiendolos
  var Mascota1 = new Mascota(1, 'lola', 'perro', 'no hay:(',"locochon","anunciante 1","Mexico")
  var Mascota2 = new Mascota(2, 'simon', 'gato', 'no hay:(',"locochon","anunciante 2","Mexico")
  res.send([Mascota1, Mascota2])
}

function modificarMascota(req, res) {
  // simulando un Mascota previamente existente que el cliente modifica
  var Mascota1 = new Mascota(req.params.id, 'chiquis', 'loca', 'no hay:(')
  var modificaciones = req.body
  Mascota1 = { ...Mascota1, ...modificaciones }
  res.send(Mascota1)
}

function eliminarMascota(req, res) {
  // se simula una eliminación de Mascota, regresando un 200
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
}
