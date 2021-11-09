import prismaClient from "../prisma"

class GrupoAtendimentoService {
    async execute(grupoAtendimentoId: string) {
        const user = await prismaClient.grupoAtendimento.findMany({
            where: {
                id: grupoAtendimentoId
            }
        });

        return user;
    }
}

export { GrupoAtendimentoService }