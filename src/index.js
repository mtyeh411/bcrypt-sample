import http from 'http';
import express from 'express';
import bcryptjs from './bcryptjs';

let app = express();
app.server = http.createServer(app);

app.use('/bcryptjs', bcryptjs());

app.server.listen(process.env.PORT || 8080, () => {
  console.log(`Started on port ${app.server.address().port}`);
});
