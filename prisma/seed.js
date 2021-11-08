"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const usuarioAdm = await prisma.usuario.upsert({
        where: { id: '8d196ca6-acf2-4cef-9372-b61ac908f607' },
        update: {},
        create: {
            id: '8d196ca6-acf2-4cef-9372-b61ac908f607',
            isDeleted: false,
            nome: 'Administrador',
            login: 'adm',
            email: 'adm@provedor.com.br',
            perfil: {
                create: {
                    id: '8a19954b-f12d-4d52-8537-bd08cb85a784',
                    isDeleted: false,
                    valor: 'ADM',
                    descricao: 'Administrador'
                }
            },
        },
    });
    const usuarioSupervisor = await prisma.usuario.upsert({
        where: { id: '328bbdfe-3b7b-476a-a7be-fb2724cb592e' },
        update: {},
        create: {
            id: '328bbdfe-3b7b-476a-a7be-fb2724cb592e',
            isDeleted: false,
            nome: 'Supervisor 1',
            login: 'supervisor 1',
            email: 'supervisor1@provedor.com.br',
            perfil: {
                create: {
                    id: '23791374-9010-4b3d-a592-8575b9a7ca39',
                    isDeleted: false,
                    valor: 'SPV',
                    descricao: 'Supervisor'
                }
            },
        },
    });
    const usuarioOperador = await prisma.usuario.upsert({
        where: { id: '1d4e47cf-c868-4eb3-92e1-c145ff6f06d8' },
        update: {},
        create: {
            id: '1d4e47cf-c868-4eb3-92e1-c145ff6f06d8',
            isDeleted: false,
            nome: 'Operador 1',
            login: 'Operador 1',
            email: 'operador1@provedor.com.br',
            perfil: {
                create: {
                    id: '73a296f9-c279-49ba-a5c9-be08924c8a0d',
                    isDeleted: false,
                    valor: 'OPR',
                    descricao: 'Operador'
                }
            },
        },
    });
    const grupoAtendimentoFinanceiro = await prisma.grupoAtendimento.upsert({
        where: { id: 'a37e344b-020a-457a-81b1-96e02c4bbb0a' },
        update: {},
        create: {
            id: 'a37e344b-020a-457a-81b1-96e02c4bbb0a',
            isDeleted: false,
            valor: 'FINANCEIRO',
            descricao: 'Grupo que realiza atendimentos no setor financeiro.',
            perfil: {
                connect: {
                    id: '73a296f9-c279-49ba-a5c9-be08924c8a0d'
                }
            }
        },
    });
    const menuFinanceiro = await prisma.menuAtendimento.upsert({
        where: { id: '9f9fa740-f068-4fe3-a5d2-00a9d98bca4b' },
        update: {},
        create: {
            id: '9f9fa740-f068-4fe3-a5d2-00a9d98bca4b',
            isDeleted: false,
            opcao: 1,
            descricao: 'Financeiro',
            parentMenuAtendimento: {
                create: [{
                        id: 'f6fce2be-6b79-49a3-9fb4-5d711bd67d27',
                        isDeleted: false,
                        opcao: 1,
                        descricao: '2ª via de boleto',
                        grupoAtendimentoId: 'a37e344b-020a-457a-81b1-96e02c4bbb0a'
                    },
                    {
                        id: 'e94f2099-6f83-49b3-bc35-4999b03b23eb',
                        isDeleted: false,
                        opcao: 2,
                        descricao: 'Renegociação',
                        grupoAtendimentoId: 'a37e344b-020a-457a-81b1-96e02c4bbb0a'
                    }]
            }
        }
    });
    const menuSuporteTecnico = await prisma.menuAtendimento.upsert({
        where: { id: 'ccb87fde-04be-4b66-a617-36a775e92105' },
        update: {},
        create: {
            id: 'ccb87fde-04be-4b66-a617-36a775e92105',
            isDeleted: false,
            opcao: 2,
            descricao: 'Suporte Técnico',
        }
    });
    const menuVendas = await prisma.menuAtendimento.upsert({
        where: { id: '96ca5db4-7706-4396-b5e8-811a987b6a22' },
        update: {},
        create: {
            id: '96ca5db4-7706-4396-b5e8-811a987b6a22',
            isDeleted: false,
            opcao: 3,
            descricao: 'Vendas',
        }
    });
    console.log({ usuarioAdm,
        usuarioSupervisor,
        usuarioOperador,
        grupoAtendimentoFinanceiro,
        menuFinanceiro,
        menuSuporteTecnico,
        menuVendas });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
