import { Request, Response } from 'express';

import { DevControllerUseCase } from './DevControllerUseCase';

class DevController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username } = req.body;
        
        const devControllerUseCase = new DevControllerUseCase();

	const response = await devControllerUseCase.execute(username);

        return res.status(201).json(response);
    }
}

export { DevController };
