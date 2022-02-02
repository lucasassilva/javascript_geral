import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import User from "../src/models/User.ts"

const db = await new Client().connect({
  hostname: config().DB_HOSTNAME,
  username: config().DB_USERNAME,
  db: config().DB_DATABASE,
  password: config().DB_PASSWORD,
});

await db.execute(`
  CREATE TABLE IF NOT EXISTS users (
      id int(11) NOT NULL AUTO_INCREMENT,
      name varchar(100) NOT NULL,
      created_at timestamp not null default current_timestamp,
      PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`);

export default db;