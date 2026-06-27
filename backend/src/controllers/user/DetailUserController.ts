import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserServide";

class DetailUserController {
    async handle(req: Request, res: Response) {

        const user_id = req.user_id

        const detailUserServide = new DetailUserService()

        const user = await detailUserServide.execute(user_id)

        res.json(user)
    }
}

export { DetailUserController }