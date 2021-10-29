-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mensagens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usuarioId" TEXT,
    "grupoAtendimentoId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "texto" TEXT NOT NULL,
    CONSTRAINT "mensagens_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "mensagens_grupoAtendimentoId_fkey" FOREIGN KEY ("grupoAtendimentoId") REFERENCES "gruposAtendimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mensagens" ("createdAt", "grupoAtendimentoId", "id", "isDeleted", "texto") SELECT "createdAt", "grupoAtendimentoId", "id", "isDeleted", "texto" FROM "mensagens";
DROP TABLE "mensagens";
ALTER TABLE "new_mensagens" RENAME TO "mensagens";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
