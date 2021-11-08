"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageController = void 0;
const CreateMessageServices_1 = require("@services/CreateMessageServices");
class CreateMessageController {
    async handle(request, response) {
        const { mensagem } = request.body;
        const { grupoAtendimentoId } = request.body;
        const { userId } = request;
        const service = new CreateMessageServices_1.CreateMessageService();
        try {
            const result = await service.execute(mensagem, userId, grupoAtendimentoId);
            return response.json(result);
        }
        catch (err) {
            return response.json({ error: err.message });
        }
    }
}
exports.CreateMessageController = CreateMessageController;
