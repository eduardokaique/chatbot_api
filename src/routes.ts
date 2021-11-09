import { AuthenticateUserController } from "../src/controllers/AuthenticateUserController";
import { CreateMessageController } from "../src/controllers/CreateMessageController";
import { Get3LastMessagesController } from "../src/controllers/GetLast3MessagesController";
import { GrupoAtendimentoController } from "../src/controllers/GrupoAtendimentoController";
import { MenuAtendimentoController } from "../src/controllers/MenuAtendimentoController";
import { ProfileUserController } from "../src/controllers/ProfileUserController";
import { Router } from "express";
import { ensureAuthenticate } from "./middleware/ensureAutenticated";


const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", new CreateMessageController().handle);

router.get("/messages/last3", new Get3LastMessagesController().handle);

router.get("/profile", ensureAuthenticate, new ProfileUserController().handle);

router.get("/menus", new MenuAtendimentoController().menu);

router.post("/submenus", new MenuAtendimentoController().subMenu);

router.get("/gruposAtendimento", ensureAuthenticate, new GrupoAtendimentoController().handle);



export { router }
