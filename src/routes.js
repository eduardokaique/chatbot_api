"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const AuthenticateUserController_1 = require("@controllers/AuthenticateUserController");
const CreateMessageController_1 = require("@controllers/CreateMessageController");
const GetLast3MessagesController_1 = require("@controllers/GetLast3MessagesController");
const GrupoAtendimentoController_1 = require("@controllers/GrupoAtendimentoController");
const MenuAtendimentoController_1 = require("@controllers/MenuAtendimentoController");
const ProfileUserController_1 = require("@controllers/ProfileUserController");
const express_1 = require("express");
const ensureAutenticated_1 = require("./middleware/ensureAutenticated");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/authenticate", new AuthenticateUserController_1.AuthenticateUserController().handle);
router.post("/messages", new CreateMessageController_1.CreateMessageController().handle);
router.get("/messages/last3", new GetLast3MessagesController_1.Get3LastMessagesController().handle);
router.get("/profile", ensureAutenticated_1.ensureAuthenticate, new ProfileUserController_1.ProfileUserController().handle);
router.get("/menus", new MenuAtendimentoController_1.MenuAtendimentoController().menu);
router.post("/submenus", new MenuAtendimentoController_1.MenuAtendimentoController().subMenu);
router.get("/gruposAtendimento", ensureAutenticated_1.ensureAuthenticate, new GrupoAtendimentoController_1.GrupoAtendimentoController().handle);
