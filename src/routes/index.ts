import { Router } from 'express';

import { devRoutes } from './dev.routes';

const routes = Router();

routes.use("/dev", devRoutes);

routes.get("/", (req, res) => {
    return res.json({ message: "OK" });
});

export { routes };