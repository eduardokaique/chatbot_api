import prismaClient from "src/prisma";
import { sign } from "jsonwebtoken"

class AuthenticateUserService {
    async execute(login: string, password: string) {
        let usuario  = await prismaClient.usuario.findFirst({
            where: {
                login: login,
                password: password
            },
            include: {
                perfil: true
            }
        })

        if(!usuario)
            return { erro: "Usuario ou senha incorretos." };
        
        const token = sign({
            user: {
                name: usuario.nome,
                login: usuario.login,
                perfilId: usuario.perfil.id,
                perfilValor: usuario.perfil.valor
            }
         },
         process.env.JWT_SECRET,
         {
             subject: usuario.id,
             expiresIn: "1d"
         }
         )

        return  { token, usuario };
    }
}

export { AuthenticateUserService }