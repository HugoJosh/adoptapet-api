// Estructura del CRUD
const router = require("express").Router();
const {
  crearSolicitud,
  obtenerSolicitudes,
  modificarSolicitud,
  eliminarSolicitud,
  count
} = require("../controllers/solicitudes");

router.get("/", obtenerSolicitudes);
router.get("/:id", obtenerSolicitudes);
router.get('/count/:id', count);
router.post("/", crearSolicitud);
router.put("/:id", modificarSolicitud);
router.delete("/:id", eliminarSolicitud);

module.exports = router;
