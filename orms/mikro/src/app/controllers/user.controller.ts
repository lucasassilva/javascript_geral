import { Request, Response } from "express";

export default {
  show: function (req: Request, res: Response) {
    res.render("index");
  },
};
