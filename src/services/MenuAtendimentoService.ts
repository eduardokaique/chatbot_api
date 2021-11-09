import prismaClient from "../prisma"

class MenuAtendimentoService {
    async Menu() {
        const user = await prismaClient.menuAtendimento.findMany({
            where: {
                parentMenuId: null
            }
        });

        return user;
    }

    async SubMenu(parentMenuId: string) {
        const user = await prismaClient.menuAtendimento.findMany({
            where: {
               parentMenuId: parentMenuId,
            },
        });

        return user;
    }
}

export { MenuAtendimentoService }