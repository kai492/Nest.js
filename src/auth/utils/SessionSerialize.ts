import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/typeorm";
import { UsersService } from "src/users/services/users/users.service";

export class SessionSerializer extends PassportSerializer{
    constructor(@Inject('USER_SERVICE') private readonly userService:UsersService){
        super();
    }
    
    serializeUser(user: User , done: (err, userId:number) => void) {
        console.log('seralizer')
        done(null, user.id);
    };

    async deserializeUser(userId: number, done: (err, user:User) => void) {
        const userFromDB = await this.userService.findUserById(userId);
       return userFromDB ? done(null, userFromDB): done(null,null);
        
    }
}