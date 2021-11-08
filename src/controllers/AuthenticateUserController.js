"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const AuthenticateUserService_1 = require("@services/AuthenticateUserService");
class AuthenticateUserController {
    async handle(request, response) {
        const { usuario } = request.body;
        const { senha } = request.body;
        const service = new AuthenticateUserService_1.AuthenticateUserService();
        try {
            const result = await service.execute(usuario, senha);
            return response.json(result);
        }
        catch (err) {
            return response.json({ error: err.message });
        }
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
