import Express from 'express';
import cors from 'cors';
import '@config/database';

import { routes } from './routes';

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);

export { app };