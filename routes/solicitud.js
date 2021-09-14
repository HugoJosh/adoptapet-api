// Estructura del CRUD
const router = require("express").Router();
const {
  crearSolicitud,
  obtenerSolicitudes,
  modificarSolicitud,
  eliminarSolicitud,
  count
} = require("../controllers/Solicitud");

router.get("/", obtenerSolicitud);
router.get("/:id", obtenerSolicitudes);
router.get('/count/:id', count);
router.post("/", crearSolicitud);
router.put("/:id", modificarSolicitud);
router.delete("/:id", eliminarSolicitud);

module.exports = router;
