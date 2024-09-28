import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { TypeormStore } from 'connect-typeorm';
import { SessionEntity } from './typeorm/session/Session';
import { DataSource } from 'typeorm';


async function bootstrap() {
  const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin@678!',
    database: 'Nest_db',
  });
  await dataSource.initialize();
  const sessionRepository = dataSource.getRepository(SessionEntity);
  
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      name:"Nest_Session",
      secret: 'GKLDNGDNGDKNGKJJFLK',
      resave: false,
      saveUninitialized: false,
      cookie:{
        maxAge: 60000,
      },
      store: new TypeormStore().connect(sessionRepository),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  
  await app.listen(3000);
}
bootstrap();
