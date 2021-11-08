"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserService = void 0;
const prisma_1 = __importDefault(require("src/prisma"));
class ProfileUserService {
    async execute(userId) {
        const user = await prisma_1.default.usuario.findFirst({
            where: {
                id: userId
            }
        });
        return user;
    }
}
exports.ProfileUserService = ProfileUserService;
