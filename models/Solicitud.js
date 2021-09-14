// Solicitud.js
/** Clase que representa una solicitud de adopción */
// class Solicitud {
//     constructor(id, idMascota, fechaDeCreacion, idUsuarioAnunciante, idUsuarioSolicitante, estado) {
//       this.id = id;
//       this.idMascota = idMascota;
//       this.fechaDeCreacion = fechaDeCreacion;
//       this.idUsuarioAnunciante = idUsuarioAnunciante;
//       this.idUsuarioSolicitante = idUsuarioSolicitante;
//       this.estado = estado;
//     }

//   }

//   module.exports = Solicitud;
const mongoose = require('mongoose');
const SolicitudScheme = new mongoose.Schema(
  {
    idUsuarioAnunciante: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    idMascota: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mascota",
      required: true,
    },
    estado: { type: String, enum: ["Disponible", "Adoptado"] }
  },
  { timestamps: true, collection: "Solicitudes" }
);

SolicitudScheme.methods.publicData = () => {
  return {
    id: this.id,
    idUsuarioAnunciante: this.idUsuarioAnunciante,
    idUsuarioSolicitante: this.idUsuarioSolicitante,
    idMascota: this.idMascota,
    estado: this.estado
  };
};
mongoose.model("Solicitud", SolicitudScheme);
