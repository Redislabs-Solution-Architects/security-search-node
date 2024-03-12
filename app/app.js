import 'dotenv/config.js';

import express from 'express';
import bodyParser from 'body-parser';
import { redis } from './om/client.js';
import * as security from './components/security/index.js';
import * as errorMiddleware from './middleware/error-handling.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/* bring in some routers */
app.use('/security', security.router);

async function setupData() {
  security.repositories.security.createIndex();
}

setupData();

app.get(
  '/reset',
  (_req, res) => {
    redis.flushDb();
    res.json({ message: 'Database reset successfully' });
    setupData();
  },
);

function isIndex(url) {
  return url === '' || url === '/' || url === '/index.html';
}

app.use(
  '/',
  express.static('static'),
);

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.serverError);

export { app };
