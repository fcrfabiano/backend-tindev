import { Request, Response } from 'express';

import { DevControllerUseCase } from '@controllers/DevController/DevControllerUseCase';

class DevController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username } = req.body;
        
        const devControllerUseCase = await DevControllerUseCase.execute(username);

        console.log(devControllerUseCase);

        return res.status(201).json(devControllerUseCase);
    }
}

export { DevController };