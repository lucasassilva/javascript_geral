import { Options } from "@mikro-orm/core";
import { User } from "../app/models/user.model";
import * as path from "path";

const options: Options = {
  type: "mysql",
  entities: [User],
  host: "localhost",
  dbName: "db_mikro",
  password: "Rlxrvt1241x@",
  migrations: {
    path: path.resolve(__dirname, "../database", "migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
};

export default options;
