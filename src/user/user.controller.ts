import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { User } from './user.entity';

@Controller('users')
export class UserController {
    
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAll():Promise<User[]>{
        return this.userService.getAll()
    }

    @Get(':id')
    async getById(@Param('id',new  ParseIntPipe()) id: number):Promise<User>{
        return this.userService.getById(id)
    }

    @Post()
    async createUser(@Body() userdto: UserDto):Promise<User>{
        return this.userService.create(userdto)
    }

    @Put(':id')
    async updateUser(@Param('id',new  ParseIntPipe()) id: number, @Body() userdto: UserDto){
        return this.userService.update(id,userdto)
    } 

    @Delete(':id')
    async deleteUser(@Param('id',new  ParseIntPipe()) id: number) {
        return this.userService.delete(id)
    }
}
