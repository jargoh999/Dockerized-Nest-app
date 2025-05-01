import { Body, Controller, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user-dto";
import { LocalAuthGuard } from "./local-auth.guard";

// src/auth/auth.controller.ts
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}