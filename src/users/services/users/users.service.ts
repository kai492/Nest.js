import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { SerailaizedUser, User } from 'src/users/types/index';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
      ) {}


    private users: User[] = [];

    getUsers(){
        return this.users.map((user) => new SerailaizedUser(user));
    }

    getUserByUsername(username:string){
        return this.users.find((user) => user.username === username);
    }

    getUserById(id:number){
        return this.users.find((user) => user.id === id);
    }

    createUser(createUserDto: CreateUserDto){
       const password =encodePassword(createUserDto.password);
       const newUser = this.usersRepository.create({...createUserDto, password});
       return this.usersRepository.save(newUser);
    }

    findUserByUsername(username:string){
        return this.usersRepository.findOne({where:{ username }});
    }

    findUserById(id:number){
        return this.usersRepository.findOne({where:{id}});
    }
}
