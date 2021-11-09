import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateMessageService } from "../services/CreateMessageServices";
import { GetLast3MessageService } from "../services/GetLast3MessagesService";
import { Request, Response } from  "express";


class Get3LastMessagesController {
    async handle(request: Request, response: Response) {
        const service = new GetLast3MessageService();

        const result = await service.execute();

        return response.json(result);

    }
}

export { Get3LastMessagesController }