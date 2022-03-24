import { Router } from 'express';

import { devRoutes } from './dev.routes';
import { lindseyRoutes } from './lindsey.routes';

const routes = Router();

routes.use("/dev", devRoutes);
routes.use("/lindsey", lindseyRoutes);

routes.get("/", (req, res) => {
    return res.json({ message: "OK" });
});

export { routes };