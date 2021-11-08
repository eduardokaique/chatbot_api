"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoAtendimentoService = void 0;
const prisma_1 = __importDefault(require("src/prisma"));
class GrupoAtendimentoService {
    async execute(grupoAtendimentoId) {
        const user = await prisma_1.default.grupoAtendimento.findMany({
            where: {
                id: grupoAtendimentoId
            }
        });
        return user;
    }
}
exports.GrupoAtendimentoService = GrupoAtendimentoService;
