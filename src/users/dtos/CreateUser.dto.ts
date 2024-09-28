import { IsEmail, IsNotEmpty, MinLength, minLength } from "class-validator";

export class CreateUserDto{

    @IsNotEmpty()
    @MinLength(3)
    username:string;

    @IsNotEmpty()
    @MinLength(9)
    password:string;
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
}