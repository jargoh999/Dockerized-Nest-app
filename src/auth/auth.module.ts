import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: 'your-secret-key', // Use environment variable in production
            signOptions: { expiresIn: '1h' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule { }