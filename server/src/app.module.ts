import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'host.docker.internal',
      port: 5432,  
      username: 'admin',
      password: 'secret',  
      database: 'testdb', 
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
