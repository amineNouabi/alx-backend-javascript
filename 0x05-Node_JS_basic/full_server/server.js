import express from 'express';

import bindRoutes from './routes';

const PORT_NUMBER = 1245;

const app = express();

bindRoutes(app);

app.listen(PORT_NUMBER);

export default app;
