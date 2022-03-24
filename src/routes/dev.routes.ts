import { Router } from 'express';
import { DevController } from '@controllers/DevController/DevController';

const devRoutes = Router();

const devController = new DevController();

devRoutes.post("/", devController.handle);

export { devRoutes };