"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLast3MessageService = void 0;
const prisma_1 = __importDefault(require("src/prisma"));
class GetLast3MessageService {
    async execute() {
        const messages = await prisma_1.default.mensagem.findMany({
            take: 3,
            orderBy: {
                createdAt: "desc"
            }
        });
        return messages;
    }
}
exports.GetLast3MessageService = GetLast3MessageService;
