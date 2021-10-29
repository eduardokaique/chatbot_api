import prismaClient from "src/prisma"

class ProfileUserService {
    async execute(userId: string) {
        const user = await prismaClient.usuario.findFirst({
            where: {
                id: userId
            }
        });

        return user;
    }
}

export { ProfileUserService }