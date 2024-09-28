import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService){

    }
    
    async validateUser(username: string, password: string){
        const userDb = await this.userService.findUserByUsername(username);
        console.log("inside auth-service");
        if (userDb){
            const matched =comparePassword(password,userDb.password);
            if (matched){
                console.log("password matched")
                return userDb;}
            else {
                console.log("password not matched")
                return null;
            }

        }
        console.log(" user validation failed");
        return null;
    }
}
