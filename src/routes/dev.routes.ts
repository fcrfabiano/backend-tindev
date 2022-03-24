import { Router } from 'express';

const devRoutes = Router();

devRoutes.get("/", (req, res) => {
    return res.json({ message: "OK" });
});

export { devRoutes };