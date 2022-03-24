import { Router } from 'express';

const lindseyRoutes = Router();

lindseyRoutes.get("/", (req, res) => {
    return res.json({ message: "Oi, Camelinha! :´)" });
});

export { lindseyRoutes };