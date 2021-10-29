import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateMessageController } from "@controllers/CreateMessageController";
import { Get3LastMessagesController } from "@controllers/GetLast3MessagesController";
import { GrupoAtendimentoController } from "@controllers/GrupoAtendimentoController";
import { MenuAtendimentoController } from "@controllers/MenuAtendimentoController";
import { ProfileUserController } from "@controllers/ProfileUserController";
import { Router } from "express";
import { ensureAuthenticate } from "./middleware/ensureAutenticated";


const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticate, new CreateMessageController().handle);

router.get("/messages/last3", new Get3LastMessagesController().handle);

router.get("/profile", ensureAuthenticate, new ProfileUserController().handle);

router.get("/menus", ensureAuthenticate, new MenuAtendimentoController().menu);

router.get("/submenus", ensureAuthenticate, new MenuAtendimentoController().subMenu);

router.get("/gruposAtendimento", ensureAuthenticate, new GrupoAtendimentoController().handle);



export { router }
