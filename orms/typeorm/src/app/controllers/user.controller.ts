import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export default {
  show: async function (req: Request, res: Response) {
    const users = await getRepository(User).find();
    res.render("index", {
      users: users,
    });
  },
};
