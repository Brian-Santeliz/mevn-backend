const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const router = require('./router/index');
const connection = require('./database/index');
app.set('puerto', 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use('/api', router);

app.listen(app.get('puerto'), async () => {
  console.log('Servidor en el puerto:', app.get('puerto'));
  await connection.awaitConnect();
  console.log('BB Conectada!');
});
