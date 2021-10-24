-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "perfilId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "login" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    CONSTRAINT "usuarios_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "perfis" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "perfis" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "valor" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "gruposAtendimento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "perfilId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "valor" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    CONSTRAINT "gruposAtendimento_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "perfis" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mensagens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "grupoAtendimentoId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "texto" TEXT NOT NULL,
    CONSTRAINT "mensagens_grupoAtendimentoId_fkey" FOREIGN KEY ("grupoAtendimentoId") REFERENCES "gruposAtendimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "menusAtendimento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "grupoAtendimentoId" TEXT,
    "parentMenuId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "opcao" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    CONSTRAINT "menusAtendimento_grupoAtendimentoId_fkey" FOREIGN KEY ("grupoAtendimentoId") REFERENCES "gruposAtendimento" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "menusAtendimento_parentMenuId_fkey" FOREIGN KEY ("parentMenuId") REFERENCES "menusAtendimento" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
