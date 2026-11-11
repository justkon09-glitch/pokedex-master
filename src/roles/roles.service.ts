import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity.js';
import { CreateRoleDto } from './dto/create-role.dto.js';
@Injectable()
export class RoleService {
 constructor(
  @InjectRepository(Role) private repo:Repository<Role>
) {}
  
async create(createRoleDto: CreateRoleDto) {

  const existe = await this.repo.findOne({
    where: {
      nombre: createRoleDto.nombre,
    },
  });

  if (existe) {
    throw new BadRequestException(
      'Ya existe un rol con ese nombre',
    );
  }

  const item = this.repo.create(createRoleDto);

  return this.repo.save(item);
}
 findAll() { 
  return this.repo.find(); 
}
 async findOne(id:number) {
   const item=await this.repo.findOne({where:{id} as any}); 
   if(!item) throw new NotFoundException('Registro no encontrado'); 
   return item; 
  }

async update(
  id: number,
  data: Partial<Role>,
) {

  const item = await this.findOne(id);

  if (data.nombre) {

    const existe = await this.repo.findOne({
      where: {
        nombre: data.nombre,
      },
    })

    if (existe && existe.id !== id) {
      throw new BadRequestException(
        'Ya existe un rol con ese nombre',
      )
    }
  }

  Object.assign(item, data);

  return this.repo.save(item);
}

async remove(id: number) {

  const item = await this.findOne(id);

  await this.repo.remove(item);

  return {
    message: 'Registro eliminado',
  }
}
}
