import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig : TypeOrmModuleOptions = {
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : '123',
    database : 'tiny-world',
    entities : [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize : true
}