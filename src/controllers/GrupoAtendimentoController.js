"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoAtendimentoController = void 0;
const ProfileUserService_1 = require("@services/ProfileUserService");
class GrupoAtendimentoController {
    async handle(request, response) {
        const { userId } = request.body;
        const service = new ProfileUserService_1.ProfileUserService();
        const result = await service.execute(userId);
        return response.json(result);
    }
}
exports.GrupoAtendimentoController = GrupoAtendimentoController;
