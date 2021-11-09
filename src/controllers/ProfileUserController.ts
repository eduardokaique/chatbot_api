import { ProfileUserService } from "../services/ProfileUserService";
import { Request, Response } from  "express";


class ProfileUserController {
    async handle(request: Request, response: Response) {
        const { userId } = request;

        const service = new ProfileUserService();

        const result = await service.execute(userId);

        return response.json(result);

    }
}

export { ProfileUserController }