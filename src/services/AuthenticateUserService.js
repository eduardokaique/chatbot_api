"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserService = void 0;
const prisma_1 = __importDefault(require("src/prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateUserService {
    async execute(login, password) {
        let usuario = await prisma_1.default.usuario.findFirst({
            where: {
                login: login,
                password: password
            },
            include: {
                perfil: true
            }
        });
        if (!usuario)
            return { erro: "Usuario ou senha incorretos." };
        const token = (0, jsonwebtoken_1.sign)({
            user: {
                name: usuario.nome,
                login: usuario.login,
                perfilId: usuario.perfil.id,
                perfilValor: usuario.perfil.valor
            }
        }, process.env.JWT_SECRET, {
            subject: usuario.id,
            expiresIn: "1d"
        });
        return { token, usuario };
    }
}
exports.AuthenticateUserService = AuthenticateUserService;
