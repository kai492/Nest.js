import { Exclude } from "class-transformer";

export interface User{
    id: number;
    username:string;
    password:string;
}

export class SerailaizedUser{
 id:number; 
 username: string;
 
 @Exclude()
 password: string;

 constructor(partial: Partial<SerailaizedUser>){
    Object.assign(this, partial);
 }
}