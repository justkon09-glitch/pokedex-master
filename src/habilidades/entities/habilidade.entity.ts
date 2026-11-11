import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'habilidades'})
export class Habilidad {
 @PrimaryGeneratedColumn()
 id:number;
 
 @Column({type:'varchar', length:100,unique:true})
 nombre: string;

 @Column({type:'text', nullable:true})
 descripcion: string;
}
