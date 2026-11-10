import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'roles'})
export class Role {
 @PrimaryGeneratedColumn()
 id:number;
 @Column({type:'varchar', length:50,unique:true})
 nombre: string;
 @Column({type:'text', nullable:true})
 descripcion: string;
}
