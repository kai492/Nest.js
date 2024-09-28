import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'user_id'})
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'user_name'
    })
    username: string;

    @Column({
        nullable:false,
        name: 'email_address',
        default:''
    })
    email:string;

    @Column({
        nullable:false,
        default:''
    })
    password:string;

}