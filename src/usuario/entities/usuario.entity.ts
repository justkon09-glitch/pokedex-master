import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from '../../roles/entities/role.entity.js';

@Entity({name:'usuario'})
export class Usuario {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'varchar', length:60,unique:true})
 nombreUsuario: string;
 @Column({type:'varchar', length:150,unique:true})
 correo: string;
 @Column({type:'varchar', length:255})
 password: string;
 @Column({type:'int'})
 rolId: number;
 @BeforeInsert()
 @BeforeUpdate()
 async hashPassword(){ if(this.password && !this.password.startsWith('$2')) this.password=await bcrypt.hash(this.password,10); }

 @ManyToOne(()=>Role,{nullable:false})
 @JoinColumn({name:'rolId'})
 rol: Role;
}
