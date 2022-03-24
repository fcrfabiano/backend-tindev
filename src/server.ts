import Express from 'express';
import '@config/database';

import { router } from './routes';

const app = Express();
app.use(router);

app.listen(3333);