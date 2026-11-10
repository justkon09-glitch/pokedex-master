import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity.js';
import { Region } from '../../region/entities/region.entity.js';

@Entity({name:'entrenador'})
export class Entrenador {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'int', unique:true})
 usuarioId: number;
 @Column({type:'varchar', length:100})
 nombre: string;
 @Column({type:'int', nullable:true})
 edad: number;
 @Column({type:'int', nullable:true})
 regionId: number;
 @OneToOne(()=>Usuario)
 @JoinColumn({name:'usuarioId'})
 usuario: Usuario;
 @ManyToOne(()=>Region,{nullable:true})
 @JoinColumn({name:'regionId'})
 region: Region;
}
