import { Entity, PrimaryKey, Property } from "mikro-orm";

@Entity({ tableName: "users" })
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  email: string;

  @Property()
  senha: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor(email: string, senha: string) {
    this.email = email;
    this.senha = senha;
  }
}
