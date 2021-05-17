const { Router } = require('express');
const router = Router();
const {
  obtenerEdificaciones,
  crearEdificacion,
  actualizarEdificacion,
  eliminarEdificacion,
} = require('../controller/index');
router.get('/edificaciones', obtenerEdificaciones);
router.post('/edificaciones', crearEdificacion);
router.put('/edificaciones/:edificacionId', actualizarEdificacion);
router.delete('/edificaciones/:edificacionId', eliminarEdificacion);
module.exports = router;
