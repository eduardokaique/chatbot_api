import prismaClient from "src/prisma"

class GetLast3MessageService {
    async execute() {
        const messages = await prismaClient.mensagem.findMany({
            take: 3,
            orderBy: {
                createdAt: "desc"
            }
        });

        return messages;
    }
}

export { GetLast3MessageService }