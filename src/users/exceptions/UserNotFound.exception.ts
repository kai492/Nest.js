import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotFoundException extends HttpException{
    constructor(msg?:string, status?: HttpStatus ){
        super(msg || "User Not Foound", status || HttpStatus.NOT_FOUND);
    }
}