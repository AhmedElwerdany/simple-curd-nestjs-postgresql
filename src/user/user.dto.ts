import {IsString, IsNotEmpty} from 'class-validator'

export class UserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @IsString()
    @IsNotEmpty()
    lastName: string;
    
    id: number
}