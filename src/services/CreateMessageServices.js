"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageService = void 0;
const app_1 = require("src/app");
const prisma_1 = __importDefault(require("src/prisma"));
class CreateMessageService {
    async execute(texto, userId, grupoAtendimentoId) {
        const mensagem = await prisma_1.default.mensagem.create({
            data: {
                texto,
                grupoAtendimentoId
            },
        });
        const infoWS = {
            texto: mensagem.texto,
            created_at: mensagem.createdAt
        };
        app_1.io.emit("new_message", infoWS);
        return mensagem;
    }
}
exports.CreateMessageService = CreateMessageService;
