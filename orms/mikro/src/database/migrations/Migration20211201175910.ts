import { Migration } from '@mikro-orm/migrations';

export class Migration20211201175910 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `users` (`id` int unsigned not null auto_increment primary key, `email` varchar(255) not null, `senha` varchar(255) not null, `created_at` json not null, `updated_at` json not null) default character set utf8mb4 engine = InnoDB;');
  }

}
