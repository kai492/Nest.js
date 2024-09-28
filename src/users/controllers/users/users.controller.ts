import { Controller, Inject, Get, Param, HttpException, HttpStatus, UseInterceptors, ClassSerializerInterceptor, ParseIntPipe, UseFilters , Post, Body, UsePipes, ValidationPipe, UseGuards} from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/utils/LocalGuard';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerailaizedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly usersService: UsersService) {}

    @UseGuards(AuthenticatedGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUser(){
        return this.usersService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/username/:username')
    getUserByUsername(@Param('username') username: string) {
        const user = this.usersService.getUserByUsername(username);
        if (user) return new SerailaizedUser(user);
        else throw new HttpException("user not found", HttpStatus.BAD_REQUEST);

    }
    
    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    @Get('/id/:id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.usersService.getUserById(id);
        if (user) return new SerailaizedUser(user);
        else throw new UserNotFoundException("we couldn't find the user");
    }


    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() creatrUserDto:CreateUserDto){
        return this.usersService.createUser(creatrUserDto);
    } 
    
}
