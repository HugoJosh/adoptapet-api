/*  Archivo controllers/mascotas.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de mascotas
// const Mascota = require('../models/Mascota');
const mongoose = require("mongoose");

const Mascota = mongoose.model("Mascota");

function crearMascota(req, res, next) {
  // // Instanciaremos un nuevo Mascota utilizando la clase Mascota
  // var Mascot = new Mascota(req.body)
  // res.status(201).send(Mascot)
  var Mascota = new Mascota(req.body);
  Mascota.save()
    .then(function (mascota) {
      res.status(200).send(mascota);
    })
    .catch(next);
}

function obtenerMascotas(req, res) {
  // Simulando dos mascotas y respondiendolos
  // var Mascota1 = new Mascota(1, 'lola', 'perro', 'no hay:(',"locochon","anunciante 1","Mexico")
  // var Mascota2 = new Mascota(2, 'simon', 'gato', 'no hay:(',"locochon","anunciante 2","Mexico")
  // res.send([Mascota1, Mascota2])
  if (req.params.id) {
    Mascota.findById(req.params.id)
      .then((mascota) => {
        res.send(mascota);
      })
      // .catch(next);
  } else {
    Mascota.find()
      .then((mascotas) => {
        res.send(mascotas);
      })
      .catch(res.status(500));
  }
}

function modificarMascota(req, res, next) {
  // simulando un Mascota previamente existente que el cliente modifica
  // var Mascota1 = new Mascota(req.params.id, 'chiquis', 'loca', 'no hay:(')
  // var modificaciones = req.body
  // Mascota1 = { ...Mascota1, ...modificaciones }
  // res.send(Mascota1)
  Mascota.findById(req.params.id)
    .then((mascota) => {
      if (!mascota) {
        return res.sendStatus(401);
      }
      let nuevaInfo = req.body;
      if (typeof nuevaInfo.nombre !== "undefined"){
        mascota.nombre = nuevaInfo.nombre;
        mascota.anunciante=mascota.anunciante;
        mascota.descripcion=mascota.descripcion;
      }
      if (typeof nuevaInfo.categoria !== "undefined")
        mascota.categoria = nuevaInfo.categoria;
      if (typeof nuevaInfo.fotos !== "undefined")
        mascota.fotos = nuevaInfo.fotos;
      if (typeof nuevaInfo.descripcion !== "undefined")
        mascota.descripcion = nuevaInfo.descripcion;
      if (typeof nuevaInfo.anunciante !== "undefined")
        mascota.anunciante = nuevaInfo.anunciante;
      if (typeof nuevaInfo.ubicacion !== "undefined")
        mascota.ubicacion = nuevaInfo.ubicacion;
      mascota
        .save()
        .then((updated) => {
          res.status(201).json(updated.publicData());
        })
        // .catch(next);
    })
    // .catch(next);
}

function eliminarMascota(req, res) {
  // se simula una eliminación de Mascota, regresando un 200
  // res.status(200).send(`Mascota ${req.params.id} eliminado`);
  Mascota.findOneAndDelete({ _id: req.params.id }).then((r) => {
    res.status(200).send(`Mascota ${req.params.id} eliminada: ${r}`);
  });
}

function count(req,res,next) {
  var categoria = req.params.cat
  Mascota.aggregate([
    {'$match': { ' categoria': categoria}}, 
    {'$count': 'total'}
  ]).then(r => {
    res.status(200).send(r)
  })
}


// exportamos las funciones definidas
module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota,
  count
};
