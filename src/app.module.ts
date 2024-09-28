import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import  Entities  from './typeorm';
import { PassportModule } from '@nestjs/passport';
import { DataSource } from 'typeorm';


@Module({
  imports: [CustomersModule, UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin@678!',
    database: 'Nest_db',
    entities: Entities,
    synchronize: false,
  }), AuthModule,PassportModule.register({
    session:true,
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

}
