import { MenuAtendimentoService } from "@services/MenuAtendimentoService";
import { ProfileUserService } from "@services/ProfileUserService";
import { Request, Response } from  "express";


class MenuAtendimentoController {
    async menu(request: Request, response: Response) {

        const service = new MenuAtendimentoService();

        const result = await service.Menu();

        return response.json(result);

    }

    async subMenu(request: Request, response: Response) {
        const { parentMenuId } = request.body

        const service = new MenuAtendimentoService();

        const result = await service.SubMenu(parentMenuId);

        return response.json(result);

    }
}

export { MenuAtendimentoController }