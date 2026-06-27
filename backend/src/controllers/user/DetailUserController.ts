import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserServide";

class DetailUserController {
    async handle(req: Request, res: Response) {

        const detailUserServide = new DetailUserService()

        const user = await detailUserServide.execute()

        res.json(user)
    }
}

export { DetailUserController }