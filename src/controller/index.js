const BD = require('../database/index');
exports.obtenerEdificaciones = async (req, res) => {
  try {
    const response = await BD.awaitQuery('SELECT * FROM edificaciones');
    const data = response.length
      ? response
      : { data: [], msg: 'No hay edificaciones registradas' };
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.crearEdificacion = async (req, res) => {
  try {
    const { nombre, ancho, alto, largo, material } = req.body;
    await BD.awaitQuery('INSERT INTO edificaciones (nombre, ancho, alto, largo, material) VALUES (?,?,?,?,?)', [
      nombre,
      ancho,
      alto,
      largo,
      material,
    ]);
    res.status(201).json('Edificación registrada correctamente!');
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.actualizarEdificacion = async (req, res) => {
  try {
    const { edificacionId } = req.params;
    const { nombre, ancho, alto, largo, material } = req.body;
    await BD.awaitQuery(
      'UPDATE edificaciones SET nombre = ?, ancho = ?, alto = ?, largo = ?, material = ? WHERE id = ? ',
      [nombre, ancho, alto, largo, material, edificacionId]
    );
    res.status(201).json('Edificación actualizada!');
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.eliminarEdificacion = async (req, res) => {
  try {
    const { edificacionId } = req.params;
    await BD.awaitQuery('DELETE FROM edificaciones WHERE id = ?', [
      edificacionId,
    ]);
    res.status(200).json('Edificación eliminada correctamente!');
  } catch (error) {
    res.status(500).json(error);
  }
};
