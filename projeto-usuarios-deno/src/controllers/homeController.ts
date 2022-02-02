import db from "../../config/db.ts";
import User from "../models/User.ts";

export async function paginaInicial(context: any) {
  const users: User[] = await db.query("select id, name from users");
  context.render("index", {
    users: users,
  });
}
