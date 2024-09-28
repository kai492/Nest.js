import { Controller, Post, Body, Request, UseGuards, Session, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        console.log('inside controller');
 }

@Get('')
async getSession(@Session() session: Record<string, any>){
    console.log(session);
    console.log(session.id);
    session.authenticated = true;
    return session;
}


}