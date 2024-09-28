import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth/auth.service";
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject('AUTH_SERVICE') private authService: AuthService){
        super();
    }

    async validate(username: string, password: string){
        const user = this.authService.validateUser(username, password);
        
        if (!user) {
            return new UnauthorizedException;}
        return user
    }

}
