/*  Archivo controllers/Solicituds.js
 *  Simulando la respuesta de objetos Solicitud
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Solicituds
// const Solicitud = require('../models/Solicitud');
const mongoose = require("mongoose");

const Solicitud = mongoose.model("Solicitud");

function crearSolicitud(req, res, next) {
  // // Instanciaremos un nuevo Solicitud utilizando la clase Solicitud
  // var Mascot = new Solicitud(req.body)
  // res.status(201).send(Mascot)
  var Solicitud = new Solicitud(req.body);
  Solicitud.save()
    .then(function (Solicitud) {
      res.status(200).send(Solicitud);
    })
    .catch(next);
}

function obtenerSolicitudes(req, res) {
  // Simulando dos Solicituds y respondiendolos
  // var Solicitud1 = new Solicitud(1, 'lola', 'perro', 'no hay:(',"locochon","anunciante 1","Mexico")
  // var Solicitud2 = new Solicitud(2, 'simon', 'gato', 'no hay:(',"locochon","anunciante 2","Mexico")
  // res.send([Solicitud1, Solicitud2])
  if (req.params.id) {
    Solicitud.findById(req.params.id)
      .then((Solicitud) => {
        res.send(Solicitud);
      })
      // .catch(next);
  } else {
    Solicitud.find()
      .then((Solicitudes) => {
        res.send(Solicitudes);
      })
      .catch(res.status(500));
  }
}

function modificarSolicitud(req, res, next) {
  // simulando un Solicitud previamente existente que el cliente modifica
  // var Solicitud1 = new Solicitud(req.params.id, 'chiquis', 'loca', 'no hay:(')
  // var modificaciones = req.body
  // Solicitud1 = { ...Solicitud1, ...modificaciones }
  // res.send(Solicitud1)
  Solicitud.findById(req.params.id)
    .then((Solicitud) => {
      if (!Solicitud) {
        return res.sendStatus(401);
      }
      let nuevaInfo = req.body;
      if (typeof nuevaInfo.idMascota !== "undefined"){
        Solicitud.idMascota = nuevaInfo.idMascota;
        Solicitud.idUsuarioAnunciante=Solicitud.idUsuarioAnunciante;
        Solicitud.idUsuarioSolicitante=Solicitud.idUsuarioSolicitante;
      }
      if (typeof nuevaInfo.idUsuarioSolicitante !== "undefined"){
        Solicitud.idMascota = Solicitud.idMascota;
        Solicitud.idUsuarioAnunciante=Solicitud.idUsuarioAnunciante;
        Solicitud.idUsuarioSolicitante=nuevaInfo.idUsuarioSolicitante;
      }
      if (typeof nuevaInfo.idUsuarioAnunciante !== "undefined"){
        Solicitud.idMascota = Solicitud.idMascota;
        Solicitud.idUsuarioAnunciante=nuevaInfo.idUsuarioAnunciante;
        Solicitud.idUsuarioSolicitante=Solicitud.idUsuarioSolicitante;
      }
      Solicitud
        .save()
        .then((updated) => {
          res.status(201).json(updated.publicData());
        })
        // .catch(next);
    })
    // .catch(next);
}

function eliminarSolicitud(req, res) {
  // se simula una eliminación de Solicitud, regresando un 200
  // res.status(200).send(`Solicitud ${req.params.id} eliminado`);
  Solicitud.findOneAndDelete({ _id: req.params.id }).then((r) => {
    res.status(200).send(`Solicitud ${req.params.id} eliminada: ${r}`);
  });
}

function count(req,res,next) {
  var categoria = req.params.id
  Solicitud.aggregate([
    {'$match': { '_id': id}}, 
    {'$count': 'total'}
  ]).then(r => {
    res.status(200).send(r)
  })
}


// exportamos las funciones definidas
module.exports = {
  crearSolicitud,
  obtenerSolicitudes,
  modificarSolicitud,
  eliminarSolicitud,
  count
};
