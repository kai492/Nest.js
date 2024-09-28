import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumberString, IsString, ValidateNested, isNotEmpty } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto{
    
    @IsNumberString()
    @IsNotEmpty()
    id:number;

    @IsNotEmpty()
    @IsString()
    name:string;
    @IsEmail()
    email:string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address:CreateAddressDto;
    
}