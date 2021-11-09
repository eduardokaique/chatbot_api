import { io } from "../app";
import prismaClient from "../prisma"

class CreateMessageService {
    async execute(texto: string, userId: string, grupoAtendimentoId: string) {
        const mensagem = await prismaClient.mensagem.create({
            data: {
                texto,
                grupoAtendimentoId
            },
        });

        const infoWS = {
            texto: mensagem.texto,
            created_at: mensagem.createdAt
        }
        
        io.emit("new_message", infoWS)

        return mensagem;
    }
}

export { CreateMessageService }