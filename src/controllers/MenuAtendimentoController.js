"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuAtendimentoController = void 0;
const MenuAtendimentoService_1 = require("@services/MenuAtendimentoService");
class MenuAtendimentoController {
    async menu(request, response) {
        const service = new MenuAtendimentoService_1.MenuAtendimentoService();
        const result = await service.Menu();
        return response.json(result);
    }
    async subMenu(request, response) {
        const { parentMenuId } = request.body;
        const service = new MenuAtendimentoService_1.MenuAtendimentoService();
        const result = await service.SubMenu(parentMenuId);
        return response.json(result);
    }
}
exports.MenuAtendimentoController = MenuAtendimentoController;
