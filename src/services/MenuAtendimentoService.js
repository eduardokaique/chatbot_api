"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuAtendimentoService = void 0;
const prisma_1 = __importDefault(require("src/prisma"));
class MenuAtendimentoService {
    async Menu() {
        const user = await prisma_1.default.menuAtendimento.findMany({
            where: {
                parentMenuId: null
            }
        });
        return user;
    }
    async SubMenu(parentMenuId) {
        const user = await prisma_1.default.menuAtendimento.findMany({
            where: {
                parentMenuId: parentMenuId,
            },
        });
        return user;
    }
}
exports.MenuAtendimentoService = MenuAtendimentoService;
