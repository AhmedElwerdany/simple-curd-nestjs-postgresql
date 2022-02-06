import { UserDto } from './user.dto';
import { User } from './user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

    async getAll(): Promise<User[]> {
        return this.usersRepository.find()
    }

    async getById(id: number): Promise<User> {
        const user = await this.usersRepository.findOne(id)
        
        if(!user){
            throw new NotFoundException()
        }

        return user
    }

    async create(userDto: UserDto):Promise<User> {
        const user = new User()
        user.firstName  = userDto.firstName
        user.lastName = userDto.lastName

       return user.save()
    }
    async update(id:number, userdto: UserDto) {
      const user = await this.usersRepository.update(id, userdto)
      if(user.affected === 0) {
        throw new NotFoundException()
      }
      return userdto
    }
    async delete(id: number) {
        const result = await  this.usersRepository.delete({id})
        if(result.affected === 0){
            throw new NotFoundException()
        }

        return {message : 'user deleted succfully'}
    }
}
