const { createConnection } = require('mysql-await');

module.exports = createConnection({
  connectionLimit: 10,
  database: 'actividad-1',
  user: 'root',
  password: '300900',
});
