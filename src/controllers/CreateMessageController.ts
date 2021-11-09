import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateMessageService } from "../services/CreateMessageServices";
import { Request, Response } from  "express";


class CreateMessageController {
    async handle(request: Request, response: Response) {
        const { mensagem } = request.body;
        const { grupoAtendimentoId } = request.body;
        const { userId } = request
        const service = new CreateMessageService();

        try {
            const result = await service.execute(mensagem, userId, grupoAtendimentoId);
            return response.json(result);
            
        } catch (err) {
            return response.json({ error: err.message });
        }

    }
}

export { CreateMessageController }